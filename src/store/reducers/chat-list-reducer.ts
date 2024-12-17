import { createReducer } from "@reduxjs/toolkit";
import { AppState } from "../appState";
import { newChatCreatedAction } from "../../hexagon/use-cases/create-new-chat/actions";
import { chatListFetchedAction } from "../../hexagon/use-cases/fetch-chat-list/actions";

const initialState: AppState["chatList"] = {
  chats: [],
};

export const chatListReducer = createReducer(initialState, (builder) => {
  builder.addCase(chatListFetchedAction, (state, action) => {
    state.chats = [...action.payload];
  });
  builder.addCase(newChatCreatedAction, (state, action) => {
    state.chats = [...state.chats, action.payload];
  });
});
