import { useEffect, useRef } from "react";

interface IClickOutside {
  onClickOutside: () => void;
}
export function useClickOutside<T extends HTMLElement>({
  onClickOutside,
}: IClickOutside) {
  const ref = useRef<T>(null);
  const handleClick = (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      onClickOutside();
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
  return { ref };
}
