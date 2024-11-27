import { createReducer } from "@reduxjs/toolkit";
import { AppState } from "../appState.ts";
import { addAiSuccessAction } from "../../hexagon/use-cases/add-ai/actions.ts";

const initialState: AppState["aisFetching"] = {
  ais: [],
};

export const aisFetchingReducer = createReducer(initialState, (builder) => {
  builder.addCase(addAiSuccessAction, (state, action) => {
    state.ais = [...state.ais, action.payload];
  });
});
