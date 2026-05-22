import Image from "next/image";

type OptimizedPictureProps = {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
  loading?: "lazy" | "eager";
};

export default function OptimizedPicture({
  src,
  alt,
  fill,
  width,
  height,
  className = "",
  priority = false,
  sizes,
  loading,
}: OptimizedPictureProps) {
  const webp = src.replace(/\.png$/i, ".webp");
  const loadingProp = priority ? undefined : loading ?? "lazy";

  if (fill) {
    return (
      <picture className="absolute inset-0 block">
        <source srcSet={webp} type="image/webp" />
        <Image
          src={src}
          alt={alt}
          fill
          className={className}
          priority={priority}
          sizes={sizes}
          loading={loadingProp}
        />
      </picture>
    );
  }

  return (
    <picture className="block">
      <source srcSet={webp} type="image/webp" />
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        priority={priority}
        sizes={sizes}
        loading={loadingProp}
      />
    </picture>
  );
}
