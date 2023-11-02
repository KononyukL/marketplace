import { paths } from "@/shared/routing";
import { axiosInstance } from "../config";
import type { ILanguage } from "./types";

class LanguagesActions {
  async getLanguages(): Promise<ILanguage[]> {
    const result = await axiosInstance.get<ILanguage[]>(
      paths.languages.get_all,
    );
    return result.data;
  }
}

const LanguagesService = new LanguagesActions();
export default LanguagesService;
