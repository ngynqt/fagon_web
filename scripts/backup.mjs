import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

const rootDir = process.cwd();
const backupDir = path.join(rootDir, 'backups');
const tempStageDir = path.join(backupDir, '_staging_fagon_web');
const zipPath = path.join(backupDir, 'fagon-web-source-backup.zip');

const INCLUDE_ITEMS = [
  'src',
  'public',
  'functions',
  'scripts',
  'package.json',
  'pnpm-lock.yaml',
  'tsconfig.json',
  'astro.config.mjs',
  '.gitignore',
  '.env.example',
  '.nvmrc',
  'run-preview.cmd',
  'run-dev.cmd',
  'README.md',
  'DANH-MUC-TAI-NGUYEN-VA-PROMPT.md',
];

fs.mkdirSync(backupDir, { recursive: true });
if (fs.existsSync(tempStageDir)) {
  fs.rmSync(tempStageDir, { recursive: true, force: true });
}
fs.mkdirSync(tempStageDir, { recursive: true });

for (const item of INCLUDE_ITEMS) {
  const srcPath = path.join(rootDir, item);
  if (fs.existsSync(srcPath)) {
    const destPath = path.join(tempStageDir, item);
    fs.cpSync(srcPath, destPath, { recursive: true });
  }
}

if (fs.existsSync(zipPath)) {
  fs.rmSync(zipPath, { force: true });
}

try {
  execSync(
    `powershell -NoProfile -Command "Compress-Archive -Path '${tempStageDir}\\*' -DestinationPath '${zipPath}' -Force"`,
    { stdio: 'inherit' }
  );
} finally {
  if (fs.existsSync(tempStageDir)) {
    fs.rmSync(tempStageDir, { recursive: true, force: true });
  }
}

const stats = fs.statSync(zipPath);
console.log(`Created clean source backup: ${zipPath} (${Math.round(stats.size / 1024)} KB)`);
