import request from 'supertest';
import app from '../app';

describe('Borrows API', () => {
  it('should return borrows', async () => {
    const res = await request(app).get('/api/v1/borrows');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ id: '1', bookId: '1', memberId: '1', dueDate: '2025-12-31', returned: false }]);
  });
});
