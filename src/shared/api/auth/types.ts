export interface IAuth {
  email: string;
  accessToken: string;
  refreshToken: string;
}

export interface IFormLogin {
  email: string;
  password: string;
  rememberMe: boolean;
}

export interface IFormRegistration {
  email: string;
  password: string;
}
