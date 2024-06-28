import Image from "next/image";
import React from "react";

interface IButtonSearch {
  onClick?: (e: React.SyntheticEvent) => void;
}
export const ButtonDelete = ({ onClick }: IButtonSearch) => {
  return (
    <button type="button" onClick={onClick}>
      <Image
        className="w-full"
        src="/images/delete-icon.svg"
        alt="Delete"
        width={27}
        height={27}
      />
    </button>
  );
};
