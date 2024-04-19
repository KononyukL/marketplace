import { type IDelivery, IPayment } from "@/shared/api/advertisement/types";
import { Icons } from "@/shared/config";
import { Button, UserAvatar, UserType } from "@/shared/ui";
import Link from "next/link";
import { useDateFormat } from "@/shared/hooks/use-date-format";
import { type TLocales } from "@/shared/config";
import { useRouter } from "next/router";
import { Rating } from "react-simple-star-rating";
import { useTranslation } from "next-i18next";

interface ISellerProps {
  userType?: string;
  userAvatarUrl: string;
  firstName: string;
  lastName: string;
  rating: number;
  reviewsCount: number;
  completeOrders: number;
  lastActivity: string;
  responseSpeed: number;
  deliveries: IDelivery[];
  payments: IPayment[];
}

export const SellerInfo = ({
  userType,
  userAvatarUrl,
  firstName,
  lastName,
  rating,
  reviewsCount,
  completeOrders,
  lastActivity,
  responseSpeed,
  deliveries,
  payments,
}: ISellerProps) => {
  const { t } = useTranslation("announcement");

  const { locale = "ua" } = useRouter();

  const formattedDate = useDateFormat({
    date: lastActivity,
    locale: locale as TLocales,
  });

  return (
    <div className="flex flex-col gap-4 rounded-lg bg-white p-8">
      <UserType
        userType={userType}
        className="text-xl font-medium text-title"
      />
      <div className="flex flex-row items-center gap-4">
        <UserAvatar
          userAvatarUrl={userAvatarUrl}
          author={firstName}
          className="h-16 w-16"
        />
        <div className="text-title">
          <p className="font-medium">
            {firstName ?? "Unnamed Seller"} {lastName}
          </p>
          <div className="inline-flex items-center gap-4 [&_path]:stroke-additional  [&_path]:stroke-[1.5px]">
            <Rating
              SVGstyle={{ display: "inline" }}
              iconsCount={5}
              initialValue={rating}
              size={20}
              readonly={true}
              fillColor={"#2A907F"}
              SVGstrokeColor={"#2A907F"}
              SVGstorkeWidth={1.5}
              emptyColor={"#FFFFFF"}
              allowFraction={true}
            />
            <p>
              {rating} ({reviewsCount})
            </p>
          </div>
        </div>
      </div>
      <ul className="pl-20 text-sm text-text-3 [&>li]:flex [&>li]:items-center [&>li]:gap-2 [&>li]:pb-1">
        <li>
          <Icons.ShoppingBag />
          {t("seller-info.complete-orders")}: {completeOrders}
        </li>
        <li>
          <Icons.ClockIcon /> {t("seller-info.last-activity")}:{" "}
          {formattedDate.toLowerCase()}
        </li>
        <li>
          <Icons.CountdownClock />
          {t("seller-info.speed-response")} {responseSpeed}{" "}
          {t("seller-info.units")}
        </li>
      </ul>
      <Button variant="outline" className="font-medium text-title">
        {t("seller-info.seller-contacts")}
      </Button>
      <Link
        href="#"
        className="mb-4 inline-flex items-center justify-center gap-3 font-medium text-title"
      >
        <span className="border-b border-b-title">
          {t("seller-info.all-seller-ads")}
        </span>
        <Icons.NextIcon />
      </Link>
      <hr />
      <p className="mt-4 text-xl font-medium text-title">
        {t("seller-info.delivery")}:
      </p>
      <ul className="flex flex-col gap-2">
        {deliveries.map((delivery, index) => (
          <li
            key={index}
            className="inline-flex items-center gap-4 text-text-3"
          >
            <Icons.Checkmark />
            {delivery.name}
          </li>
        ))}
      </ul>
      <p className="mt-4 text-xl font-medium text-title">
        {t("seller-info.payment")}:
      </p>
      <ul className="mb-4">
        {payments.map((payment, index) => (
          <li
            key={index}
            className="mb-2 mr-2 inline-flex items-center gap-2 rounded-md border border-additional px-4 py-2 text-[16px] leading-[25px] text-additional"
          >
            {payment.name === t("seller-info.payment") ? (
              <Icons.Cash />
            ) : (
              <Icons.CreditCard />
            )}
            {payment.name}
          </li>
        ))}
      </ul>
      <hr />
      <Link
        href="#"
        className="mt-2 inline-flex items-center gap-2 font-medium leading-6 text-text-3"
      >
        <Icons.Alert />
        <span className="border-b border-b-text-3">
          {t("seller-info.report")}
        </span>
      </Link>
    </div>
  );
};
