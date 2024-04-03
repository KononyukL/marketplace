import { paths } from "@/shared/routing";
import { axiosInstance } from "../config";
import { type IAdvertisementDetails } from "../advertisement/types";
import { type IGetAdvertisementProps } from "./types";

class AdvertisementActions {
  async getAdvertisement({
    langCode,
    id,
  }: IGetAdvertisementProps): Promise<IAdvertisementDetails> {
    const result = await axiosInstance.get<IAdvertisementDetails>(
      `${paths.advertisement.get_by_id}${id}/${langCode}`,
    );
    return result.data;
  }
}

const AdvertisementService = new AdvertisementActions();
export default AdvertisementService;
