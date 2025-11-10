import { Router } from 'express';
import { getBorrows, createBorrow } from '../controllers/borrows.controller';

const router = Router();

router.get('/', getBorrows);
router.post('/', createBorrow);

export default router;
