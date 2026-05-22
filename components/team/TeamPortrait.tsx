import OptimizedPicture from "@/components/OptimizedPicture";

type Size = "md" | "lg";

interface TeamPortraitProps {
  initials: string;
  name?: string;
  size?: Size;
  className?: string;
  imageSrc?: string;
}

const sizeText: Record<Size, string> = {
  md: "text-3xl md:text-4xl",
  lg: "text-5xl md:text-6xl",
};

export default function TeamPortrait({
  initials,
  name,
  size = "md",
  className = "",
  imageSrc,
}: TeamPortraitProps) {
  const base =
    "relative aspect-square w-full rounded-xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow";

  if (imageSrc) {
    return (
      <div className={`${base} ${className}`}>
        <OptimizedPicture
          src={imageSrc}
          alt={name ?? initials}
          fill
          sizes="(min-width: 1024px) 320px, (min-width: 640px) 240px, 90vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
    );
  }

  return (
    <div
      className={`${base} bg-gradient-to-br from-primary-700 via-primary-800 to-primary-900 ${className}`}
      aria-label={name ?? initials}
    >
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.6),transparent_55%)]" />
      <div className="absolute inset-0 flex items-center justify-center">
        <span
          className={`font-serif font-bold text-white tracking-wide ${sizeText[size]} transition-transform duration-500 group-hover:scale-[1.04]`}
        >
          {initials}
        </span>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-1 bg-accent-700" />
    </div>
  );
}
