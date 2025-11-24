import Joi from "joi";

/**
 * @openapi
 * components:
 *   schemas:
 *     Book:
 *       type: object
 *       required:
 *         - title
 *         - author
 *         - availableCopies
 *       properties:
 *         title:
 *           type: string
 *           description: Title of the book
 *         author:
 *           type: string
 *           description: Author of the book
 *         genre:
 *           type: string
 *           description: Genre of the book
 *         publishedYear:
 *           type: integer
 *           description: Year the book was published
 *         availableCopies:
 *           type: integer
 *           description: Number of available copies
 */
export const bookSchema = Joi.object({
  title: Joi.string().min(2).max(150).required(),
  author: Joi.string().min(2).max(100).required(),
  genre: Joi.string().optional(),
  publishedYear: Joi.number().integer().min(1500).max(new Date().getFullYear()),
  availableCopies: Joi.number().integer().min(0).required(),
});

/**
 * @openapi
 * components:
 *   schemas:
 *     BookUpdate:
 *       type: object
 *       properties:
 *         title:
 *           type: string
 *           description: Title of the book
 *         author:
 *           type: string
 *           description: Author of the book
 *         genre:
 *           type: string
 *           description: Genre of the book
 *         publishedYear:
 *           type: integer
 *           description: Year the book was published
 *         availableCopies:
 *           type: integer
 *           description: Number of available copies
 */
export const updateBookSchema = Joi.object({
  title: Joi.string().min(2).max(150),
  author: Joi.string().min(2).max(100),
  genre: Joi.string(),
  publishedYear: Joi.number().integer().min(1500).max(new Date().getFullYear()),
  availableCopies: Joi.number().integer().min(0),
});
