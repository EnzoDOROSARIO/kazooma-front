import { ChatListItem } from "../models/chat";

export interface ChatListGateway {
  create(newChat: ChatListItem): Promise<void>;
  fetchChatList(): Promise<ChatListItem[]>;
}
