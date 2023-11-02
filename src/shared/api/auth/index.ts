import { axiosInstance } from "../config";

import type { IAuth, IFormLogin, IFormRegistration } from "./types";

class AuthActions {
  async login(form: IFormLogin) {
    const result = await axiosInstance.post<IAuth>("/v1/auth/login", form);
    return result.data;
  }

  async signup(form: IFormRegistration) {
    const result = await axiosInstance.post<IAuth>("/v1/auth/register", form);
    return result.data;
  }

  async refreshToken({}: Record<string, unknown>) {
    const result = await axiosInstance.post<IAuth>("/v1/auth/refresh", {}, {});
    return result.data;
  }
}

const AuthService = new AuthActions();
export default AuthService;
