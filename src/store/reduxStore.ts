import {
  configureStore,
  Store,
  ThunkAction,
  ThunkDispatch,
  UnknownAction,
} from "@reduxjs/toolkit";
import { aisFetchingReducer } from "./reducers/ais-fetching-reducer.ts";
import { AppState } from "./appState.ts";

export const initReduxStore = () =>
  configureStore({
    reducer: {
      aisFetching: aisFetchingReducer,
    },
    devTools: true,
  });

export type ReduxStore = Store<AppState> & {
  dispatch: ThunkDispatch<AppState, unknown, UnknownAction>;
};

export type AppThunk<T = void> = ThunkAction<
  T,
  AppState,
  unknown,
  UnknownAction
>;
