import { cn } from "@/shared/lib/cn";

type ButtonVariants = "primary" | "secondary" | "outline" | "";

interface IButton
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?: ButtonVariants;
  size?: "sm" | "md";
  endAdornment?: React.ReactNode;
}

export const Button = ({
  children,
  variant = "primary",
  endAdornment,
  size = "md",
  className,
  ...rest
}: React.PropsWithChildren<IButton>) => {
  return (
    <button
      className={cn("w-full cursor-pointer  rounded-lg", className, {
        "bg-primary font-bold text-white": variant === "primary",
        "bg-secondary": variant === "secondary",
        "border border-secondary bg-white text-secondary":
          variant === "outline",
        "px-6 py-[0.4375rem]": size === "sm",
        "px-5 py-[0.6875rem]": size === "md",
      })}
      {...rest}
    >
      {children}
      {endAdornment && <>{endAdornment}</>}
    </button>
  );
};
