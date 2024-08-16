import { useTranslation } from "react-i18next";
import { teamInformationKeys } from "./team-information";
import Image from "next/image";

export const AboutUsComponent = () => {
  const { t } = useTranslation(["animalMarket"]);
  return (
    <>
      <div className="mb-12 text-center">
        <p className="pb-2">{t("about-us.title.title-one")}</p>
        <p>
          {t("about-us.title.title-two-a")}
          <span>
            <a
              href="https://teamchallenge.io"
              className="underline hover:text-primary-hover focus:text-primary"
            >
              Team Challenge,
            </a>
          </span>
          {t("about-us.title.title-two-b")}
        </p>
      </div>
      <ul className="grid grid-cols-3 gap-12">
        {teamInformationKeys.map(({ title, image, position, items }, i) => (
          <li key={i} className="h-[372px] bg-white p-6">
            <div className="h-[200px] max-w-[236px] rounded bg-border-auth">
              {!!image && (
                <Image src={image} alt={t(title)} width={236} height={200} />
              )}
            </div>
            <div className="mb-0.5 mt-3 flex flex-col leading-normal">
              <h3 className="mb-1 text-xl font-medium text-title">
                {position}
              </h3>
              <p className="mb-4 text-base font-normal text-secondary ">
                {t(title)}
              </p>
              <ul className="flex gap-2">
                {items?.map(({ link, icon }, i) => (
                  <li key={i}>
                    <a href={link}>
                      <Image
                        src={icon}
                        alt="social icon"
                        width={32}
                        height={32}
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};
