import * as bookRepository from "../repositories/bookRepository";
import * as bookService from '../services/bookService';


export const createBook = async (data: any) => {
    return await bookRepository.createBook(data);
};

export const getAllBooks = async () => {
    return await bookRepository.getAllBooks();
};

export const getBookById = async (id: string) => {
    return await bookRepository.getBookById(id);
};

export const updateBook = async (id: string, data: any) => {
    return await bookRepository.updateBook(id, data);
};

export const deleteBook = async (id: string) => {
    return await bookRepository.deleteBook(id);
};

export const updateBookCover = async (bookId: string, coverUrl: string) => {
    return await bookRepository.updateBookCover(bookId, coverUrl);
};
