/* eslint-disable @typescript-eslint/no-unsafe-call */
import { StringParam, useQueryParams } from "use-query-params";
import { useCallback, useEffect, useMemo, useState } from "react";

type JSONPrimitive = string | number | boolean | null | undefined;

type JSONValue =
  | JSONPrimitive
  | JSONValue[]
  | {
      [key: string]: JSONValue;
    };

type JSONCompatible<T> = unknown extends T
  ? never
  : {
      [P in keyof T]: T[P] extends JSONValue
        ? T[P]
        : T[P] extends NotAssignableToJson
        ? never
        : JSONCompatible<T[P]>;
    };

type NotAssignableToJson = bigint | symbol | (() => void);

type IUseSaveInURL<T extends JSONCompatible<T>> = [
  savedData: T | null,
  onSave: (data?: T | null) => void,
];

export const useSaveInURL = <T extends JSONCompatible<T>>(
  paramName: string,
): IUseSaveInURL<T> => {
  const [isError, setIsError] = useState(false);
  const [query, setQuery] = useQueryParams({ [paramName]: StringParam });

  const onSave = useCallback(
    (data?: T | null) => {
      const stringFilter = data != null ? JSON.stringify(data) : undefined;
      setQuery({ [paramName]: stringFilter }, "pushIn");
    },
    [paramName, setQuery],
  );

  const savedData = useMemo(() => {
    if (query[paramName] != null) {
      try {
        const parsedData = JSON.parse(query[paramName]);
        if (parsedData && typeof parsedData === "object") {
          return parsedData as T;
        }
      } catch (error) {
        console.error(`Error parsing query parameter "${paramName}":`, error);
        setIsError(true);
      }
    }
    return null;
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
