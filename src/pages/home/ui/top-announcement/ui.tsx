import { useGetCategoriesFavoriteTags } from "@/shared/queries/categories-favorite-tags";
import { useCallback, useState } from "react";
import { Advertisement } from "@/shared/ui/advertisement";
import { ButtonTags } from "@/shared/ui/buttons/ui/button-tags";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { Button } from "@/shared/ui";
import { ANNOUNCEMENT_SIZE } from "@/shared/config";
import { useGetAdvertisementsFavorite } from "@/shared/queries/advertisements-favorite-tags";
import { DEFAULT_LOCALE } from "@/shared/queries/constants";
import Link from "next/link";
import { Spinner } from "@/shared/ui/spinner";
import { SkeletonAds } from "@/shared/ui/skeleton-ads";

export const TopAnnouncement = () => {
  const { locale } = useRouter();
  const { t } = useTranslation("home");
  const { data } = useGetCategoriesFavoriteTags(locale);
  const defaultData = data?.[0].category_id || 1;
  const [categoryId, setCategoryId] = useState(defaultData);

  const {
    data: advertisements,
    fetchNextPage,
    isLoading,
    isFetching,
  } = useGetAdvertisementsFavorite({
    langCode: locale || DEFAULT_LOCALE,
    categoriesIds: categoryId,
    size: ANNOUNCEMENT_SIZE,
  });

  const onClick = (categoryId: number) => () => {
    setCategoryId(categoryId);
  };

  const onClickFetchNextPage = useCallback(
    () => fetchNextPage(),
    [fetchNextPage],
  );

  if ((!advertisements?.pages || !data?.length) && !isLoading) {
    return <div>{"Content not found"}</div>;
  }

  return (
    <div className="m-auto mb-32 max-w-main px-14 text-black">
      <h2 className="mb-12 text-4xl font-medium">{t("top")}</h2>
      <div className="flex flex-col gap-8">
        <div className="flex gap-2">
          {data?.map((tag) => (
            <ButtonTags
              onClick={onClick(tag.category_id)}
              key={tag.category_id}
              isActive={categoryId === tag.category_id}
            >
              {tag.tag_title.toLowerCase()}
            </ButtonTags>
          ))}
        </div>
        {isLoading ? (
          <SkeletonAds number={4} />
        ) : (
          advertisements.pages.map((page) =>
            page.content.map((el) => (
              <Advertisement
                key={el.id}
                id={el.id}
                top={true}
                city={el.location.city_name}
                author={el.author.shortName}
                cityType={el.location.city_type_short_title}
                img={el.images}
                attributes={el.attributes}
                prise={el.price}
                ending={el.updated}
                text={el.description}
                title={el.title}
                reviewsCount={el.author.reviews_count}
                favoriteAttributes={el.favorite_attributes}
                userAvatarUrl={el.author.user_avatar_url}
                userType={el.author.user_type}
              />
            )),
          )
        )}
      </div>
      <div className="mt-10 flex justify-center">
        {advertisements &&
        advertisements.pages.length < 2 &&
        advertisements.pages[0].totalElements > ANNOUNCEMENT_SIZE ? (
          <Button
            size="xl"
            variant="outline"
            endAdornment={isFetching ? <Spinner /> : <></>}
            disabled={isFetching}
            //eslint-disable-next-line @typescript-eslint/no-misused-promises
            onClick={onClickFetchNextPage}
          >
            {isFetching ? "" : t("see-more")}
          </Button>
        ) : (
          <Button size="xl" variant="outline">
            <Link href={`categories/${categoryId}`}>{t("go-to-catalog")}</Link>
          </Button>
        )}
      </div>
    </div>
  );
};
