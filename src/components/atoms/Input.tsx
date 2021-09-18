import React, { KeyboardEvent } from "react";

interface InputProps {
  wide: boolean;
  placeholder: string;
  value: string;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  inputType?: string;
  failedState?: boolean;
}

const Input: React.FC<InputProps> = ({
  wide,
  placeholder,
  value,
  onChange,
  onKeyDown,
  inputType,
  failedState,
}) => {
  const isWide = wide ? "min-w-full" : "w-full";
  const isFailed = failedState ? "border-red-400 bg-red-50" : "";
  return (
    <input
      className={`rounded border p-2 shadow-inner ${isWide}  ${isFailed}`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      data-testid="input-field"
      type={inputType}
    />
  );
};

export default Input;
