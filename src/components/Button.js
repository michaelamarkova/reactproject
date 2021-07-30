import React from "react";
import "./Button.css";

export const Button = ({
  children,
  type,
  onClick,
  className,
  
}) => {

  return (
    <button
      className={className}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};
