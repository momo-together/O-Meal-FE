"use client";

import type { ButtonHTMLAttributes } from "react";
import { cva } from "class-variance-authority";

type FloatingButtonVariantsType = "primary";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  isDisabled: boolean;
  variant: FloatingButtonVariantsType;
}

const floatingButtonVariants = cva(
  [
    "p-3 rounded-full flex justify-center items-center active:bg-state-active [&_svg]:w-6 [&_svg]:h-6",
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
    },
    defaultVariants: {
      variant: "primary",
      disabled: false,
    },
  }
);

const FloatingButton = ({
  onClick,
  Icon,
  isDisabled,
  variant,
  ...restProps
}: ButtonProps) => {
  return (
    <button
      {...restProps}
      onClick={onClick}
      type="button"
      className={floatingButtonVariants({
        variant,
        disabled: isDisabled,
      })}
      disabled={isDisabled}
    >
      {Icon && <Icon />}
    </button>
  );
};

export default FloatingButton;
