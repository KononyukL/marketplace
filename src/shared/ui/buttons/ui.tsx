import type { DetailedHTMLProps, ReactNode } from "react";
import clsx from "clsx";
interface IButton
  extends DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode;
  className: string;
}
const Button = ({
  children,
  className,
  ...rest
}: React.PropsWithChildren<IButton>) => {
  return (
    <button
      className={clsx("cursor-pointer  text-blackText ", className)}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
