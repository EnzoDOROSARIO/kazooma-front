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

export interface Dependencies {
  apiKeyGateway: ApiKeyGateway;
}

export const initReduxStore = (dependencies: Partial<Dependencies>) =>
  configureStore({
    reducer: {
      apiKeysFetching: apiKeysFetchingReducer,
    },
    devTools: true,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: dependencies,
        },
      }),
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
