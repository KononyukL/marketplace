import { type IAdvertisementDetails } from "@/shared/api/advertisement/types";
import { Tabs } from "@/shared/ui/tabs/ui";
import { Tab } from "@/shared/ui/tabs/ui/tab";
import { CharacteristicsTab } from "./characteristics-tab";
import { DocsandVaccinesTab } from "./docs-and-vaccines-tab";
import { useTranslation } from "next-i18next";

export const EMPTY_FIELD = "—";

export const AnnouncementMainInfo = ({
  advertisement,
}: {
  advertisement: IAdvertisementDetails;
}) => {
  const { t } = useTranslation("announcement");

  const {
    attributes,
    additional_information,
    favorite_attributes,
    vaccines,
    documents,
    description,
  } = advertisement;

  const characteristics =
    attributes.length === 0 && favorite_attributes.length === 0 ? (
      EMPTY_FIELD
    ) : (
      <CharacteristicsTab
        attributes={attributes}
        favoriteAttributes={favorite_attributes}
      />
    );

  const descriptionDetails =
    description === "" || description === null ? EMPTY_FIELD : description;

  const additionalInfo =
    additional_information === null || additional_information === ""
      ? EMPTY_FIELD
      : additional_information;

  return (
    <div className="mt-8 h-[334px] rounded-lg bg-white p-8">
      <Tabs>
        <Tab title={t("main-info.characteristics")}>{characteristics}</Tab>
        <Tab title={t("main-info.description")}>{descriptionDetails}</Tab>
        <Tab title={t("main-info.additional-info")}>{additionalInfo}</Tab>
        <Tab title={t("main-info.docs-and-vaccines")}>
          <DocsandVaccinesTab documents={documents} vaccines={vaccines} />
        </Tab>
      </Tabs>
    </div>
  );
};
