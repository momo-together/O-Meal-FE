"use client";

import Image from "next/image";
import { type InputHTMLAttributes, useState } from "react";
import CameraIcon from "@/assets/icons/camera.svg";

interface ImageInputProps extends InputHTMLAttributes<HTMLInputElement> {
  /** 현재 이미지 URL */
  defaultImage?: string;
  /** 상위 컴포넌트로 파일을 전달하는 함수 */
  onImageChange: (file: File) => void;
}

const ImageInput = ({ defaultImage, onImageChange, ...restProps }: ImageInputProps) => {
  const FALLBACK_IMAGE = "/fallback.png";
  const [previewImage, setPreviewImage] = useState(defaultImage ? defaultImage : FALLBACK_IMAGE);
  const handlePreviewImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const previewUrl = URL.createObjectURL(file);
    setPreviewImage((prev) => {
      if (prev !== FALLBACK_IMAGE) URL.revokeObjectURL(prev);
      return previewUrl;
    });
    onImageChange(file);
  };

  const handleErrorImage = () => {
    setPreviewImage(FALLBACK_IMAGE);
  };

  return (
    <label htmlFor={restProps.id} className="relative inline-block size-[100px] cursor-pointer">
      <div className="relative size-full rounded-full border-4 border-bg-white overflow-hidden bg-gray-100 text-gray-200 shadow-md">
        <Image fill src={previewImage} alt="프로필 이미지" className="object-cover" onError={handleErrorImage} />
      </div>

      <div className="absolute right-0 bottom-0 flex size-8 items-center justify-center rounded-full bg-bg-white text-gray-200 p-1">
        <input {...restProps} type="file" accept="image/*" id={restProps.id} className="hidden" onChange={handlePreviewImage} />
        <CameraIcon />
      </div>
    </label>
  );
};

export default ImageInput;
