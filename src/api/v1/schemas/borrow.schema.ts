import Joi from 'joi';

/**
 * @openapi
 * components:
 *   schemas:
 *     Borrow:
 *       type: object
 *       required:
 *         - bookId
 *         - memberId
 *         - dueDate
 *       properties:
 *         id:
 *           type: string
 *         bookId:
 *           type: string
 *           description: ID of the borrowed book
 *         memberId:
 *           type: string
 *           description: ID of the member who borrowed
 *         dueDate:
 *           type: string
 *           format: date
 *         returned:
 *           type: boolean
 */
export const createBorrowSchema = Joi.object({
  bookId: Joi.string().required(),
  memberId: Joi.string().required(),
  dueDate: Joi.date().required(),
  returned: Joi.boolean().default(false),
});

export const updateBorrowSchema = Joi.object({
  bookId: Joi.string().optional(),
  memberId: Joi.string().optional(),
  dueDate: Joi.date().optional(),
  returned: Joi.boolean().optional(),
});
