import { cn } from "@/shared/lib/cn";

type ButtonVariants = "primary" | "secondary" | "outline";

interface IButton
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?: ButtonVariants;
  size?: "sm" | "md" | "lg" | "xl";
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
        "w-full cursor-pointer rounded-lg py-4 transition-all",
        className,
        {
          " bg-primary font-bold text-white hover:bg-primary-hover":
            variant === "primary",
          "bg-secondary text-white hover:bg-primary": variant === "secondary",
          "flex justify-center border border-secondary bg-white text-secondary hover:border-primary-hover hover:text-primary-hover":
            variant === "outline",
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
