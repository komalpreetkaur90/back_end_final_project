import { Request, Response } from 'express';
import { db } from '../repositories/firestore.client';

export const getMembers = async (req: Request, res: Response) => {
  res.json([{ id: '1', name: 'John Doe', email: 'john@example.com' }]);
};

export const createMember = async (req: Request, res: Response) => {
  const member = req.body;
  await db.collection('members').add(member);
  res.status(201).json({ message: 'Member created', member });
};
