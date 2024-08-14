import { authActions, selectAuth } from "@/shared/store/auth";
import { useAppDispatch, useAppSelector } from "@/shared/store/hooks";
import { axiosInstance } from "@/shared/api/config";
import axios, { type AxiosError, type InternalAxiosRequestConfig } from "axios";
import { SESSION_CONFIG, readJWTData } from "@/shared/config";
import { useRefresh } from "@/shared/queries/auth/index";
import { useRouter } from "next/router";
import { useRef } from "react";

interface IJWTData {
  access: boolean;
  exp: number;
  iat: number;
  roles: string[];
  sub: string;
}

export const useAuth = () => {
  const { auth } = useAppSelector(selectAuth);
  const { mutateAsync: refreshToken } = useRefresh();
  const router = useRouter();
  const retry = useRef<boolean>(false);

  const dispatch = useAppDispatch();

  const requestInterceptor = async (config: InternalAxiosRequestConfig) => {
    const isRefresh = config?.url?.includes("refresh");

    if (auth?.accessToken && !isRefresh) {
      const expIn = readJWTData<IJWTData>(auth.accessToken)?.exp;
      const isValidToken =
        expIn && expIn * 1000 > Date.now() + SESSION_CONFIG.EXPIRATION_OFFSET;

      if (!isValidToken) {
        if (!auth.refreshToken) {
          //TODO add logout in future
          dispatch(authActions.clearAuth());
          void router.push("/login");
        }

        const { accessToken } = await refreshToken({});
        config.headers.Authorization = `Bearer ${accessToken}`;
      } else {
        config.headers.Authorization = `Bearer ${auth.accessToken}`;
      }
    }

    if (isRefresh && auth?.refreshToken) {
      config.headers.Authorization = `Bearer ${auth.refreshToken}`;
    }

    return config;
  };

  const responseInterceptor = async (
    error: AxiosError | Error,
  ): Promise<AxiosError> => {
    if (axios.isAxiosError(error)) {
      if (error?.response?.status === 401 && !retry.current) {
        if (
          error?.response?.config?.url?.includes("refresh") ||
          !auth?.refreshToken
        ) {
          //TODO add logout in future
          dispatch(authActions.clearAuth());
          void router.push("/login");
        } else if (error.config) {
          retry.current = true;

          await refreshToken({});

          retry.current = false;
          return axiosInstance(error.config);
        }
      }
    }

    return Promise.reject(error);
  };

  axiosInstance.interceptors.request.use(requestInterceptor);
  axiosInstance.interceptors.response.use((res) => res, responseInterceptor);
};
