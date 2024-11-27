import { createReducer } from "@reduxjs/toolkit";
import { AppState } from "../appState.ts";

const initialState: AppState["aisFetching"] = {
  ais: [],
};

export const aisFetchingReducer = createReducer(initialState, () => {});
