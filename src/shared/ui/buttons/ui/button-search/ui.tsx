import { Icons } from "@/shared/config";

interface IButtonSearch {
  disabled?: boolean;
  onClick?: () => void;
}
export const ButtonSearch = ({ disabled, onClick }: IButtonSearch) => {
  return (
    <button
      onClick={onClick}
      className=" disabled:border-gray-4 disabled:text-gray-5  flex  cursor-pointer items-center justify-center rounded bg-white px-2.5  shadow-button-scroll enabled:hover:bg-secondary-light enabled:hover:text-white enabled:active:bg-secondary-dark disabled:border "
      disabled={disabled}
    >
      <Icons.Search />
    </button>
  );
};
