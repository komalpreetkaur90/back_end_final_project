import request from 'supertest';
import app from '../app';

describe('Members API', () => {
  it('should return members', async () => {
    const res = await request(app).get('/api/v1/members');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ id: '1', name: 'John Doe', email: 'john@example.com' }]);
  });
});
