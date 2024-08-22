import Link from "next/link";
import { Icons } from "@/shared/config";
import { useAppSelector } from "@/shared/store/hooks";
import { selectAuth } from "@/shared/store/auth";
import { useTranslation } from "next-i18next";
import { useEffect, useState } from "react";

export const AuthProfile = () => {
  const { t } = useTranslation("common");
  const { auth } = useAppSelector(selectAuth);

  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    setIsAuth(!!auth);
  }, [auth]);

  return (
    <Link
      href={isAuth ? "/" : "/login"}
      className="flex gap-1 text-white hover:text-primary hover:transition-all"
    >
      <Icons.User />
      {isAuth ? t("auth.your-profile") : t("auth.login")}
    </Link>
  );
};
