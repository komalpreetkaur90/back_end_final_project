import {
  createDocument,
  getDocuments,
  getDocumentById,
  updateDocument,
  deleteDocument
} from "../repositories/firestoreRepository";

import { Borrow } from "../models/borrow.model";

const COLLECTION = "borrows";

export const getBorrowsService = async () => {
  const snapshot = await getDocuments(COLLECTION);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Borrow[];
};

export const getBorrowByIdService = async (id: string) => {
  const doc = await getDocumentById(COLLECTION, id);
  return doc?.exists ? ({ id: doc.id, ...doc.data() } as Borrow) : null;
};

export const createBorrowService = async (data: Borrow) => {
  return await createDocument<Borrow>(COLLECTION, data);
};

export const updateBorrowService = async (id: string, data: Partial<Borrow>) => {
  return await updateDocument<Borrow>(COLLECTION, id, data);
};

export const deleteBorrowService = async (id: string) => {
  return await deleteDocument(COLLECTION, id);
};
