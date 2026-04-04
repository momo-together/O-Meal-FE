"use client";

import { cva } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";

type DropdownVariant = "sort";

interface DropdownProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** 칩에 표시할 텍스트 */
  label: string;
  /** 칩의 시각적 변형. sort: 화살표 포함 + 그림자 */
  variant?: DropdownVariant;
}

const dropdownVariants = cva(["flex items-center justify-center rounded-full bg-bg-white text-gray-600 whitespace-nowrap cursor-pointer"], {
  variants: {
    variant: {
      sort: ["gap-1 px-4 py-1.5 shadow-[0px_0px_5px_0px_rgba(32,32,32,0.05)] typo-button-sm"],
    },
  },
  defaultVariants: {
    variant: "sort",
  },
});

const ChevronDown = () => (
  <svg width="12" height="6" viewBox="0 0 12 6" fill="none" aria-hidden="true">
    <path d="M1 1L6 5L11 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/**
 * 필터 조건을 선택하는 드롭다운 칩 버튼 컴포넌트.
 * 클릭 동작은 외부에서 `onClick`으로 제어한다.
 * @param label - 칩에 표시할 텍스트
 * @param variant - 시각적 변형 (sort: 화살표 + 그림자)
 */
const Dropdown = ({ label, variant = "sort", ...rest }: DropdownProps) => {
  return (
    <button type="button" className={dropdownVariants({ variant })} {...rest}>
      {label}
      <ChevronDown />
    </button>
  );
};

export default Dropdown;
