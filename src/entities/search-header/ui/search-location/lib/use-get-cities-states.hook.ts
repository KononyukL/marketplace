import { type ICity } from "@/shared/api/locations/types";
import { type AxiosError } from "axios";
import Locations from "@/shared/api/locations";
import { type UseQueryResult, useQuery } from "react-query";

export function useGetCitiesStates(
  id: number = 0,
): UseQueryResult<ICity[], AxiosError> {
  return useQuery(["states-cities", id], () => Locations.getStatesCities(id), {
    enabled: !!id,
  });
}
