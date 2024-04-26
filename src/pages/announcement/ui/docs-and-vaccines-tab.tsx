import { Modal } from "@/shared/ui/modal/ui";
import { useState } from "react";
import { SliderComponent } from "@/shared/ui/slider";
import { Tabs } from "@/shared/ui/tabs/ui";
import { Tab } from "@/shared/ui/tabs/ui/tab";
import {
  type IDocuments,
  type IVaccines,
} from "@/shared/api/advertisement/types";

export const DocsandVaccinesTab = ({
  documents,
  vaccines,
}: {
  documents: IDocuments[];
  vaccines: IVaccines[];
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [docsAndVaccinesActiveTab, setDocsAndVaccinesActiveTab] = useState(0);

  function openModal(tabIndex: number) {
    setDocsAndVaccinesActiveTab(tabIndex);
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }
  return (
    <>
      <button
        onClick={() => openModal(0)}
        className="mb-6 block border-b border-[#444444] font-medium text-[#444444]"
      >
        Документи
      </button>
      <button
        onClick={() => openModal(1)}
        className="block border-b border-[#444444] font-medium text-[#444444]"
      >
        Вакцини
      </button>
      <Modal show={isModalOpen} onClose={closeModal}>
        <Tabs activeTab={docsAndVaccinesActiveTab}>
          <Tab title="Документи">
            <SliderComponent images={documents} />
          </Tab>
          <Tab title="Вакцини">
            <SliderComponent images={vaccines} />
          </Tab>
        </Tabs>
      </Modal>
    </>
  );
};
