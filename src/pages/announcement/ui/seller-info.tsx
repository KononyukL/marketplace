import {
  type IAdvertisementDetails,
  type IPayment,
} from "@/shared/api/advertisement/types";
import { Icons } from "@/shared/config";
import { Button, UserAvatar, UserType } from "@/shared/ui";
import Link from "next/link";
import { useDateFormat } from "@/shared/hooks/use-date-format";
import { type TLocales } from "@/shared/config";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { RatingStar } from "@/shared/ui/rating-star";

const DEFAULT_SELLER_NAME = "Unnamed seller";

export const SellerInfo = ({
  advertisement,
}: {
  advertisement: IAdvertisementDetails;
}) => {
  const { author, deliveries, payments } = advertisement;
  const { t } = useTranslation("announcement");

  const { locale = "ua" } = useRouter();

  const formattedDate = useDateFormat({
    date: author.last_activity,
    locale: locale as TLocales,
  });

  const getPaymentIcon = (payment: IPayment) => {
    if (payment.id === 1) {
      return <Icons.Cash />;
    } else if (payment.id === 2) {
      return <Icons.CreditCard />;
    }
    return "";
  };

  return (
    <div className="flex flex-col gap-4 rounded-lg bg-white p-8">
      <UserType
        userType={author.user_type}
        className="text-xl font-medium text-primary"
      />
      <div className="flex flex-row items-center gap-4">
        <UserAvatar
          userAvatarUrl={author.user_avatar_url}
          author={author.first_name}
          className="h-16 w-16"
        />
        <div className="text-primary">
          <p className="font-medium">
            {author.first_name ?? DEFAULT_SELLER_NAME} {author.last_name}
          </p>
          <div className="[&_path]:stroke-teal-0 inline-flex items-center gap-4  [&_path]:stroke-[1.5px]">
            <RatingStar initialValue={author.rating} />
            <p>
              {author.rating} ({author.reviews_count})
            </p>
          </div>
        </div>
      </div>
      <ul className="text-gray-8 pl-20 text-sm [&>li]:flex [&>li]:items-center [&>li]:gap-2 [&>li]:pb-1">
        <li>
          <Icons.ShoppingBag />
          {t("seller-info.complete-orders")}: {author.complete_orders_count}
        </li>
        <li>
          <Icons.ClockIcon /> {t("seller-info.last-activity")}:{" "}
          {formattedDate.toLowerCase()}
        </li>
        <li>
          <Icons.CountdownClock />
          {t("seller-info.speed-response")} {author.response_speed}{" "}
          {t("seller-info.units")}
        </li>
      </ul>
      <Button variant="outline" className="font-medium text-primary">
        {t("seller-info.seller-contacts")}
      </Button>
      <Link
        href="#"
        className="mb-4 inline-flex items-center justify-center gap-3 font-medium text-primary"
      >
        <span className="border-b border-b-primary">
          {t("seller-info.all-seller-ads")}
        </span>
        <Icons.NextIcon />
      </Link>
      <hr />
      <p className="mt-4 text-xl font-medium text-primary">
        {t("seller-info.delivery")}:
      </p>
      <ul className="flex flex-col gap-2">
        {deliveries.map((delivery, index) => (
          <li
            key={index}
            className="text-gray-8 inline-flex items-center gap-4"
          >
            <Icons.Checkmark />
            {delivery.name}
          </li>
        ))}
      </ul>
      <p className="mt-4 text-xl font-medium text-primary">
        {t("seller-info.payment")}:
      </p>
      <ul className="mb-4">
        {payments.map((payment, index) => (
          <li
            key={index}
            className="border-teal-0 text-teal-0 mb-2 mr-2 inline-flex items-center gap-2 rounded-md border px-4 py-2 text-[16px] leading-[25px]"
          >
            {getPaymentIcon(payment)}
            {payment.name}
          </li>
        ))}
      </ul>
      <hr />
      <Link
        href="#"
        className="mt-2 inline-flex items-center gap-2 font-medium leading-6 text-gray-8"
      >
        <Icons.Alert />
        <span className="border-b border-b-gray-8">
          {t("seller-info.report")}
        </span>
      </Link>
    </div>
  );
};
