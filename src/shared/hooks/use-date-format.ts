import { format, isToday, isYesterday, type Locale } from "date-fns";
import { enGB, uk } from "date-fns/locale";
import { useTranslation } from "next-i18next";

const LOCALES_OBJECT: Record<string, Locale> = {
  ua: uk,
  en: enGB,
};

interface IUseDateFormat {
  date: string;
  locale: string;
}

export const useDateFormat = ({ date, locale }: IUseDateFormat) => {
  const { t } = useTranslation("common");
  const formHour = format(new Date(date), "hh:mm");
  const form = format(new Date(date), " dd MMMM , HH:mm", {
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
