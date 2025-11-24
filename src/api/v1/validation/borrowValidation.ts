import Joi from "joi";

/**
 * @openapi
 * components:
 *   schemas:
 *     Borrow:
 *       type: object
 *       required:
 *         - memberId
 *         - bookId
 *         - borrowDate
 *       properties:
 *         memberId:
 *           type: string
 *           description: ID of the member borrowing the book
 *         bookId:
 *           type: string
 *           description: ID of the borrowed book
 *         borrowDate:
 *           type: string
 *           format: date
 *           description: Date when the book was borrowed
 *         returnDate:
 *           type: string
 *           format: date
 *           description: Date when the book is expected to be returned
 */
export const borrowSchema = Joi.object({
  memberId: Joi.string().required(),
  bookId: Joi.string().required(),
  borrowDate: Joi.date().required(),
  returnDate: Joi.date().greater(Joi.ref("borrowDate")).optional(),
});

/**
 * @openapi
 * components:
 *   schemas:
 *     BorrowUpdate:
 *       type: object
 *       properties:
 *         memberId:
 *           type: string
 *           description: ID of the member borrowing the book
 *         bookId:
 *           type: string
 *           description: ID of the borrowed book
 *         borrowDate:
 *           type: string
 *           format: date
 *           description: Date when the book was borrowed
 *         returnDate:
 *           type: string
 *           format: date
 *           description: Date when the book is expected to be returned
 */
export const updateBorrowSchema = Joi.object({
  memberId: Joi.string(),
  bookId: Joi.string(),
  borrowDate: Joi.date(),
  returnDate: Joi.date().greater(Joi.ref("borrowDate")),
});
