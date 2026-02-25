/**
 * Renames mobility media to scalable names (image1, video1, pdf1, ppt1)
 * and copies them to public/mobilities/{slug}/ for Next.js to serve.
 * Writes public/mobilities/manifest.json for the app to consume.
 *
 * Run from app directory: node scripts/rename-mobility-media.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const APP_ROOT = path.resolve(__dirname, '..');
const SRC_MOBILITIES = path.join(APP_ROOT, 'src', 'mobilities');
const PUBLIC_MOBILITIES = path.join(APP_ROOT, 'public', 'mobilities');

const IMAGE_EXT = new Set(['.jpg', '.jpeg', '.png', '.gif', '.webp', '.bmp']);
const VIDEO_EXT = new Set(['.mp4', '.webm', '.mov', '.avi', '.mkv']);
const PDF_EXT = new Set(['.pdf']);
const PPT_EXT = new Set(['.ppt', '.pptx']);

/** Maps source folder path (relative to SRC_MOBILITIES) to slug */
const MOBILITY_ROOTS = [
  {
    // .../250201 - Kick off meeting Macedonia-20260224T173644Z-1-001/250201 - Kick off meeting Macedonia
    relPath: path.join('250201 - Kick off meeting Macedonia-20260224T173644Z-1-001', '250201 - Kick off meeting Macedonia'),
    slug: 'kickoff-macedonia',
  },
  {
    relPath: path.join('250829 - Sevilla Training Activity (LTTA)-20260224T173649Z-1-001', '250829 - Sevilla Training Activity (LTTA)'),
    slug: 'sevilla-ltta',
  },
  {
    relPath: path.join('260126 - Virtual Mobility (Virtual LTTA)-20260224T173652Z-1-001', '260126 - Virtual Mobility (Virtual LTTA)'),
    slug: 'virtual-mobility',
  },
];

function getAllFiles(dir, base = dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      files.push(...getAllFiles(full, base));
    } else if (e.isFile()) {
      files.push(path.relative(base, full));
    }
  }
  return files;
}

function getType(ext) {
  const lower = ext.toLowerCase();
  if (IMAGE_EXT.has(lower)) return 'images';
  if (VIDEO_EXT.has(lower)) return 'videos';
  if (PDF_EXT.has(lower)) return 'pdfs';
  if (PPT_EXT.has(lower)) return 'ppts';
  return null;
}

function processMobility(rootRelPath, slug) {
  const srcRoot = path.join(SRC_MOBILITIES, rootRelPath);
  if (!fs.existsSync(srcRoot)) {
    console.warn(`Skip (not found): ${srcRoot}`);
    return { images: [], videos: [], pdfs: [], ppts: [], skipped: [] };
  }

  const files = getAllFiles(srcRoot);
  const byType = { images: [], videos: [], pdfs: [], ppts: [] };
  const skipped = [];

  for (const rel of files) {
    const ext = path.extname(rel);
    const type = getType(ext);
    if (type) byType[type].push(rel);
    else skipped.push(rel);
  }

  // Deterministic order
  for (const key of Object.keys(byType)) byType[key].sort();

  const outRoot = path.join(PUBLIC_MOBILITIES, slug);
  const manifest = { images: [], videos: [], pdfs: [], ppts: [] };

  for (const [type, list] of Object.entries(byType)) {
    const subDir = path.join(outRoot, type);
    fs.mkdirSync(subDir, { recursive: true });
    list.forEach((rel, i) => {
      const oneBased = i + 1;
      const ext = path.extname(rel);
      const newName = `${type.slice(0, -1)}${oneBased}${ext}`; // image1.jpg, video1.mp4, pdf1.pdf, ppt1.pptx
      const srcPath = path.join(srcRoot, rel);
      const destPath = path.join(subDir, newName);
      fs.copyFileSync(srcPath, destPath);
      manifest[type].push(newName);
    });
  }

  return { ...manifest, skipped };
}

function main() {
  if (!fs.existsSync(SRC_MOBILITIES)) {
    console.log('src/mobilities not found — nothing to sync. Existing public/mobilities and manifest are unchanged.');
    process.exit(0);
  }

  fs.mkdirSync(PUBLIC_MOBILITIES, { recursive: true });

  const manifest = {};
  let hadAny = false;

  for (const { relPath, slug } of MOBILITY_ROOTS) {
    console.log(`Processing ${slug}...`);
    const result = processMobility(relPath, slug);
    const count = result.images.length + result.videos.length + result.pdfs.length + result.ppts.length;
    if (count > 0) hadAny = true;
    manifest[slug] = {
      images: result.images,
      videos: result.videos,
      pdfs: result.pdfs,
      ppts: result.ppts,
    };
    if (result.skipped?.length) console.log(`  Skipped (unknown type): ${result.skipped.length} files`);
  }

  const manifestPath = path.join(PUBLIC_MOBILITIES, 'manifest.json');
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2), 'utf8');
  console.log('Wrote', manifestPath);
  if (!hadAny) console.log('No files were found in src/mobilities. To add media, restore the folder structure there and run this script again.');
}

main();
