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
    <button className="cursor-pointer" {...rest}>
      {children}
    </button>
  );
};

export default Button;
