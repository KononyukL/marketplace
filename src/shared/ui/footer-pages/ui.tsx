import { cn } from "@/shared/lib/cn";

interface IDivTags
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  variant?: "primary" | "secondary";
  title: string;
}

export const FooterPages = ({
  children,
  title,
  variant,
  className,
}: React.PropsWithChildren<IDivTags>) => {
  return (
    <div
      className={cn("m-auto ", className, {
        "mb-bottom max-w-footer-pages bg-white": variant === "primary",
        "mb-32 max-w-footer-pages-secondary": variant === "secondary",
      })}
    >
      <div
        className={cn(className, {
          "border-b border-text-2 px-footer-pages py-8": variant === "primary",
        })}
      >
        <h3
          className={cn("font-medium text-title", className, {
            "text-xl leading-6 ": variant === "primary",
            "pb-6 text-center text-2xl leading-6": variant === "secondary",
          })}
        >
          {title}
        </h3>
      </div>

      <div
        className={cn(className, {
          "px-footer-pages py-8 text-justify leading-relaxed text-text-secondary":
            variant === "primary",
          "mb-12 text-center": variant === "secondary",
        })}
      >
        {children}
      </div>
    </div>
  );
};
