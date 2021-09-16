import React from "react";

interface ButtonProps {
  buttonStyle: "primary" | "secondary";
  onClick: () => void;
  children: React.ReactNode;
}

const style = {
  base: "rounded px-4 py-2",
  primary:
    "min-w-full shadow bg-blue-600 text-white active:bg-blue-700 font-bold",
  secondary: "border font-bold active:bg-gray-100",
};

const Button: React.FC<ButtonProps> = ({ buttonStyle, onClick, children }) => {
  return (
    <button className={`${style.base} ${style[buttonStyle]}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
