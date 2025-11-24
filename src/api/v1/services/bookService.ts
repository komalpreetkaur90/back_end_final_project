import {
  createDocument,
  getDocuments,
  getDocumentById,
  updateDocument,
  deleteDocument
} from "../repositories/firestoreRepository";

import { Book } from "../models/book.model";

const COLLECTION = "books";

export const createBookService = async (data: Book) => {
  return await createDocument<Book>(COLLECTION, data);
};

export const updateBookService = async (id: string, data: Partial<Book>) => {
  return await updateDocument<Book>(COLLECTION, id, data);
};

export const getBooksService = async () => {
  const snapshot = await getDocuments(COLLECTION);
  return snapshot.docs.map((doc: any): Book => ({ id: doc.id, ...doc.data() })) as Book[];
};

export const getBookByIdService = async (id: string) => {
  const doc = await getDocumentById(COLLECTION, id);
  return doc?.exists ? ({ id: doc.id, ...doc.data() } as Book) : null;
};

export const deleteBookService = async (id: string) => {
  return await deleteDocument(COLLECTION, id);
};
