import request from 'supertest';
import app from '../app';

describe('Books API', () => {
  it('should return books', async () => {
    const res = await request(app).get('/api/books');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ id: '1', title: 'Example Book', author: 'Author' }]);
  });
});
