import React, { ReactNode } from "react";

export interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "dashed";
  shape?: "rounded" | "circle";
  size?: "lg" | "md" | "sm";
  [key: string]: any;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant,
  shape,
  size,
  ...props
}) => {
  const className = `art-btn art-btn-${variant} art-btn-${shape} art-btn-${size}`;

  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};
