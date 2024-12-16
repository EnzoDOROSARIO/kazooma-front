import { createReducer } from "@reduxjs/toolkit";
import { AppState } from "../appState.ts";
import { addApiKeyAction } from "../../hexagon/use-cases/add-api-key/actions.ts";
import { fetchApiKeysSuccessAction } from "../../hexagon/use-cases/fetch-api-keys/actions.ts";
import { removeApiKeyAction } from "../../hexagon/use-cases/remove-api-key/actions.ts";

const initialState: AppState["apiKeysFetching"] = {
  apiKeys: [],
};

export const apiKeysFetchingReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addApiKeyAction, (state, action) => {
      state.apiKeys = [...state.apiKeys, action.payload];
    })
    .addCase(removeApiKeyAction, (state, action) => {
      state.apiKeys = state.apiKeys.filter(
        (apiKey) => apiKey.id !== action.payload,
      );
    })
    .addCase(fetchApiKeysSuccessAction, (state, action) => {
      state.apiKeys = action.payload;
    });
});
