import {
  configureStore,
  Store,
  ThunkAction,
  ThunkDispatch,
  UnknownAction,
} from "@reduxjs/toolkit";
import { apiKeysFetchingReducer } from "./reducers/api-keys-fetching-reducer.ts";
import { AppState } from "./appState.ts";
import { ApiKeyGateway } from "../hexagon/ports/api-key-gateway.ts";
import { useDispatch } from "react-redux";
import { chatListReducer } from "./reducers/chat-list-reducer.ts";
import { ChatListGateway } from "../hexagon/ports/chat-gateway.ts";
import { LocalApiKeyGateway } from "../adapters/secondary/local/local-api-key-gateway.ts";
import { LocalChatListGateway } from "../adapters/secondary/local/local-chat-list-gateway.ts";

export interface Dependencies {
  apiKeyGateway: ApiKeyGateway;
  chatListGateway: ChatListGateway;
}

export const initReduxStore = (
  dependencies: Partial<Dependencies>,
  initialState?: Partial<AppState>,
) =>
  configureStore({
    reducer: {
      apiKeysFetching: apiKeysFetchingReducer,
      chatList: chatListReducer,
    },
    preloadedState: initialState,
    devTools: true,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: dependencies,
        },
      }),
  });

export const initLocalReduxStore = () =>
  initReduxStore({
    apiKeyGateway: new LocalApiKeyGateway(),
    chatListGateway: new LocalChatListGateway(),
  });

export type ReduxStore = Store<AppState> & {
  dispatch: ThunkDispatch<AppState, Dependencies, UnknownAction>;
};

export type AppThunk<T = void> = ThunkAction<
  T,
  AppState,
  Dependencies,
  UnknownAction
>;
export type AppDispatch = ThunkDispatch<AppState, Dependencies, UnknownAction>;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>(); // Export a hook that can be reused to resolve types
