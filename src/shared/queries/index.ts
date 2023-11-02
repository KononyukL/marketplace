import { QueryClient } from "react-query";

const MAX_RETRY_COUNT = 3;

const ONE_MINUTE_IN_MS = 60 * 1000; // 60 секунд * 1000 мілісекунд
const TWENTY_MINUTES_IN_MS = 20 * ONE_MINUTE_IN_MS;
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
      staleTime: ONE_MINUTE_IN_MS,
      cacheTime: TWENTY_MINUTES_IN_MS,
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
