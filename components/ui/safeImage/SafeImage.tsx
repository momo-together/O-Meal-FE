"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";

interface SafeImageProps extends ImageProps {
  src: string;
  fallback: string;
}

const SafeImage = ({ src, fallback, ...props }: SafeImageProps) => {
  const [isError, setIsError] = useState(false);

  return <Image src={isError ? fallback : src} onError={() => setIsError(true)} {...props} />;
};

export default SafeImage;
