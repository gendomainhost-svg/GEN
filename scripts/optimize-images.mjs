/**
 * Compress PNGs in public/images and public/team for faster loads.
 * Run: npm run optimize-images
 */
import fs from "fs/promises";
import path from "path";
import sharp from "sharp";

const ROOT = process.cwd();
const TARGETS = [
  { dir: "public/images", maxWidth: 1920, quality: 82 },
  { dir: "public/team", maxWidth: 800, quality: 85 },
];

async function optimizeDir({ dir, maxWidth, quality }) {
  const fullDir = path.join(ROOT, dir);
  let entries;
  try {
    entries = await fs.readdir(fullDir);
  } catch {
    return [];
  }

  const results = [];
  for (const file of entries) {
    if (!/\.(png|jpe?g)$/i.test(file)) continue;
    const input = path.join(fullDir, file);
    const base = file.replace(/\.(png|jpe?g)$/i, "");
    const webpOut = path.join(fullDir, `${base}.webp`);

    const before = (await fs.stat(input)).size;
    await sharp(input)
      .resize({ width: maxWidth, withoutEnlargement: true })
      .webp({ quality, effort: 4 })
      .toFile(webpOut);
    const after = (await fs.stat(webpOut)).size;
    results.push({
      file: `${dir}/${base}.webp`,
      beforeKb: Math.round(before / 1024),
      afterKb: Math.round(after / 1024),
    });
  }
  return results;
}

const all = [];
for (const target of TARGETS) {
  all.push(...(await optimizeDir(target)));
}

console.log("Optimized images:");
for (const r of all) {
  console.log(`  ${r.file}: ${r.beforeKb} KB → ${r.afterKb} KB`);
}
