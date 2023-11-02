import { axiosInstance } from "../config";
import type { ILanguage } from "./types";

class LanguagesActions {
  async getLanguages(): Promise<ILanguage[]> {
    const result = await axiosInstance.get<ILanguage[]>("/v1/languages");
    return result.data;
  }
}

const LanguagesService = new LanguagesActions();
export default LanguagesService;
