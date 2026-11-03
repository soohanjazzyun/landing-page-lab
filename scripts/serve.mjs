#!/usr/bin/env node
import http from 'node:http';
import { readFile, realpath, stat } from 'node:fs/promises';
import { resolve, extname, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = await realpath(fileURLToPath(new URL('../site/', import.meta.url)));
const args = process.argv.slice(2);
const portIndex = args.indexOf('--port');
const port = Number(portIndex >= 0 ? args[portIndex + 1] : 4173);
if (!Number.isInteger(port) || port < 1 || port > 65535) throw new Error('Choose a valid --port.');
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.json': 'application/json; charset=utf-8', '.svg': 'image/svg+xml', '.png': 'image/png', '.webp': 'image/webp', '.woff2': 'font/woff2', '.zip': 'application/zip', '.txt': 'text/plain; charset=utf-8', '.md': 'text/markdown; charset=utf-8' };

const server = http.createServer(async (request, response) => {
  if (!['GET', 'HEAD'].includes(request.method)) { response.writeHead(405); response.end('Method not allowed'); return; }
  try {
    const pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
    let candidate = resolve(root, `.${pathname}`);
    if (candidate !== root && !candidate.startsWith(root + sep)) throw new Error('Outside site');
    if ((await stat(candidate)).isDirectory()) candidate = resolve(candidate, 'index.html');
    candidate = await realpath(candidate);
    if (!candidate.startsWith(root + sep)) throw new Error('Outside site');
    const body = await readFile(candidate);
    response.writeHead(200, { 'content-type': types[extname(candidate)] || 'application/octet-stream', 'cache-control': 'no-store', 'x-content-type-options': 'nosniff' });
    response.end(request.method === 'HEAD' ? undefined : body);
  } catch {
    response.writeHead(404, { 'content-type': 'text/plain; charset=utf-8' });
    response.end('Not found');
  }
});
server.listen(port, '127.0.0.1', () => process.stdout.write(`Landing Page Lab: http://127.0.0.1:${port}\n`));
