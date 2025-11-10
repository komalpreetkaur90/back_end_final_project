import { Request, Response } from 'express';
import { db } from '../repositories/firestore.client';

export const getBorrows = async (req: Request, res: Response) => {
  res.json([{ id: '1', bookId: '1', memberId: '1', dueDate: '2025-12-31', returned: false }]);
};

export const createBorrow = async (req: Request, res: Response) => {
  const borrow = req.body;
  await db.collection('borrows').add(borrow);
  res.status(201).json({ message: 'Borrow record created', borrow });
};
