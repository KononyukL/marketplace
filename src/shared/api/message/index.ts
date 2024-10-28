import { type ISendMessageResponse } from "./types";
import { paths } from "@/shared/routing";
import { axiosInstance } from "../config";

class SendMessageActions {
  async postMessage(text: string, recipientId: number): Promise<ISendMessageResponse> {
    const result = await axiosInstance.post<ISendMessageResponse>(
      paths.sendMessageSeller.message,
      { text, recipientId }
    );
    return result.data;
  }
}

const SendMessageService = new SendMessageActions();
export default SendMessageService;