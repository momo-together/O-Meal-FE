"use client";

import { useState } from "react";
import ImageInput from "@/components/ui/input/imageInput/ImageInput";

const ProfileInput = () => {
  const [_, setImage] = useState<File | null>(null);
  const submitImage = (image: File) => {
    setImage(image);
    // TODO : 서버에 전송하는 로직
  };
  return <ImageInput id="profile-image" onImageChange={() => submitImage} />;
};

export default ProfileInput;
