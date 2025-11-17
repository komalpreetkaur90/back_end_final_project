import { Router } from 'express';
import {
  getBorrows,
  getBorrowById,
  createBorrow,
  updateBorrow,
  deleteBorrow
} from '../controllers/borrows.controller';

const router = Router();

router.get('/', getBorrows);
router.get('/:id', getBorrowById);
router.post('/', createBorrow);
router.put('/:id', updateBorrow);
router.delete('/:id', deleteBorrow);

export default router;
