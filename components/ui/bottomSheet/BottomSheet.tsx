"use client";

import clsx from "clsx";
import { useEffect } from "react";

interface BottomSheetProps {
  /** 바텀시트 열림 여부 */
  isOpen: boolean;
  /** 바텀시트 열림/닫힘 토글 함수 */
  toggleOpen: () => void;
  /** 바텀시트 내부 컨텐츠 */
  children: React.ReactNode;
}

const BottomSheet = ({ isOpen, toggleOpen, children }: BottomSheetProps) => {
  // ESC 키로 닫기
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") toggleOpen();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, toggleOpen]);

  // 바텀시트 열릴 때 body 스크롤 잠금
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Overlay */}
      <div
        className={clsx(
          "fixed inset-0 z-[60] bg-black/40 transition-opacity duration-300",
          isOpen ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        onClick={toggleOpen}
        aria-hidden="true"
      />

      {/* Bottom Sheet */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="바텀시트"
        className={clsx(
          "fixed bottom-0 left-0 right-0 z-[70] mx-auto max-w-layout",
          "rounded-t-[24px] bg-white",
          "transition-transform duration-300 ease-out",
          isOpen ? "translate-y-0" : "translate-y-full",
        )}
      >
        {/* Handle Bar */}
        <div className="flex justify-center pb-2 pt-3" aria-hidden="true">
          <div className="h-1 w-10 rounded-full bg-gray-100" />
        </div>

        {/* Content */}
        {children}
      </div>
    </>
  );
};

export default BottomSheet;
