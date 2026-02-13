"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";
import { FALLBACK_IMAGE } from "@/constants/image";

interface SafeImageProps extends ImageProps {
  src: string;
  fallback: string;
}

const SafeImage = ({ src, fallback = "/images/no-image.png", ...props }: SafeImageProps) => {
  const [isError, setIsError] = useState(false);

  return <Image src={isError ? fallback : src} onError={() => setIsError(true)} {...props} placeholder="blur" blurDataURL={FALLBACK_IMAGE} />;
};

export default SafeImage;
