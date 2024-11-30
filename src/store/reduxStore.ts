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
import { InMemoryApiKeyGateway } from "../adapters/secondary/in-memory/in-memory-api-key-gateway.ts";
import { LocalApiKeyGateway } from "../adapters/secondary/local/local-api-key-gateway.ts";

export interface Dependencies {
  apiKeyGateway: ApiKeyGateway;
}

export const initReduxStore = (
  dependencies: Partial<Dependencies>,
  initialState?: Partial<AppState>,
) =>
  configureStore({
    reducer: {
      apiKeysFetching: apiKeysFetchingReducer,
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

export const initInMemoryReduxStore = () =>
  initReduxStore({ apiKeyGateway: new InMemoryApiKeyGateway() });

export const initLocalReduxStore = () =>
  initReduxStore({ apiKeyGateway: new LocalApiKeyGateway() });

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
