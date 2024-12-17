import localforage from "localforage";
import { ChatListItem } from "../../../hexagon/models/chat";
import { ChatListGateway } from "../../../hexagon/ports/chat-gateway";

export class LocalChatListGateway implements ChatListGateway {
  async create(newChat: ChatListItem): Promise<void> {
    const chatList: ChatListItem[] | null =
      await localforage.getItem("chatList");
    if (!chatList) {
      await localforage.setItem("chatList", [newChat]);
      return;
    }
    await localforage.setItem("chatList", [...chatList, newChat]);
  }

  async fetchChatList(): Promise<ChatListItem[]> {
    const chatList: ChatListItem[] | null =
      await localforage.getItem("chatList");
    if (!chatList) {
      return [];
    }
    return chatList;
  }
}
