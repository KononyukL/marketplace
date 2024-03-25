import type { AppProps } from "next/app";
import { QueryClientProvider } from "react-query";
import queryClient from "@/shared/queries";
import { store } from "@/shared/store/store";
import { Provider } from "react-redux";
import { BaseLayout } from "@/widgets/layouts/base-layout/ui";
import { appWithTranslation } from "next-i18next";
import NextAdapterApp from "next-query-params/app";
import { QueryParamProvider } from "use-query-params";
import { ReactQueryDevtools } from "react-query/devtools";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <QueryParamProvider adapter={NextAdapterApp}>
            <ReactQueryDevtools initialIsOpen={false} />
            <BaseLayout>
              <Component {...pageProps} />
            </BaseLayout>
          </QueryParamProvider>
        </Provider>
      </QueryClientProvider>
    </>
  );
};

export default appWithTranslation(App);
