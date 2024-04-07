import { type ICity } from "@/shared/api/locations/types";
import useDebounce from "@/shared/hooks/use-debounce";
import { useState, useCallback } from "react";
import { type UseQueryResult, useQuery } from "react-query";
import Locations from "@/shared/api/locations";

export function useGetCitiesByName(
  defaultName = "",
  { size } = { size: 100 },
): UseQueryResult<ICity[]> & {
  searchCitiesByName: (name: string) => void;
  queryString: string;
} {
  const [name, setName] = useState("");
  const debouncedName = useDebounce(name || defaultName, 500);

  const searchCitiesByName = useCallback((name: string) => {
    setName(name);
  }, []);

  const queryKey = ["cities-by-name", debouncedName];
  const data = useQuery(
    queryKey,
    () => Locations.getCitiesByName({ name: debouncedName, size }),
    { enabled: !!debouncedName },
  );

  return { ...data, searchCitiesByName, queryString: name };
}
