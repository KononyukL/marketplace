import { Spinner } from "@/shared/ui/spinner";
import { Advertisement } from "@/shared/ui/advertisement";
import { type IAdvertisement } from "@/shared/api/advertisement-favorite/types";

interface AdvertisementListProps {
  advertisements: IAdvertisement[];
  isFetching: boolean;
}

export const AdvertisementList = ({
  advertisements,
  isFetching,
}: AdvertisementListProps) => {
  if (isFetching) {
    return <Spinner />;
  }

  return (
    <div className="flex flex-col gap-8">
      {advertisements.map((ad) => (
        <Advertisement
          key={ad.id}
          top={false}
          img={ad.images}
          ending={ad.updated}
          title={ad.title}
          price={ad.price}
          text={ad.description}
          author={ad.author.shortName}
          city={ad.location.city_name}
          cityType={ad.location.city_type_short_title}
          reviewsCount={ad.rating}
          attributes={ad.attributes}
          favoriteAttributes={ad.favorite_attributes}
          userAvatarUrl={ad.author.user_avatar_url}
          id={ad.id}
        />
      ))}
    </div>
  );
};
