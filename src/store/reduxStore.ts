import { configureStore } from "@reduxjs/toolkit";
import { aisFetchingReducer } from "./reducers/ais-fetching-reducer.ts";

export const initReduxStore = () =>
  configureStore({
    reducer: {
      aisFetching: aisFetchingReducer,
    },
    devTools: true,
  });
