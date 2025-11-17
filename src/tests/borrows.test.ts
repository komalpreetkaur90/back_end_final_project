import { Request, Response } from 'express';
import * as borrowController from '../api/v1/controllers/borrows.controller';
import { db } from '../api/v1/repositories/firestore.client';

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

describe('Borrow Controller', () => {
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

   afterEach(() => {
    jest.clearAllMocks();
  });

  it('createBorrow adds a borrow record', async () => {
    req.body = { bookId: '1', memberId: '2', dueDate: '2025-12-31' };

    await borrowController.createBorrow(req as Request, res as Response);

    expect(jsonMock).toHaveBeenCalledWith({
      message: 'Borrow record created',
      borrow: {
        bookId: '1',
        memberId: '2',
        dueDate: new Date('2025-12-31'),
        returned: false,
      },
    });
  });
});