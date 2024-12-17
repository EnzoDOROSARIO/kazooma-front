import { ChatListItem } from "../../../hexagon/models/chat";
import { ChatListGateway } from "../../../hexagon/ports/chat-gateway";

export class FakeChatGateway implements ChatListGateway {
  readonly chats: Array<ChatListItem> = [];
  lastCreatedChat: ChatListItem | null = null;

  constructor(chats: Array<ChatListItem> = []) {
    this.chats = chats;
  }

  async create(newChat: ChatListItem): Promise<void> {
    this.lastCreatedChat = newChat;
  }

  async fetchChatList(): Promise<ChatListItem[]> {
    return this.chats;
  }
}
