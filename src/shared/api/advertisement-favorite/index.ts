import { paths } from "@/shared/routing";
import { axiosInstance } from "../config";
import {
  type IGetAdvertisementFavoriteProps,
  type IAdvertisementFavorite,
} from "@/shared/api/advertisement-favorite/types";

class AdvertisementsFavoriteActions {
  async getAdvertisementFavorite({
    langCode,
    ...params
  }: IGetAdvertisementFavoriteProps): Promise<IAdvertisementFavorite> {
    const result = await axiosInstance.get<IAdvertisementFavorite>(
      `${paths.advertisementsFavorite.get_all}${langCode}`,
      {
        params,
      },
    );
    return result.data;
  }
}

const AdvertisementsFavoriteService = new AdvertisementsFavoriteActions();
export default AdvertisementsFavoriteService;
