import { ApiKey } from "../hexagon/models/api-keys";
import { ChatListItem } from "../hexagon/models/chat";

export type AppState = {
  apiKeysFetching: {
    apiKeys: ApiKey[];
  };
  chatList: {
    chats: ChatListItem[];
  };
};
