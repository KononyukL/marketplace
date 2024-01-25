import Image from "next/image";
import { useTranslation } from "next-i18next";

interface IUserType {
  userType?: string;
}
export const UserType = ({ userType }: IUserType) => {
  const { t } = useTranslation("home");

  return (
    <div className="flex">
      <Image
        src="/images/private-announcement.svg"
        alt="Location"
        width={16}
        height={16}
      />
      <p className="text-text-4">
        {userType === "USER"
          ? t("advertisement.private-announcement")
          : t("advertisement.shelter")}
      </p>
    </div>
  );
};
