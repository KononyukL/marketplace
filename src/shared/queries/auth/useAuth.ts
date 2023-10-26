import { selectAuth } from "@/shared/store/auth";
import { useAppSelector } from "@/shared/store/hooks";
import { axiosInstance } from "@/shared/api/config";

export const useAuth = () => {
  const { auth } = useAppSelector(selectAuth);
  axiosInstance.interceptors.request.use((config) => {
    if (auth?.accessToken) {
      config.headers.Authorization = `Bearer ${auth.accessToken}`;
    }

    return config;
  });
};
