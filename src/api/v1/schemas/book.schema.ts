import Joi from 'joi';

/**
 * @openapi
 * components:
 *   schemas:
 *     Book:
 *       type: object
 *       required:
 *         - title
 *         - author
 *       properties:
 *         id:
 *           type: string
 *           description: Auto-generated ID of the book
 *         title:
 *           type: string
 *           description: Title of the book
 *         author:
 *           type: string
 *           description: Author of the book
 */
export const createBookSchema = Joi.object({
  title: Joi.string().required(),
  author: Joi.string().required(),
});

export const updateBookSchema = Joi.object({
  title: Joi.string().optional(),
  author: Joi.string().optional(),
});
