import { Modal } from "@/shared/ui/modal/ui";
import { useState } from "react";
import { SliderComponent } from "@/shared/ui/slider";
import { Tabs } from "@/shared/ui/tabs/ui";
import { Tab } from "@/shared/ui/tabs/ui/tab";
import {
  type IDocuments,
  type IVaccines,
} from "@/shared/api/advertisement/types";
import { useTranslation } from "next-i18next";

export const DocsandVaccinesTab = ({
  documents,
  vaccines,
}: {
  documents: IDocuments[];
  vaccines: IVaccines[];
}) => {
  const { t } = useTranslation("announcement");

  const [isModalOpen, setIsModalOpen] = useState(false);

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }
  return (
    <>
      <button
        onClick={() => openModal()}
        className="border-text-secondary text-text-secondary mb-6 block border-b font-medium"
      >
        {t("main-info.docs-and-vaccines")}
      </button>
      <Modal
        show={isModalOpen}
        onClose={closeModal}
        title={t("main-info.docs-and-vaccines")}
      >
        <Tabs>
          <Tab title={t("main-info.documents")}>
            <SliderComponent images={documents} />
          </Tab>
          <Tab title={t("main-info.vaccines")}>
            <SliderComponent images={vaccines} />
          </Tab>
        </Tabs>
      </Modal>
    </>
  );
};
