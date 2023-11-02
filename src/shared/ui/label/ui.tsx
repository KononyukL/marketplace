import { type ReactNode } from "react";
import clsx from "clsx";

interface ILabel {
  text: string;
  className?: string;
  children: ReactNode;
  isError?: boolean;
}
const Label = ({ text, children, className, isError }: ILabel) => {
  return (
    <label
      className={clsx(
        "cursor-pointer  text-blackText ",
        className,
        isError && "text-error focus-within:text-error",
        !isError && "focus-within:text-strokeBlue",
      )}
    >
      {text}
      {children}
    </label>
  );
};

export default Label;
