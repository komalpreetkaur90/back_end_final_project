import { Request, Response } from 'express';
import * as borrowController from '../api/v1/controllers/borrows.controller';
import * as borrowService from '../api/v1/services/borrowService';

jest.mock('../api/v1/services/borrows.service');

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

  it('createBorrow should add a borrow record', async () => {
    req.body = {
      bookId: '1',
      memberId: '2',
      dueDate: '2025-12-31'
    };

    // Mock service return
    (borrowService.createBorrowService as jest.Mock).mockResolvedValue('mock-id');

    await borrowController.createBorrow(req as Request, res as Response);

    expect(jsonMock).toHaveBeenCalledWith({
      success: true,
      message: 'Borrow record created',
      id: 'mock-id'
    });
  });
});
