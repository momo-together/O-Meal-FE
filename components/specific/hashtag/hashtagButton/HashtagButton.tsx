"use client";

import clsx from "clsx";
import type { ButtonHTMLAttributes } from "react";

interface HashtagButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isSelected: boolean;
  text: string;
}

const HashtagButton = ({ isSelected, text, ...restProps }: HashtagButtonProps) => {
  return (
    <button
      type="button"
      className={clsx(
        "bg-bg-white inline-flex py-1 px-3 justify-center items-center rounded-full select-none",
        isSelected ? "border border-primary-point" : "border border-gray-300",
      )}
      {...restProps}
    >
      <span className={clsx("typo-caption", isSelected ? "text-primary-point" : "text-gray-500")}>{text}</span>
    </button>
  );
};

export default HashtagButton;
