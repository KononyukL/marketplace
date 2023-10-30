import { useQuery, type UseQueryResult } from "react-query";
import { languagesApi } from "@/shared/api";
import { LANGUAGES_KEYS } from "@/shared/api/languages/constants";
import type { ILanguage } from "@/shared/api/languages/types";
import type { AxiosError } from "axios";

export function useGetLanguage(): UseQueryResult<ILanguage[], AxiosError> {
  // eslint-disable-next-line @typescript-eslint/unbound-method
  return useQuery([LANGUAGES_KEYS.LANGUAGE], languagesApi.getLanguages);
}
