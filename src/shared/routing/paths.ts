export const paths = {
  auth: {
    login: "/v1/auth/login",
    register: "/v1/auth/register",
    refresh: "/v1/auth/refresh",
  },
  languages: {
    get_all: "/v1/languages",
  },
} as const;
