import { Icons } from "@/shared/config";

interface IButtonSearch {
  disabled?: boolean;
  onClick?: () => void;
}
export const ButtonSearch = ({ disabled, onClick }: IButtonSearch) => {
  return (
    <button
      onClick={onClick}
      className=" enabled:active:bg-active flex  cursor-pointer  items-center justify-center rounded bg-white px-2.5 shadow-button-scroll  enabled:hover:bg-primary-hover enabled:hover:text-white disabled:border disabled:border-border-2 disabled:text-disable "
      disabled={disabled}
    >
      <Icons.Search />
    </button>
  );
};
