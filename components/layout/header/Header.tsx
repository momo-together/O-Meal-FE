"use client";

import { useRouter } from "next/navigation";
import { motion } from "motion/react";
import ArrowLeft from "@/assets/icons/arrow-left.svg";
import useScrollDirection from "@/hooks/useScrollDirection";

interface HeaderProps {
  /** 헤더 중앙에 표시될 페이지 제목 */
  title: string;
  /** 뒤로 가기 버튼을 누를 경우 이동할 경로 */
  fallbackRoute?: string;
}

const Header = ({ title, fallbackRoute }: HeaderProps) => {
  const router = useRouter();
  const { isVisible } = useScrollDirection();

  const handleBack = () => {
    if (fallbackRoute) {
      router.replace(fallbackRoute);
      return;
    }
    router.back();
  };

  return (
    <motion.header
      className="sticky top-0 z-10 flex py-4 w-full items-center bg-bg-oatmeal mb-1"
      animate={{ y: isVisible ? 0 : "-100%" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <button type="button" aria-label="뒤로 가기" className="absolute left-0 flex items-center justify-center" onClick={handleBack}>
        <ArrowLeft aria-hidden="true" className="h-4 w-4 text-gray-900" />
      </button>
      <h1 className="typo-body1 mx-auto text-primary-text user-select truncate w-[calc(100%-2rem)] text-center">{title}</h1>
    </motion.header>
  );
};

export default Header;
