import config from "./gen-poster.config.json";

export const GEN_POSTER_COLORS = {
  background: config.background,
  foreground: config.foreground,
} as const;

export const GEN_POSTER_TEXT = config.text;
export const GEN_POSTER_ALT = config.text;

export const GEN_POSTER_ASPECT = {
  width: config.width,
  height: config.height,
} as const;

export const GEN_POSTER_SHARE_PATH = "/og/share.png";
