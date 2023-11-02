import { axiosInstance } from "../config";

import type { ILanguage } from "./types";

export const languagesApi = {
  async getLanguages() {
    const result = await axiosInstance.get<ILanguage[]>("/v1/languages");
    return result.data;
  },
};
