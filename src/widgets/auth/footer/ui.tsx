import Link from "next/link";
import { useTranslation } from "next-i18next";

interface IFooterAuth {
  title: string;
  link: string;
  textLink: string;
}
export const FooterAuth = ({ title, textLink, link }: IFooterAuth) => {
  const { t } = useTranslation("common");

  return (
    <div className="mb-5 mt-10 flex justify-center gap-2 text-sm">
      <p className="text-gray-9">{t(title)}</p>
      <Link className="text-secondary" href={link}>
        {t(textLink)}
      </Link>
    </div>
  );
};
