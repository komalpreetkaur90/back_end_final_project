import { Request, Response } from 'express';
import * as bookController from '../api/v1/controllers/books.controller';
import * as bookService from '../api/v1/services/bookService';

jest.mock('../api/v1/services/bookService');

describe('Book Controller', () => {
  let req: Partial<Request>;
  let res: Partial<Response>;
  let jsonMock: jest.Mock;

  beforeEach(() => {
    jsonMock = jest.fn();

    req = {};
    res = {
      status: jest.fn().mockReturnThis(),
      json: jsonMock,
    };
  });

  test('getBooks should return list of books', async () => {
    (bookService.getBooksService as jest.Mock).mockResolvedValue([
      { id: '1', title: 'Book 1' },
    ]);

    await bookController.getBooks(req as Request, res as Response);

    expect(jsonMock).toHaveBeenCalledWith({
      success: true,
      data: [{ id: '1', title: 'Book 1' }],
    });
  });

  test('createBook should create a book', async () => {
    req.body = { title: 'New Book', author: 'Tester' };

    (bookService.createBookService as jest.Mock).mockResolvedValue('mock-id');

    await bookController.createBook(req as Request, res as Response);

    expect(jsonMock).toHaveBeenCalledWith({
      success: true,
      message: 'Book created',
      id: 'mock-id',
    });
  });

  test('updateBook should update existing book', async () => {
    req.body = { title: 'Updated Book' };
    req.params = { id: '1' };

    (bookService.updateBookService as jest.Mock).mockResolvedValue(undefined);

    await bookController.updateBook(req as Request, res as Response);

    expect(jsonMock).toHaveBeenCalledWith({
      success: true,
      message: 'Book updated',
    });
  });
});
