import Image from "next/image";

interface IButtonSearch {
  onClick?: () => void;
}
export const ButtonDelete = ({ onClick }: IButtonSearch) => {
  return (
    <button type="button">
      <Image
        className="w-full"
        onClick={onClick}
        src="/images/delete-icon.svg"
        alt="Delete"
        width={27}
        height={27}
      />
    </button>
  );
};
