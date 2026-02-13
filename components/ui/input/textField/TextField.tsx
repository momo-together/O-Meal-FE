import { cva } from "class-variance-authority";
import type { ChangeEvent, InputHTMLAttributes } from "react";

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  isError: boolean;
}

const textFieldVariants = cva(
  ["w-full typo-body1 rounded-xl py-3 px-4 border border-gray-200 bg-bg-white focus:border-primary-base placeholder:text-gray-400"],
  {
    variants: {
      disabled: {
        false: null,
        true: ["bg-gray-100", "text-gray-400", "border-gray-200", "pointer-events-none"],
      },
      error: {
        false: null,
        true: ["border-status-error", "focus:border-status-error"],
      },
    },
    defaultVariants: {
      disabled: false,
      error: false,
    },
  },
);

const TextField = ({ isError, ...restProps }: TextFieldProps) => {
  return (
    <input
      aria-invalid={isError}
      className={textFieldVariants({
        disabled: restProps.disabled,
        error: isError,
      })}
      {...restProps}
    />
  );
};

export default TextField;
