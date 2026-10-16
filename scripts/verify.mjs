import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';

const distDir = path.resolve('dist');

function createStaticServer(rootDir) {
  const mimeTypes = {
    '.html': 'text/html; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.js': 'application/javascript; charset=utf-8',
    '.svg': 'image/svg+xml',
    '.json': 'application/json; charset=utf-8',
    '.png': 'image/png',
    '.webp': 'image/webp',
  };

  return http.createServer((req, res) => {
    const urlObj = new URL(req.url || '/', 'http://localhost');
    const reqPath = decodeURIComponent(urlObj.pathname);

    let filePath = path.join(rootDir, reqPath);
    if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
      filePath = path.join(filePath, 'index.html');
    } else if (!path.extname(filePath) && fs.existsSync(`${filePath}.html`)) {
      filePath = `${filePath}.html`;
    } else if (!path.extname(filePath) && fs.existsSync(path.join(filePath, 'index.html'))) {
      filePath = path.join(filePath, 'index.html');
    }

    if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
      const notFoundPath = path.join(rootDir, '404.html');
      res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(fs.existsSync(notFoundPath) ? fs.readFileSync(notFoundPath) : 'Not found');
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'application/octet-stream' });
    res.end(fs.readFileSync(filePath));
  });
}

function runPythonPlaywright(baseUrl) {
  return new Promise((resolve, reject) => {
    const child = spawn('python', ['scripts/e2e_playwright_check.py', baseUrl], {
      stdio: 'inherit',
      env: { ...process.env, PYTHONIOENCODING: 'utf-8' },
    });
    child.on('error', reject);
    child.on('exit', (code) => {
      if (code === 0) resolve();
      else reject(new Error(`Playwright script exited with code ${code}`));
    });
  });
}

async function runVerification() {
  console.log('=== BẮT ĐẦU KIỂM TRA TỰ ĐỘNG FAGON WEBSITE ===');

  const expectedFiles = [
    'index.html',
    'giao-vien/index.html',
    'nguoi-ban-hang/index.html',
    'van-phong/index.html',
    'sinh-vien/index.html',
    'sang-tao/index.html',
    'dich-vu/index.html',
    'bao-mat/index.html',
    '404.html',
    'favicon.svg',
    'og-image.svg',
  ];

  for (const rel of expectedFiles) {
    const full = path.join(distDir, rel);
    assert.ok(fs.existsSync(full), `Thiếu file build bắt buộc: ${rel}`);
  }
  console.log('✓ 1. Tất cả 9 trang HTML và tài nguyên SVG đã được build đầy đủ trong dist/.');

  const server = createStaticServer(distDir);
  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
  const address = server.address();
  const baseUrl = `http://127.0.0.1:${address.port}`;
  console.log(`✓ 2. Đã khởi chạy máy chủ tĩnh kiểm thử tại ${baseUrl}`);

  try {
    await runPythonPlaywright(baseUrl);
  } finally {
    server.close();
  }

  console.log('=== HOÀN TẤT KIỂM TRA: TẤT CẢ TIÊU CHÍ ĐỀU ĐẠT ===');
}

runVerification().catch((err) => {
  console.error('Lỗi kiểm tra:', err);
  process.exit(1);
});
