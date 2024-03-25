import { StringParam, useQueryParams } from "use-query-params";
import { useCallback, useEffect, useMemo, useState } from "react";

type IUseSaveInURL<T> = [savedData: T | undefined, onSave: (data?: T) => void];

const useSaveInURL = <T>(paramName: string): IUseSaveInURL<T> => {
  const [isError, setIsError] = useState(false);
  const [query, setQuery] = useQueryParams({ [paramName]: StringParam });

  const onSave = useCallback(
    (data?: T) => {
      const stringFilter = data ? JSON.stringify(data) : null;

      setQuery({ [paramName]: stringFilter });
    },
    [paramName, setQuery],
  );

  const savedData = useMemo(() => {
    try {
      if (query?.[paramName]) {
        return JSON.parse(query[paramName]!) as T;
      }
    } catch (e) {
      setIsError(true);
    }
  }, [paramName, query]);

  // useEffect fixes the stack trace
  useEffect(() => {
    if (isError) {
      setQuery({ [paramName]: null });
      setIsError(false);
    }
  }, [isError, paramName, setQuery]);

  return [savedData, onSave];
};

export default useSaveInURL;
