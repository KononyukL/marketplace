import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import type { GetStaticProps } from "next";
import { Cart } from "@/pages/cart";

const CartPage = () => {
  return <Cart />;
};

export default CartPage;

export const getStaticProps: GetStaticProps = async ({ locale = "" }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["cart"])),
    },
  };
};