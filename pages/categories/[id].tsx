import SearchService from "@/shared/api/search";
import { type ICategoriesSearch } from "@/shared/api/search/types";
import type { GetServerSideProps, GetServerSidePropsContext } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export { Category as default } from "@/pages/category";

// export const getStaticPaths: GetStaticPaths = ({ locales }) => {
//   const paths = locales?.map((locale) => ({
//     params: { id: "404" },
//     locale,
//   }));

//   return {
//     paths: paths || [],
//     fallback: "blocking",
//   };
// };

// export const getStaticProps: GetStaticProps = async (props) => {
//   return {
//     props: {
//       ...(await serverSideTranslations(props?.locale || '', [
//         "common",
//         "home",
//         "categories",
//       ])),
//     },
//   };
// };

export const getServerSideProps: GetServerSideProps<{data: ICategoriesSearch}> = async (
  context: GetServerSidePropsContext,
) => {
  const locale = context?.locale || "ua";
  const searchTerm = context?.query?.search as string;
  const data = await SearchService.getSearch(locale, {
    searchTerm: searchTerm || "",
    size: 12,
    page: 1,
  });

  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "home",
        "categories",
      ])),
      data,
      searchTerm
    },
  };
};
