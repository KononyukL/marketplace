import { axiosInstance } from "../config";

import { IAuth, IFormLogin, IFormRegistration } from "./types";

export const authApi = {
  async login({ email, password }: IFormLogin) {
    const result = await axiosInstance.post<IAuth>("/v1/auth/login", {
      email,
      password,
    });
    return result.data;
  },
  async registration({
    email,
    first_name,
    last_name,
    phone_num,
    password,
  }: IFormRegistration) {
    const result = await axiosInstance.post<IAuth>("/v1/auth/register", {
      email,
      first_name,
      last_name,
      phone_num,
      password,
    });
    return result.data;
  },
};
