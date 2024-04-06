import { useQuery, type UseQueryResult } from "react-query";
import { type ILocation } from "@/shared/api/locations/types";
import Locations from "@/shared/api/locations";
import type { AxiosError } from "axios";

export function useGetCountryStates(
  id = 1,
): UseQueryResult<ILocation[], AxiosError> {
  return useQuery(["country-states", id], () =>
    Locations.getCountryStatesByName(id),
  );
}
