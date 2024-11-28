import { createReducer } from "@reduxjs/toolkit";
import { AppState } from "../appState.ts";
import { addApiKeyAction } from "../../hexagon/use-cases/add-api-key/actions.ts";
import { fetcApiKeysSuccessAction } from "../../hexagon/use-cases/fetch-api-keys/actions.ts";

const initialState: AppState["apiKeysFetching"] = {
  apiKeys: [],
  loading: true,
};

export const apiKeysFetchingReducer = createReducer(initialState, (builder) => {
  builder.addCase(addApiKeyAction, (state, action) => {
    state.apiKeys = [...state.apiKeys, action.payload];
  });
  builder.addCase(fetcApiKeysSuccessAction, (state, action) => {
    state.apiKeys = action.payload;
  });
});
