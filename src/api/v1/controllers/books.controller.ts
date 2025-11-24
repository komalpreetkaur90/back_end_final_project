import { Request, Response } from "express";
import {
  createBookService,
  updateBookService,
  getBooksService,
  getBookByIdService,
  deleteBookService
} from "../services/bookService";
import { Book } from "../models/book.model";
import { cache } from "../../../../utils/caching";

export const createBook = async (req: Request, res: Response) => {
  try {
    const data: Book = req.body;
    const id = await createBookService(data);

    // Invalidate cache since new book is created
    cache.del("books");
    console.log(`Cache invalidated: 'books' after creating book with ID ${id}`);

    console.log(`Book created: ${JSON.stringify(data)} with ID ${id}`);
    res.status(201).json({ success: true, message: "Book created", id });
  } catch (error: any) {
    console.error("Error creating book:", error.message);
    res.status(500).json({ success: false, error: error.message });
  }
};

export const updateBook = async (req: Request, res: Response) => {
  try {
    const data: Partial<Book> = req.body;
    await updateBookService(req.params.id, data);

    // Invalidate cache since book data changed
    cache.del("books");
    console.log(`Cache invalidated: 'books' after updating book with ID ${req.params.id}`);
    console.log(`Book updated: ${JSON.stringify(data)} with ID ${req.params.id}`);

    res.json({ success: true, message: "Book updated" });
  } catch (error: any) {
    console.error(`Error updating book ID ${req.params.id}:`, error.message);
    res.status(500).json({ success: false, error: error.message });
  }
};

export const getBooks = async (_req: Request, res: Response) => {
  try {
    // Check cache first
    const cachedBooks = cache.get("books");
    if (cachedBooks) {
      console.log("Cache hit: Returning books from cache");
      return res.json({ success: true, fromCache: true, data: cachedBooks });
    }

    // Fetch from Firestore
    const books = await getBooksService();
    console.log("Cache miss: Fetched books from Firestore");

    // Save result in cache
    cache.set("books", books);
    console.log("Books saved to cache with key 'books'");

    res.json({ success: true, fromCache: false, data: books });
  } catch (error: any) {
    console.error("Error fetching books:", error.message);
    res.status(500).json({ success: false, error: error.message });
  }
};

export const getBookById = async (req: Request, res: Response) => {
  try {
    const book = await getBookByIdService(req.params.id);

    if (!book) {
      console.log(`Book not found with ID ${req.params.id}`);
      return res.status(404).json({
        success: false,
        message: "Book not found"
      });
    }

    console.log(`Book retrieved with ID ${req.params.id}: ${JSON.stringify(book)}`);
    res.json({ success: true, data: book });
  } catch (error: any) {
    console.error(`Error fetching book ID ${req.params.id}:`, error.message);
    res.status(500).json({ success: false, error: error.message });
  }
};

export const deleteBook = async (req: Request, res: Response) => {
  try {
    await deleteBookService(req.params.id);

    // Invalidate cache since a book is deleted
    cache.del("books");
    console.log(`Cache invalidated: 'books' after deleting book with ID ${req.params.id}`);
    console.log(`Book deleted with ID ${req.params.id}`);

    res.json({ success: true, message: "Book deleted" });
  } catch (error: any) {
    console.error(`Error deleting book ID ${req.params.id}:`, error.message);
    res.status(500).json({ success: false, error: error.message });
  }
};
