import type { AppProps } from "next/app";
import { QueryClientProvider } from "react-query";
import queryClient from "@/shared/queries";
import { store } from "@/shared/store/store";
import { Provider } from "react-redux";
import { Roboto_Flex } from "next/font/google";

const robotoFlex = Roboto_Flex({ subsets: ["latin"] });
const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <main className={robotoFlex.className}>
            <Component {...pageProps} />
          </main>
        </Provider>
      </QueryClientProvider>
    </>
  );
};

export default App;
