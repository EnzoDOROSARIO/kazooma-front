import {
  configureStore,
  Store,
  ThunkAction,
  ThunkDispatch,
  UnknownAction,
} from "@reduxjs/toolkit";
import { aisFetchingReducer } from "./reducers/ais-fetching-reducer.ts";
import { AppState } from "./appState.ts";
import { AiGateway } from "../hexagon/ports/ai-gateway.ts";

export interface Dependencies {
  aiGateway: AiGateway;
}

export const initReduxStore = (dependencies: Partial<Dependencies>) =>
  configureStore({
    reducer: {
      aisFetching: aisFetchingReducer,
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
