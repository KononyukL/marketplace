/* eslint-disable @typescript-eslint/no-unsafe-call */
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Link from "next/link";

import { Button } from "@/shared/ui";
import { Modal } from "@/shared/ui/modal";
import { usePostMessage } from "../lib/use-post-message.hook";

interface IModalContactSeller {
  closeModal: () => void;
  isOpen: boolean;
  title: string;
  userName: string;
}

export const AnnouncementModalContactSeller = ({
  isOpen,
  closeModal,
  title,
  userName,
}: React.PropsWithChildren<IModalContactSeller>) => {
  const { t } = useTranslation("announcement");

  const [textareaValue, setTextareaValue] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [recipientId, ] = useState<number | null>(1);

  const postMessageMutation = usePostMessage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (!textareaValue || recipientId === null) {
      setLoading(false);
      setError("Text cannot be empty");
      return;
    }
    
    postMessageMutation.mutate({ text: textareaValue, recipientId }, {
      onSuccess: () => {
        setIsModalOpen(true);
        setTextareaValue("");
      },
      onError: (err) => {
        setError(
          err instanceof Error && typeof err.message === "string"
            ? err.message
            : "An unexpected error occurred",
        );
      },
      onSettled: () => {
        setLoading(false);
      },
    });
  };

  return (
    <>
      <Modal
        show={isOpen}
        onClose={closeModal}
        title={title}
        userName={userName}
      >
        <div className="mb-6 w-full">
          <p className="whitespace-pre-wrap text-text">
            {t("modal-to-contact.text-one")}
          </p>
          <p className="whitespace-pre-wrap text-text">
            {t("modal-to-contact.text-two")}
          </p>
        </div>
        <form className="mb-6" name="message" onSubmit={handleSubmit}>
          <label
            htmlFor="message"
            className="hidden text-sm font-medium text-gray-700"
          >
            {t("modal-to-contact.label-text")}
          </label>
          <textarea
            className="mb-8 block min-h-textarea w-full resize-none rounded border border-input p-4 text-text	"
            id="message"
            form="message"
            name="message"
            placeholder={t("modal-to-contact.textarea-placeholder")}
            defaultValue={textareaValue}
            required={true}
            onChange={(e) => setTextareaValue(e.target.value)}
          />
          {error && <p className="text-red-500">{error}</p>}
          <Button
            size="sm"
            variant={textareaValue === "" ? "disabled" : "primary"}
            type="submit"
          >
            {loading ? t("modal-to-contact.button-sending") : t("modal-to-contact.button-name")}
          </Button>
        </form>
      </Modal>

      <Modal
        show={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={t("modal-to-contact.title-success")}
      >
        <div className="mb-6 w-full">
          <p className="whitespace-pre-wrap text-text">
            {t("modal-to-contact.text-success")}
          </p>
        </div>
        <Link
          className="block w-full max-w-button-2 cursor-pointer rounded-lg bg-primary py-3 text-center font-bold text-white transition-all hover:bg-primary-hover"
          href="sm"
        >
          {t("modal-to-contact.button-success")}
        </Link>
      </Modal>
    </>
  );
};
