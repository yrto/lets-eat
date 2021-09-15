import React, { KeyboardEvent } from "react";

interface InputProps {
  wide: boolean;
  placeholder: string;
  value: string;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
  wide,
  placeholder,
  value,
  onChange,
  onKeyDown,
}) => {
  const isWide = wide ? "min-w-full" : "flex-grow";
  return (
    <input
      className={`rounded border p-2 shadow-inner ${isWide}`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  );
};

export default Input;
