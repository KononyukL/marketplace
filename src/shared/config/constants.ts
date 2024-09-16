import { SORT_OPTIONS } from "@/shared/queries/search/types";

export const ANNOUNCEMENT_SIZE = 4;
export const SORT_TITLES = {
  [SORT_OPTIONS.RATING_HIGHEST]: "За рейтингом",
  [SORT_OPTIONS.NEWEST]: "Найновіші",
  [SORT_OPTIONS.PRICE_LOWEST]: "Найдешевші",
  [SORT_OPTIONS.PRICE_HIGHEST]: "Найдорожчі",
};

export const PAGE_SIZE_CATEGORIES = 5;


export const REVIEWED_ADS_KEY_LS = 'reviewed-ads'