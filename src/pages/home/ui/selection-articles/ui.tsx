import { useTranslation } from "next-i18next";
import { Article } from "@/shared/ui/article";
import { useRouter } from "next/router";
import { useGetBlog } from "@/shared/queries/blog";
import { Button } from "@/shared/ui";
import Link from "next/link";

export const SelectionArticles = () => {
  const { locale } = useRouter();
  const { data } = useGetBlog(locale);
  const { t } = useTranslation("home");

  return (
    <div className=" m-auto max-w-main p-14 text-black">
      <h2 className="mb-12 text-4xl font-medium">
        {t("selection-of-articles")}
      </h2>
      <div className="flex justify-between gap-5">
        {data
          ?.map((el) => (
            <Article
              img={el.alias}
              key={el.id}
              date={el.created}
              time={el.reading_minutes}
              title={el.title}
              text={el.description}
            />
          ))
          .slice(0, 4)}
      </div>
      <div className="mt-10 flex justify-center">
        <Button variant="outline" size="sm">
          <Link href="/blog"> {t("articles.read-more")}</Link>
        </Button>
      </div>
    </div>
  );
};
