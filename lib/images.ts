/** WebP-first paths with PNG fallback (generated via npm run optimize-images). */
export function imageSrc(pngPath: string): { webp: string; fallback: string } {
  if (!pngPath.endsWith(".png")) {
    return { webp: pngPath, fallback: pngPath };
  }
  return {
    webp: pngPath.replace(/\.png$/i, ".webp"),
    fallback: pngPath,
  };
}

export const heroImages = [
  "/images/Gemini_Generated_Image_4tio8o4tio8o4tio.png",
  "/images/Gemini_Generated_Image_58ix8t58ix8t58ix.png",
  "/images/Gemini_Generated_Image_7dgcel7dgcel7dgc.png",
  "/images/Gemini_Generated_Image_ecocpeecocpeecoc.png",
  "/images/Gemini_Generated_Image_gg0zeogg0zeogg0z.png",
  "/images/Gemini_Generated_Image_maxnbrmaxnbrmaxn.png",
] as const;
