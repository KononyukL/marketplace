import { cn } from "@/shared/lib/cn";

interface ILabel {
  text: string;
  className?: string;
  isError?: boolean;
}

export const Label = ({
  text,
  children,
  className,
  isError,
}: React.PropsWithChildren<ILabel>) => {
  return (
    <label
      className={cn(
        "text-dark-4 cursor-pointer",
        className,
        isError && "text-error focus-within:text-error",
        !isError && "focus-within:text-secondary-light",
      )}
    >
      {text}
      {children}
    </label>
  );
};
