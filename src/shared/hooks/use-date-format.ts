import { format, isToday, isYesterday, type Locale } from "date-fns";
import { enGB, uk } from "date-fns/locale";
import { useTranslation } from "next-i18next";
import { type TLocales } from "@/shared/config";

const LOCALES_OBJECT: Record<TLocales, Locale> = {
  ua: uk,
  en: enGB,
};
interface IUseDateFormat {
  date: string;
  locale: TLocales;
}

export const useDateFormat = ({ date, locale }: IUseDateFormat) => {
  const { t } = useTranslation("common");
  const formHour = format(new Date(date), "HH:mm");
  const form = format(new Date(date), " dd MMMM, hh:mm", {
    locale: LOCALES_OBJECT[locale],
  });
  if (isToday(new Date(date))) {
    return `${t("time.today")} ${formHour}`;
  }
  if (isYesterday(new Date(date))) {
    return `${t("time.yesterday")} ${formHour}`;
  }
  return form;
};
