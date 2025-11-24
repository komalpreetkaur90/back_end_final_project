import Joi from "joi";

/**
 * @openapi
 * components:
 *   schemas:
 *     Member:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - phone
 *       properties:
 *         name:
 *           type: string
 *           description: Full name of the member
 *         email:
 *           type: string
 *           format: email
 *           description: Email address of the member
 *         phone:
 *           type: string
 *           description: Contact phone number of the member
 */
export const memberSchema = Joi.object({
  name: Joi.string().min(2).max(100).required(),
  email: Joi.string().email().required(),
  phone: Joi.string().min(7).max(15).required(),
});

/**
 * @openapi
 * components:
 *   schemas:
 *     MemberUpdate:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: Full name of the member
 *         email:
 *           type: string
 *           format: email
 *           description: Email address of the member
 *         phone:
 *           type: string
 *           description: Contact phone number of the member
 */
export const updateMemberSchema = Joi.object({
  name: Joi.string().min(2).max(100),
  email: Joi.string().email(),
  phone: Joi.string().min(7).max(15),
});
