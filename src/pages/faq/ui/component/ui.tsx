import { useTranslation } from "react-i18next";
import { data } from "./data";

import { Accordion } from "@/shared/ui/accordion";

export const FaqComponent = () => {
  const { t } = useTranslation(["support"]);

  return (
    <>
      <div className="px-support py-8 text-justify">
        <ol className="list-decimal pl-5 text-left text-base font-medium">
          {data.map((el, i) => (
            <li key={i} className="pb-4">
              <Accordion title={t(el.title)}>
                <p className="pr-4 text-base font-normal leading-6">
                  {t(el.list)}
                </p>
              </Accordion>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
};
