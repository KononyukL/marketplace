import { cn } from "@/shared/lib/cn";

interface IButtonTags
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  onClick: () => void;
  children: string;
  isActive: boolean;
}
export const ButtonTags = ({
  onClick,
  isActive,
  children,
  className,
}: IButtonTags) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "rounded-tags border-additional hover:bg-additional border border-solid bg-white px-4 py-1 text-sm text-black hover:text-white",
        className,
        {
          "bg-additional text-white ": isActive,
        },
      )}
    >
      {children}
    </button>
  );
};
