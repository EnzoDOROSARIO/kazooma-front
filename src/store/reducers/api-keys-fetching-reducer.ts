import { createReducer } from "@reduxjs/toolkit";
import { AppState } from "../appState.ts";
import { addApiKeyAction } from "../../hexagon/use-cases/add-api-key/actions.ts";

const initialState: AppState["apiKeysFetching"] = {
  apiKeys: [],
};

export const apiKeysFetchingReducer = createReducer(initialState, (builder) => {
  builder.addCase(addApiKeyAction, (state, action) => {
    state.apiKeys = [...state.apiKeys, action.payload];
  });
});
