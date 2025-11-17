import { Request, Response } from 'express';
import { db } from '../repositories/firestore.client';
import { createMemberSchema, updateMemberSchema } from '../schemas/member.schema';

export const getMembers = async (req: Request, res: Response) => {
  res.json([{ id: '1', name: 'John Doe', email: 'john@example.com' }]);
};

export const getMemberById = async (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({ id, name: 'John Doe', email: 'john@example.com' });
};

export const createMember = async (req: Request, res: Response) => {
  const { error, value } = createMemberSchema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  const member = value;
  await db.collection('members').add(member);
  res.status(201).json({ message: 'Member created', member });
};

export const updateMember = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { error, value } = updateMemberSchema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  await db.collection('members').doc(id).update(value);
  res.json({ message: 'Member updated', member: value });
};

export const deleteMember = async (req: Request, res: Response) => {
  const { id } = req.params;
  await db.collection('members').doc(id).delete();
  res.json({ message: 'Member deleted' });
};