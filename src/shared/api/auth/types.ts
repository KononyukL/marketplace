export interface IAuth {
  email: string;
  token: string;
}

export interface IFormLogin {
  email: string;
  password: string;
}

export interface IFormRegistration {
  email: string;
  first_name?: string;
  last_name?: string;
  phone_num?: string | number;
  password: string;
}
