"use client";

import AddIcon from "@/assets/icons/add.svg";
import FloatingButton from "@/components/ui/button/floatingButton/FloatingButton";

const PhotoRegisterButton = () => {
  const handleClick = () => {
    // TODO: 사진 등록 기능 구현
  };

  return (
    <FloatingButton variant="primary" isDisabled={false} location="mid" onClick={handleClick}>
      <AddIcon aria-hidden="true" />
      사진 등록
    </FloatingButton>
  );
};

export default PhotoRegisterButton;
