export const dateTimeFormat = (
  time: string,
  locale?: string,
  options: Intl.DateTimeFormatOptions = {
    month: "long",
    day: "numeric",
  },
) => {
  const date = new Date(time);
  const dtf = new Intl.DateTimeFormat(locale, options);
  return dtf.format(date);
};
