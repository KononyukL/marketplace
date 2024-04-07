import { type IState } from "@/shared/queries/search/types";
import { useState, useCallback } from "react";

export const useLocationState = (defaultLocation?: IState) => {
  const [selectedState, setSelectedState] = useState<IState | null>(
    defaultLocation ?? null,
  );
  const [isInputFocused, setInputFocus] = useState(false);

  const handleStateSelection = useCallback(
    (state: IState) => () => {
      setSelectedState(state);
    },
    [],
  );

  const handleInputFocus = useCallback(() => {
    setInputFocus(true);
  }, []);

  return {
    selectedState,
    isInputFocused,
    handleStateSelection,
    handleInputFocus,
  };
};
