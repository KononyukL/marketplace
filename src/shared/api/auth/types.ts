export interface ILogin {
  email: string;
  password: string;
}

export interface IAuth {
  email: string;
  accessToken: string;
  refreshToken: string;
}

export interface IFormLogin extends ILogin {
  rememberMe: boolean;
}
