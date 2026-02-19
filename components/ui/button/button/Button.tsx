"use client";

import { cva } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";

// TODO :  secondary 버튼 사용시 정의
type ButtonVariantsType = "tertiary" | "primary";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant: ButtonVariantsType;
}

const buttonVariants = cva(["w-full", "typo-body2"], {
  variants: {
    variant: {
      primary: ["py-3", "bg-primary-point", "text-bg-white", "rounded-xl"],
      tertiary: ["p-0", "typo-button-sm", "text-center", "text-gray-400"],
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

const Button = ({ variant, children, ...restProps }: ButtonProps) => {
  return (
    <button className={buttonVariants({ variant })} {...restProps}>
      {children}
    </button>
  );
};

export default Button;
