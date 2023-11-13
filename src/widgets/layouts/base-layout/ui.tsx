import { type PropsWithChildren } from "react";

import { Header } from "@/widgets/header";
import { useRouter } from "next/router";
import { Roboto_Flex } from "next/font/google";
import { Footer } from "@/widgets/footer";

const PATH_WITHOUT_LAYOUT = ["/login", "/registration"];

const robotoFlex = Roboto_Flex({ subsets: ["latin", "cyrillic"] });
export const BaseLayout = ({ children }: PropsWithChildren) => {
  const router = useRouter();

  if (PATH_WITHOUT_LAYOUT.includes(router.pathname)) {
    return <main className={robotoFlex.className}>{children}</main>;
  }

  return (
    <div className={robotoFlex.className}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
