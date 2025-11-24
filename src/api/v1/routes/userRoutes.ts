import { Router } from "express";
import authenticate from "../middleware/authenticate";
import isAuthorized from "../middleware/authorize";
import { setCustomClaim, getUserDetails } from "../controllers/userController";

const router = Router();

/**
 * @openapi
 * /api/v1/users/set-claim:
 *   post:
 *     summary: Assign a role to a user
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - uid
 *               - role
 *             properties:
 *               uid:
 *                 type: string
 *                 description: Firebase UID of the user
 *               role:
 *                 type: string
 *                 description: Role to assign (e.g., admin, manager, user)
 *     responses:
 *       200:
 *         description: Role assigned successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 */

router.post(
    "/set-claim",
    setCustomClaim
);

/**
 * @openapi
 * /api/v1/users/{id}:
 *   get:
 *     summary: Get user details by ID
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: UID of the user
 *     responses:
 *       200:
 *         description: User details retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 uid:
 *                   type: string
 *                 email:
 *                   type: string
 *                 role:
 *                   type: string
 *                 displayName:
 *                   type: string
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 *       404:
 *         description: User not found
 */

router.get(
    "/:id",
    authenticate,
    isAuthorized({ hasRole: ["admin", "manager"], allowSameUser: true }),
    getUserDetails
);

export default router;


