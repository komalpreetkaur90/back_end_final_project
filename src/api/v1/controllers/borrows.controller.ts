import { Request, Response } from 'express';
import { db } from '../repositories/firestore.client';
import { createBorrowSchema, updateBorrowSchema } from '../schemas/borrow.schema';

export const getBorrows = async (req: Request, res: Response) => {
  res.json([{ id: '1', bookId: '1', memberId: '1', dueDate: '2025-12-31', returned: false }]);
};

export const getBorrowById = async (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({ id, bookId: '1', memberId: '1', dueDate: '2025-12-31', returned: false });
};

export const createBorrow = async (req: Request, res: Response) => {
  const { error, value } = createBorrowSchema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  const borrow = value;
  await db.collection('borrows').add(borrow);
  res.status(201).json({ message: 'Borrow record created', borrow });
};

export const updateBorrow = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { error, value } = updateBorrowSchema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  await db.collection('borrows').doc(id).update(value);
  res.json({ message: 'Borrow record updated', borrow: value });
};

export const deleteBorrow = async (req: Request, res: Response) => {
  const { id } = req.params;
  await db.collection('borrows').doc(id).delete();
  res.json({ message: 'Borrow record deleted' });
};