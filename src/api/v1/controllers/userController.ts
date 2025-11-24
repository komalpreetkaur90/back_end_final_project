import { Request, Response, NextFunction } from "express";
import { auth } from "../../../../config/firebaseConfig";
import { AuthenticationError, AuthorizationError } from "../errors/errors";

/**
 * Set custom user claims (admin, manager, user)
 */
export const setCustomClaim = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const { uid, role } = req.body;

        if (!uid || !role) {
            throw new AuthorizationError(
                "UID and role are required.",
                "MISSING_FIELDS"
            );
        }

        await auth.setCustomUserClaims(uid, { role });

        return res.status(200).json({
            success: true,
            message: `Role '${role}' assigned to user ${uid}`,
        });
    } catch (error) {
        next(error);
    }
};

/**
 * Get Firebase user details by UID
 */
export const getUserDetails = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const { id } = req.params;

        if (!id) {
            throw new AuthenticationError(
                "User ID is required",
                "USER_ID_REQUIRED"
            );
        }

        const userRecord = await auth.getUser(id);

        return res.status(200).json({
            success: true,
            data: {
                uid: userRecord.uid,
                email: userRecord.email,
                phoneNumber: userRecord.phoneNumber,
                displayName: userRecord.displayName,
                customClaims: userRecord.customClaims,
                disabled: userRecord.disabled,
                creationTime: userRecord.metadata.creationTime,
                lastSignInTime: userRecord.metadata.lastSignInTime,
            },
        });
    } catch (error) {
        next(error);
    }
};
