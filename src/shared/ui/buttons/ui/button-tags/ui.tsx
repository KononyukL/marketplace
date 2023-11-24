interface IButtonTags {
  onClick: () => void;
  children: string;
  isActive: boolean;
}
export const ButtonTags = ({ onClick, isActive, children }: IButtonTags) => {
  return (
    <button
      onClick={onClick}
      className={
        isActive
          ? "bg-additional rounded-tags px-4 py-1 text-sm text-white "
          : "rounded-tags border-additional hover:bg-additional border border-solid bg-white px-4 py-1 text-sm text-black hover:text-white"
      }
    >
      {children}
    </button>
  );
};
