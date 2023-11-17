import type { AppProps } from "next/app";
import { QueryClientProvider } from "react-query";
import queryClient from "@/shared/queries";
import { store } from "@/shared/store/store";
import { Provider } from "react-redux";
import { BaseLayout } from "@/widgets/layouts/base-layout/ui";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <BaseLayout>
            <Component {...pageProps} />
          </BaseLayout>
        </Provider>
      </QueryClientProvider>
    </>
  );
};

export default App;
