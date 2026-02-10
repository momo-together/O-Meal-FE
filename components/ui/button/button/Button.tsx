"use client";

import { cva } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";

// TODO : primary, secondary 버튼 사용시 정의
type ButtonVariantsType = "tertiary";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant: ButtonVariantsType;
}

const buttonVariants = cva([], {
  variants: {
    variant: {
      tertiary: [],
    },
  },
  defaultVariants: {
    variant: "tertiary",
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
