import { QueryClient } from "react-query";

const MAX_RETRY_COUNT = 3;

interface IRequestError {
  response?: {
    status?: number;
  };
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      useErrorBoundary: (error) => {
        return (error as { code: number }).code !== 401;
      },
      staleTime: 1 * 1000 * 60,
      cacheTime: 20 * 60 * 1000,
      refetchOnWindowFocus: false,
      retry: (failureCount, error) => {
        const isMaxRetry = failureCount === MAX_RETRY_COUNT;
        const isAuthorizationError =
          (error as IRequestError)?.response?.status === 401;
        return !isAuthorizationError && !isMaxRetry;
      },
    },
  },
});

export default queryClient;
