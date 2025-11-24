import { Router } from 'express';
import * as bookController from '../controllers/books.controller';
import {validate} from '../middleware/validate'
import  *  as bookSchema from '../validation/bookValidation'

const router = Router();


/**
 * @openapi
 * /api/v1/books:
 *   get:
 *     summary: Get all books
 *     tags: [Books]
 *     responses:
 *       "200":
 *         description: List of all books
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: "#/components/schemas/Book"
 */
router.get('/', bookController.getBooks);

/**
 * @openapi
 * /api/v1/books/{id}:
 *   get:
 *     summary: Get a book by ID
 *     tags: [Books]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       "200":
 *         description: Book found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Book"
 */
router.get('/:id', bookController.getBookById);

/**
 * @openapi
 * /api/v1/books:
 *   post:
 *     summary: Create a new book
 *     tags: [Books]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/Book"
 *     responses:
 *       "201":
 *         description: Book created successfully
 */
router.post('/', validate(bookSchema.bookSchema), bookController.createBook);

/**
 * @openapi
 * /api/v1/books/{id}:
 *   put:
 *     summary: Update a book
 *     tags: [Books]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/BookUpdate"
 *     responses:
 *       "200":
 *         description: Book updated successfully
 */
router.put('/:id', validate(bookSchema.updateBookSchema), bookController.updateBook);

/**
 * @openapi
 * /api/v1/books/{id}:
 *   delete:
 *     summary: Delete a book
 *     tags: [Books]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       "200":
 *         description: Book deleted successfully
 */
router.delete('/:id', bookController.deleteBook);

export default router;