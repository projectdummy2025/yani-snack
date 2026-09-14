import { expect, test, describe } from 'bun:test';
import serverInstance from '../src/server';
import { readdirSync, statSync } from 'fs';

describe('Server Integration', () => {
  test('Server responds with HTML page content', async () => {
    const request = new Request('http://localhost:3215/');
    const response = await serverInstance.fetch(request);

    expect(response.status).toBe(200);

    const text = await response.text();
    expect(text).toContain('Yani Snack');
    expect(text).toContain('<div id="root"></div>');
  });

  test('Server serves built CSS asset', async () => {
    const cssFiles = readdirSync('./dist/assets').filter((file) => file.endsWith('.css'));
    const cssPath = `/assets/${cssFiles[0]}`;
    const request = new Request(`http://localhost:3215${cssPath}`);
    const response = await serverInstance.fetch(request);

    expect(response.status).toBe(200);
    expect(response.headers.get('content-type')).toContain('css');
  });

  test('Server serves built JS asset', async () => {
    const jsFiles = readdirSync('./dist/assets').filter((file) => file.endsWith('.js'));
    const jsPath = `/assets/${jsFiles[0]}`;
    const request = new Request(`http://localhost:3215${jsPath}`);
    const response = await serverInstance.fetch(request);

    expect(response.status).toBe(200);
    expect(response.headers.get('content-type')).toContain('javascript');
  });
});
