import Joi from 'joi';

/**
 * @openapi
 * components:
 *   schemas:
 *     Member:
 *       type: object
 *       required:
 *         - name
 *         - email
 *       properties:
 *         id:
 *           type: string
 *           description: Auto-generated ID of the member
 *         name:
 *           type: string
 *           description: Full name of the member
 *         email:
 *           type: string
 *           description: Email address of the member
 */
export const createMemberSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
});

export const updateMemberSchema = Joi.object({
  name: Joi.string().optional(),
  email: Joi.string().email().optional(),
});
