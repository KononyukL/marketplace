import React from "react";
import type { DetailedHTMLProps, ReactNode } from "react";
interface IButton
  extends DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode;
}
const Button = ({ children, ...rest }: React.PropsWithChildren<IButton>) => {
  return (
    <button className="bg-teal-400" {...rest}>
      {children}
    </button>
  );
};

export default Button;
