import { Request, Response } from 'express';
import { db } from '../repositories/firestore.client';

export const getBooks = async (req: Request, res: Response) => {
  res.json([{ id: '1', title: 'Example Book', author: 'Author' }]);
};

export const createBook = async (req: Request, res: Response) => {
  const book = req.body;
  await db.collection('books').add(book);
  res.status(201).json({ message: 'Book created', book });
};















