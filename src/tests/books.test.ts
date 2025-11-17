import { Request, Response } from 'express';
import * as bookController from '../api/v1/controllers/books.controller';
import { db } from '../api/v1/repositories//firestore.client';

jest.mock('../api/v1/repositories/firestore.client', () => {
  return {
    db: {
      collection: jest.fn(() => ({
        add: jest.fn(() => Promise.resolve({ id: 'mock-id' })),
        doc: jest.fn(() => ({
          update: jest.fn(() => Promise.resolve()),
        })),
      })),
    },
  };
});

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

  test('getBooks returns list of books', async () => {
    await bookController.getBooks(req as Request, res as Response);
    expect(jsonMock).toHaveBeenCalledWith([{ id: '1', title: 'Example Book', author: 'Author' }]);
  });

  test('createBook adds a book', async () => {
    req.body = { title: 'New Book', author: 'Tester' };
    await bookController.createBook(req as Request, res as Response);
    expect(jsonMock).toHaveBeenCalledWith({
      message: 'Book created',
      book: { title: 'New Book', author: 'Tester' },
    });
  });

  test('updateBook updates a book', async () => {
    req.body = { title: 'Updated Book' };
    req.params = { id: '1' };
    await bookController.updateBook(req as Request, res as Response);
    expect(jsonMock).toHaveBeenCalledWith({
      message: 'Book updated',
      book: { title: 'Updated Book' },
    });
  });
});
