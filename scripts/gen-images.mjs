import sharp from 'sharp';
import { readFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const pub = resolve(root, 'public');

const favSvg = readFileSync(resolve(pub, 'favicon.svg'));
const ogSvg = readFileSync(resolve(pub, 'og.svg'));

const targets = [
  { input: favSvg, size: 16, out: 'favicon-16.png' },
  { input: favSvg, size: 32, out: 'favicon-32.png' },
  { input: favSvg, size: 180, out: 'apple-touch-icon.png' },
];

for (const t of targets) {
  await sharp(t.input)
    .resize(t.size, t.size)
    .png({ compressionLevel: 9 })
    .toFile(resolve(pub, t.out));
  console.log(`wrote public/${t.out}`);
}

await sharp(ogSvg, { density: 144 })
  .resize(1200, 630)
  .png({ compressionLevel: 9 })
  .toFile(resolve(pub, 'og.png'));
console.log('wrote public/og.png');
