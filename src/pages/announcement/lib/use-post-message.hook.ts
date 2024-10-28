import { useMutation } from "react-query";
import type { AxiosError } from "axios";
import SendMessageService from "@/shared/api/message";
import type { ISendMessageResponse } from "@/shared/api/message/types";

export function usePostMessage() {
  return useMutation<ISendMessageResponse, AxiosError, {text: string; recipientId: number}>(
    async ({text, recipientId }) => {
      if (!text) throw new Error("Text cannot be empty");

      const response = await SendMessageService.postMessage(text, recipientId );

      if (!response) {
        throw new Error("Invalid response from server");
      }

      return response;
    },
    {
      onError: (error) => {
        console.error("Error sending message:", error);
      },
    }
  );
}

