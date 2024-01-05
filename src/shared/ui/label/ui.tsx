import { type ReactNode } from "react";
import { cn } from "@/shared/lib/cn";

interface ILabel {
  text: string;
  className?: string;
  children: ReactNode;
  isError?: boolean;
}

export const Label = ({ text, children, className, isError }: ILabel) => {
  return (
    <label
      className={cn(
        "cursor-pointer text-label",
        className,
        isError && "text-error focus-within:text-error",
        !isError && "focus-within:text-primary-hover",
      )}
    >
      {text}
      {children}
    </label>
  );
};
