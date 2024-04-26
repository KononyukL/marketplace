import { type IAdvertisementDetails } from "@/shared/api/advertisement/types";
import { Tabs } from "@/shared/ui/tabs/ui";
import { Tab } from "@/shared/ui/tabs/ui/tab";
import { CharacteristicsTab } from "./characteristics-tab";
import { DocsandVaccinesTab } from "./docs-and-vaccines-tab";

export const AnnouncementMainInfo = ({
  advertisement,
}: {
  advertisement: IAdvertisementDetails;
}) => {
  const {
    attributes,
    additional_information,
    favorite_attributes,
    vaccines,
    documents,
    description,
  } = advertisement;

  return (
    <div className="mt-8 rounded-lg bg-white p-8">
      <Tabs>
        <Tab title="Характеристики">
          <CharacteristicsTab
            attributes={attributes}
            favoriteAttributes={favorite_attributes}
          />
        </Tab>
        <Tab title="Опис">{description}</Tab>
        <Tab title="Додаткова інформація">{additional_information}</Tab>
        <Tab title="Документи та вакцини">
          <DocsandVaccinesTab documents={documents} vaccines={vaccines} />
        </Tab>
      </Tabs>
    </div>
  );
};
