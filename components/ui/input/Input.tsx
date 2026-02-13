"use client";

import { cva } from "class-variance-authority";
import type { ChangeEvent, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  isError: boolean;
}

const InputVariants = cva(["w-full typo-body1 rounded-xl py-3 px-4 border border-gray-200 bg-bg-white focus:border-primary-point placeholder:text-gray-400"], {
  variants: {
    disabled: {
      false: null,
      true: ["bg-gray-100", "text-gray-400", "border-gray-200", "pointer-events-none"],
    },
    error: {
      false: null,
      true: ["border-status-error"],
    },
  },
  defaultVariants: {
    disabled: false,
    error: false,
  },
});

const Input = ({ isError, ...restProps }: InputProps) => {
  return (
    <input
      className={InputVariants({
        disabled: restProps.disabled,
        error: isError,
      })}
      {...restProps}
    />
  );
};

export default Input;
