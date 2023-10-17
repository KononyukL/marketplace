import { axiosInstance } from "../config";

import type { IAuth, IFormLogin, IFormRegistration } from "./types";

export const authApi = {
  async login({ email, password }: IFormLogin) {
    const result = await axiosInstance.post<IAuth>("/v1/auth/login", {
      email,
      password,
    });
    return result.data;
  },
  async registration({ email, password }: IFormRegistration) {
    const result = await axiosInstance.post<IAuth>("/v1/auth/register", {
      email,
      password,
    });
    return result.data;
  },
};
