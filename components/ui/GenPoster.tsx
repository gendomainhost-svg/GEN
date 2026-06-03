import {
  GEN_POSTER_ALT,
  GEN_POSTER_COLORS,
  GEN_POSTER_TEXT,
} from "@/lib/gen-poster";

interface GenPosterProps {
  className?: string;
}

export default function GenPoster({ className = "" }: GenPosterProps) {
  return (
    <div
      role="img"
      aria-label={GEN_POSTER_ALT}
      className={`relative w-full aspect-[16/9] overflow-hidden ${className}`.trim()}
      style={{ backgroundColor: GEN_POSTER_COLORS.background }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <span
          className="font-sans text-7xl md:text-9xl font-bold tracking-tighter leading-none"
          style={{ color: GEN_POSTER_COLORS.foreground }}
        >
          {GEN_POSTER_TEXT}
        </span>
      </div>
    </div>
  );
}
