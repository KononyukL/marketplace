import { paths } from "@/shared/routing";
import { axiosInstance } from "../config";

import type { IAuth, IFormLogin, ILogin } from "./types";
import { convertCases } from "@/shared/config";

class AuthActions {
  async login(form: IFormLogin) {
    const result = await axiosInstance.post<IAuth>(
      paths.auth.login,
      convertCases("snakeCase", form),
    );
    return result.data;
  }

  async signup(form: ILogin) {
    const result = await axiosInstance.post<IAuth>(paths.auth.register, form);
    return result.data;
  }

  async refreshToken({}: Record<string, unknown>) {
    const result = await axiosInstance.post<IAuth>(paths.auth.refresh, {}, {});
    return result.data;
  }
}

const AuthService = new AuthActions();
export default AuthService;
