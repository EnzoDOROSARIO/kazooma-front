import { createAction } from "@reduxjs/toolkit";
import { ChatListItem } from "../../models/chat";

export const chatListFetchedAction =
  createAction<ChatListItem[]>("CHAT_LIST_FETCHED");
