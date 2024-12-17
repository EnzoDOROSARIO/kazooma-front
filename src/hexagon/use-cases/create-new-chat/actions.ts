import { createAction } from "@reduxjs/toolkit";
import { ChatListItem } from "../../models/chat";

export const newChatCreatedAction =
  createAction<ChatListItem>("NEW_CHAT_CREATED");
