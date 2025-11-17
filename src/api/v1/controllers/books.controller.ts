import { Request, Response } from 'express';
import { db } from '../repositories/firestore.client';
import { createBookSchema, updateBookSchema } from '../schemas/book.schema';
import { any } from 'joi';
import * as bookService from '../services/bookService';

export const getBooks = async (req: Request, res: Response) => {
  res.json([{ id: '1', title: 'Example Book', author: 'Author' }]);
};

export const getBookById = async (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({ id, title: 'Example Book', author: 'Author' });
};

export const createBook = async (req: Request, res: Response) => {
  const { error, value } = createBookSchema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  const book = value;
  await db.collection('books').add(book);
  res.status(201).json({ message: 'Book created', book });
};

export const updateBook = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { error, value } = updateBookSchema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  await db.collection('books').doc(id).update(value);
  res.json({ message: 'Book updated', book: value });
};

export const deleteBook = async (req: Request, res: Response) => {
  const { id } = req.params;
  await db.collection('books').doc(id).delete();
  res.json({ message: 'Book deleted' });
};

export const uploadBookCover = async (req: Request, res: Response) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: "No file uploaded" });
        }

        const bookId = req.params.id;
        const filePath = `/uploads/${req.file.filename}`;

        const updatedBook = await bookService.updateBookCover(bookId, filePath);

        res.status(200).json({
            message: "Cover uploaded successfully",
            coverUrl: filePath,
            book: updatedBook,
        });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};












