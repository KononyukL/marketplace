import { useQuery, type UseQueryResult } from "react-query";

import { type ICity } from "@/shared/api/locations/types";
import Locations from "@/shared/api/locations";
import { useCallback, useState } from "react";
import useDebounce from "@/shared/hooks/use-debounce";

export function useGetCitiesByName(
  defaultName = "",
  { size } = { size: 100 },
): UseQueryResult<ICity[]> & {
  searchCitiesByName: (name: string) => void;
  queryString: string;
} {
  const [name, setName] = useState("");
  const debouncedName = useDebounce<string>(name || defaultName, 500);

  const searchCitiesByName = useCallback((name: string) => {
    setName(name);
  }, []);

  const data = useQuery(
    ["advertisements-favorite", debouncedName],
    () => Locations.getCitiesByName({ name: debouncedName, size }),
    { enabled: !!debouncedName },
  );

  return { ...data, searchCitiesByName, queryString: name };
}
