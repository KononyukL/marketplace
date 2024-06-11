import Image from "next/image";
import { dataAdvantages } from "@/pages/home/ui/advantages/data-advantages";
import { useTranslation } from "next-i18next";

export const Advantages = () => {
  const { t } = useTranslation("home");
  return (
    <div className="m-auto max-w-main p-14 text-black">
      <h2 className="mb-12 text-4xl font-medium">{t("our-advantages")}</h2>
      <div className=" flex  justify-between gap-2">
        {dataAdvantages.map((el) => (
          <div
            key={el.id}
            className="flex w-full max-w-advantages flex-col  gap-4 rounded-lg border border-solid border-border-2 bg-white p-8"
          >
            <Image src={el.image} alt={el.title} width={44} height={44} />
            <h3 className="text-xl font-medium">{t(el.title)}</h3>
            <p className="max-w-advantages-text">{t(el.text)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
