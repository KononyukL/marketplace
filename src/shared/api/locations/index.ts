import { paths } from "@/shared/routing";
import { axiosInstance } from "../config";
import {
  type ICity,
  type ICityByNameProps,
  type ILocation,
} from "@/shared/api/locations/types";

class LocationsActions {
  async getCitiesByName({
    name,
    ...params
  }: ICityByNameProps): Promise<ICity[]> {
    const result = await axiosInstance.get<ICity[]>(
      `${paths.locations.get_city_by_name}${name}`,
      {
        params,
      },
    );
    return result.data;
  }

  async getCountryStatesByName(id = 1): Promise<ILocation[]> {
    const result = await axiosInstance.get<ILocation[]>(
      `${paths.locations.get_country_states_by_name}${id}/states`,
    );
    return result.data;
  }

  async getStatesCities(id: number): Promise<ICity[]> {
    const result = await axiosInstance.get<ICity[]>(
      `${paths.locations.get_states_cities}${id}/cities`,
    );
    return result.data;
  }
}

const LocationsService = new LocationsActions();
export default LocationsService;
