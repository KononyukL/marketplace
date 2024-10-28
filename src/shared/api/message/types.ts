export interface ISendMessageResponse {
  "id": number,
  "text": string,
  "status": string,
  "created": string,
  "updated": string,
  "sender": boolean,
  "edited": boolean,
  "authorId": number,
  "recipientId": number
}