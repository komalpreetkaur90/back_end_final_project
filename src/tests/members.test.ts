import { Request, Response } from 'express';
import * as membersController from '../api/v1/controllers/members.controller';
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

describe('Members Controller', () => {
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

  test('getMembers returns list of members', async () => {
    await membersController.getMembers(req as Request, res as Response);
    expect(jsonMock).toHaveBeenCalledWith([{ id: '1', name: 'John Doe', email: 'john@example.com' }]);
  });

  test('createMember adds a member', async () => {
    req.body = { name: 'Alice', email: 'alice@example.com' };
    await membersController.createMember(req as Request, res as Response);
    expect(jsonMock).toHaveBeenCalledWith({
      message: 'Member created',
      member: { name: 'Alice', email: 'alice@example.com' },
    });
  });
});
