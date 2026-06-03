/**
 * Renders the GenPoster share image for static hosting (Cloudflare Pages).
 * Run: npm run generate-og
 */
import fs from "fs/promises";
import path from "path";
import sharp from "sharp";

const ROOT = process.cwd();
const configPath = path.join(ROOT, "lib/gen-poster.config.json");
const config = JSON.parse(await fs.readFile(configPath, "utf8"));

const { background, foreground, text, width, height } = config;
const fontSize = Math.round(width * 0.22);
const letterSpacing = fontSize * -0.06;

const svg = `
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="${background}"/>
  <text
    x="50%"
    y="50%"
    dominant-baseline="central"
    text-anchor="middle"
    fill="${foreground}"
    font-family="Inter, Helvetica Neue, Helvetica, Arial, sans-serif"
    font-size="${fontSize}"
    font-weight="700"
    letter-spacing="${letterSpacing}px"
  >${text}</text>
</svg>`;

const outDir = path.join(ROOT, "public/og");
await fs.mkdir(outDir, { recursive: true });

const webpOut = path.join(outDir, "poster.webp");
const pngOut = path.join(outDir, "poster.png");

await sharp(Buffer.from(svg)).webp({ quality: 90 }).toFile(webpOut);
await sharp(Buffer.from(svg)).png().toFile(pngOut);

console.log(`Generated ${path.relative(ROOT, webpOut)}`);
console.log(`Generated ${path.relative(ROOT, pngOut)}`);
