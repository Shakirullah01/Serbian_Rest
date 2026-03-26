"use client";

import Image, { type ImageProps } from "next/image";
import { useMemo, useState } from "react";
import { cn } from "@/lib/cn";

type Props = Omit<ImageProps, "src" | "alt"> & {
  src?: string;
  alt: string;
  fallbackSrc?: string;
  className?: string;
  unoptimized?: boolean;
};

export function SmartImage({
  src,
  alt,
  fallbackSrc = "/images/placeholder.svg",
  className,
  unoptimized = true,
  ...props
}: Props) {
  const initial = useMemo(() => (src && src.trim().length ? src : fallbackSrc), [
    src,
    fallbackSrc,
  ]);
  const [currentSrc, setCurrentSrc] = useState<string>(initial);

  return (
    <Image
      {...props}
      src={currentSrc}
      alt={alt}
      unoptimized={unoptimized}
      className={cn("bg-white/5", className)}
      onError={() => {
        if (currentSrc !== fallbackSrc) setCurrentSrc(fallbackSrc);
      }}
    />
  );
}

