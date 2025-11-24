import { Router } from 'express';
import {
  getBorrows,
  getBorrowById,
  createBorrow,
  updateBorrow,
  deleteBorrow
} from '../controllers/borrows.controller';

const router = Router();

/**
 * @openapi
 * /api/v1/borrows:
 *   get:
 *     summary: Get all borrow records
 *     tags: [Borrows]
 *     responses:
 *       200:
 *         description: List of all borrow records
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: "#/components/schemas/Borrow"
 */
router.get('/', getBorrows);

/**
 * @openapi
 * /api/v1/borrows/{id}:
 *   get:
 *     summary: Get borrow record by ID
 *     tags: [Borrows]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Borrow record found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Borrow"
 */
router.get('/:id', getBorrowById);

/**
 * @openapi
 * /api/v1/borrows:
 *   post:
 *     summary: Create a new borrow record
 *     tags: [Borrows]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/Borrow"
 *     responses:
 *       201:
 *         description: Borrow record created
 */
router.post('/', createBorrow);

/**
 * @openapi
 * /api/v1/borrows/{id}:
 *   put:
 *     summary: Update borrow record
 *     tags: [Borrows]
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
 *             $ref: "#/components/schemas/BorrowUpdate"
 *     responses:
 *       200:
 *         description: Borrow record updated
 */
router.put('/:id', updateBorrow);

/**
 * @openapi
 * /api/v1/borrows/{id}:
 *   delete:
 *     summary: Delete borrow record
 *     tags: [Borrows]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Borrow deleted
 */
router.delete('/:id', deleteBorrow);

export default router;
