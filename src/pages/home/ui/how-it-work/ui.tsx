import { dataWork } from "@/pages/home/ui/how-it-work/data-work";
import { useTranslation } from "next-i18next";

export const HowItWork = () => {
  const { t } = useTranslation("home");

  return (
    <div className="m-auto mb-32 max-w-main px-14 text-black">
      <h2 className="mb-12 text-4xl font-medium">Як це працює?</h2>
      <div className=" flex justify-between gap-2">
        {dataWork.map((el) => (
          <div
            key={el.id}
            className="border-gray-4 flex w-full max-w-how-it-work flex-col rounded-lg border border-solid bg-white px-6 py-8"
          >
            <div className="bg-teal-0 mb-4 flex w-8 justify-center rounded px-4 py-1 text-white">
              {el.id}
            </div>
            <h3 className="mb-2 text-xl font-medium">{t(el.title)}</h3>
            <p className="max-w-how-it-work-text">{t(el.text)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
