import { useCallback } from "react";
import { useToggleHook } from "@/shared/hooks/use-toggle-hook";

export function useOpenBurgerMenuHook() {
  const [open, onToggleOpen, setIsOpen] = useToggleHook();

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  return { isOpen: open, handleClick: onToggleOpen, handleClose };
}
