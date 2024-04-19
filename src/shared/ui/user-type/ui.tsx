import Image from "next/image";
import { useTranslation } from "next-i18next";

interface IUserType {
  userType?: string;
  className?: string;
}
export const UserType = ({ userType, className }: IUserType) => {
  const { t } = useTranslation("home");

  return (
    <div className="flex">
      <Image
        src="/images/private-announcement.svg"
        alt="Location"
        width={16}
        height={16}
      />
      <p className={className}>
        {userType === "USER"
          ? t("advertisement.private-announcement")
          : t("advertisement.shelter")}
      </p>
    </div>
  );
};
