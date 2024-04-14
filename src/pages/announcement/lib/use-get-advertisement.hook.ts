import { type UseQueryResult, useQuery } from "react-query";
import type { AxiosError } from "axios";
import {
  type IAdvertisementDetails,
  type IGetAdvertisementProps,
} from "@/shared/api/advertisement/types";
import AdvertisementsService from "@/shared/api/advertisement";

export function useGetAdvertisement({
  langCode,
  id,
}: IGetAdvertisementProps): UseQueryResult<IAdvertisementDetails, AxiosError> {
  return useQuery(["advertisement", langCode, id], () =>
    AdvertisementsService.getAdvertisement({ langCode, id }),
  );
}
