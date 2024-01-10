import { paths } from "@/shared/routing";
import { axiosInstance } from "../config";
import {
  type ICity,
  type ICityByNameProps,
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
}

const LocationsService = new LocationsActions();
export default LocationsService;
