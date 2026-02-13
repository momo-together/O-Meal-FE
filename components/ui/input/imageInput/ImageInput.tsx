"use client";

import { type InputHTMLAttributes, useEffect, useRef, useState } from "react";
import CameraIcon from "@/assets/icons/camera.svg";
import SafeImage from "@/components/ui/safeImage/SafeImage";
import { FALLBACK_IMAGE } from "@/constants/image";

interface ImageInputProps extends InputHTMLAttributes<HTMLInputElement> {
  /** 현재 이미지 URL */
  defaultImage?: string;
  /** 상위 컴포넌트로 파일을 전달하는 함수 */
  onImageChange: (file: File) => void;
}

// TODO : gif 막기
const ImageInput = ({ defaultImage, onImageChange, ...restProps }: ImageInputProps) => {
  const [previewImage, setPreviewImage] = useState(defaultImage ? defaultImage : FALLBACK_IMAGE);
  const selectedImageUrlRef = useRef<string | null>(null);

  const handlePreviewImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const previewUrl = URL.createObjectURL(file);

    if (selectedImageUrlRef.current) {
      URL.revokeObjectURL(selectedImageUrlRef.current);
    }

    selectedImageUrlRef.current = previewUrl;
    setPreviewImage(previewUrl);
    onImageChange(file);
  };

  const handleErrorImage = () => {
    setPreviewImage(FALLBACK_IMAGE);
  };

  useEffect(() => {
    return () => {
      if (selectedImageUrlRef.current) {
        URL.revokeObjectURL(selectedImageUrlRef.current);
      }
    };
  }, []);

  return (
    <label htmlFor={restProps.id} className="relative inline-block size-[80px] cursor-pointer">
      <div className="relative size-full rounded-full border-4 border-bg-white overflow-hidden bg-gray-100 text-gray-200 shadow-md">
        <SafeImage fallback={FALLBACK_IMAGE} fill src={previewImage} alt="프로필 이미지" className="object-cover" onError={handleErrorImage} />
      </div>

      <div className="absolute right-0 bottom-0 flex size-6 items-center justify-center rounded-full bg-bg-white text-gray-200 p-1">
        <input {...restProps} type="file" accept="image/*" className="hidden" onChange={handlePreviewImage} />
        <CameraIcon />
      </div>
    </label>
  );
};

export default ImageInput;
