import { useCallback, useState } from "react";

export function useToggleHook() {
  const [isOpen, setIsOpen] = useState(false);

  const onToggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return [isOpen, onToggle, setIsOpen] as const;
}
