import { cn } from "@/shared/lib/cn";

type ButtonVariants = "primary" | "secondary" | "outline";

interface IButton
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?: ButtonVariants;
  size?: "xsm" | "sm" | "md" | "lg" | "xl";
  endAdornment?: React.ReactNode;
}

export const Button = ({
  children,
  variant = "primary",
  endAdornment,
  size,
  className,
  ...rest
}: React.PropsWithChildren<IButton>) => {
  return (
    <button
      className={cn(
        "w-full cursor-pointer  rounded-lg py-3 transition-all",
        className,
        {
          "bg-secondary font-bold text-white hover:bg-secondary-light":
            variant === "primary",
          "bg-dark-3 text-white hover:bg-secondary": variant === "secondary",
          "flex justify-center border border-secondary bg-white text-secondary hover:border-secondary-light hover:text-secondary-light":
            variant === "outline",
          "max-w-button-1": size === "xsm",
          "max-w-button": size === "sm",
          "max-w-button-2": size === "md",
          "max-w-button-3": size === "lg",
          "max-w-button-4": size === "xl",
        },
      )}
      {...rest}
    >
      {children}
      {endAdornment && <>{endAdornment}</>}
    </button>
  );
};
