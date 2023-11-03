import { useQuery, type UseQueryResult } from "react-query";

import { LANGUAGES_KEYS } from "@/shared/api/languages/constants";
import type { ILanguage } from "@/shared/api/languages/types";
import type { AxiosError } from "axios";
import LanguagesService from "@/shared/api/languages";

export function useGetLanguage(): UseQueryResult<ILanguage[], AxiosError> {
  /* we should use arrow function here because when pass callback, 
   it loses its context, leading to potential errors */
  return useQuery([LANGUAGES_KEYS.LANGUAGE], () =>
    LanguagesService.getLanguages(),
  );
}
