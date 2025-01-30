import { expect, test, describe } from 'vitest';
import request from 'supertest';
import app from '../index.js';

describe('GET /hello', () => {
  test('responds with Hello World!', async () => {
    const res = await request(app).get('/hello');
    expect(res.status).toBe(200);
    expect(res.text).toBe('Hello from BCN!');
  });
});
