"use client";

import { useState } from "react";
import BottomSheet from "@/components/ui/bottomSheet/BottomSheet";
import Dropdown from "@/components/ui/dropdown/Dropdown";
import SortOptionList from "./SortOptionList";

export type SortOption = "개수순" | "리뷰 개수순" | "거리순";

const SORT_OPTIONS: SortOption[] = ["개수순", "리뷰 개수순", "거리순"];

/**
 * 식당 목록 정렬 옵션을 선택하는 드롭다운 + 바텀시트 컴포넌트.
 * 실제 정렬 기능은 미구현 상태이며, UI 상태만 관리한다.
 */
const SortDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<SortOption>("거리순");
  const [pending, setPending] = useState<SortOption>("거리순");

  const handleOpen = () => {
    setPending(selected);
    setIsOpen(true);
  };

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleConfirm = () => {
    setSelected(pending);
    setIsOpen(false);
  };

  return (
    <>
      <Dropdown label={selected} onClick={handleOpen} aria-haspopup="dialog" />

      <BottomSheet isOpen={isOpen} toggleOpen={handleToggle}>
        <div className="px-5 pb-8">
          {/* 제목 */}
          <h2 className="typo-h2-sub pb-4 pt-6 text-center text-primary-text">
            정렬 기준
          </h2>

          {/* 옵션 목록 */}
          <SortOptionList options={SORT_OPTIONS} selected={pending} onSelect={setPending} />

          {/* 완료 버튼 */}
          <div className="pt-6">
            <button
              type="button"
              className="h-14 w-full rounded-full bg-primary-point typo-button text-white shadow-[0px_4px_12px_0px_rgba(255,126,54,0.2)]"
              onClick={handleConfirm}
            >
              완료
            </button>
          </div>
        </div>
      </BottomSheet>
    </>
  );
};

export default SortDropdown;
