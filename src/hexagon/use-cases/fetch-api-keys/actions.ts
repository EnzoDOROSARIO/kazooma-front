import { createAction } from "@reduxjs/toolkit";
import { ApiKey } from "../../../store/appState.ts";

export const fetchApiKeysPendingAction = createAction("FETCH_API_KEYS_PENDING");
export const fetchApiKeysSuccessAction = createAction<ApiKey[]>(
  "FETCH_API_KEYS_SUCCESS",
);
