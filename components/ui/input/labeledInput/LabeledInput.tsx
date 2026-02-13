"use client";

import type { ChangeEvent, InputHTMLAttributes } from "react";
import TextField from "../textField/TextField";

interface LabeledInputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  errorMessage?: string;
}

const LabeledInput = ({ value, onChange, errorMessage, id, label, ...restProps }: LabeledInputProps) => {
  return (
    <div className="flex flex-col align-center justify-start gap-2">
      <label htmlFor={id} className="typo-body2">
        {label}
      </label>
      <div className="flex flex-col align-center justify-start gap-1 typo-body1">
        <TextField id={id} value={value} onChange={onChange} isError={!!errorMessage} {...restProps} />
        <span aria-live="polite" className="typo-caption text-status-error min-h-5">
          {errorMessage}
        </span>
      </div>
    </div>
  );
};

export default LabeledInput;
