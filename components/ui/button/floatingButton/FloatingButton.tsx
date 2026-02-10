"use client";

import type { ButtonHTMLAttributes } from "react";
import { cva } from "class-variance-authority";

type FloatingButtonVariantsType = "primary";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  location: "right" | "left" | "mid";
  isDisabled: boolean;
  variant: FloatingButtonVariantsType;
}

const floatingButtonVariants = cva(
  [
    "relative p-3 rounded-full flex gap-2 text-body1 font-bold leading-body1 tracking-body1 text-center justify-center items-center active:bg-state-active [&_svg]:w-6 [&_svg]:h-6 shadow-[0px_4px_12px_0px_var(--color-shadow)]",
  ],
  {
    variants: {
      variant: {
        primary: ["bg-primary-point", "text-white"],
        /** 추후 다른 디자인 시스템이 추가된다면 이곳을 변경 */
      },
      disabled: {
        false: null,
        true: ["opacity-50", "pointer-events-none"],
      },
      location: {
        left: ["ml-6"],
        mid: ["mx-auto"],
        right: ["ml-auto", "mr-6"],
      },
    },
    defaultVariants: {
      variant: "primary",
      disabled: false,
    },
  }
);

const FloatingButton = ({
  onClick,
  children,
  isDisabled,
  variant,
  location,
  ...restProps
}: ButtonProps) => {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-full max-w-layout">
      <button
        {...restProps}
        onClick={onClick}
        type="button"
        className={floatingButtonVariants({
          variant,
          disabled: isDisabled,
          location,
        })}
        disabled={isDisabled}
      >
        {children}
      </button>
    </div>
  );
};

export default FloatingButton;
