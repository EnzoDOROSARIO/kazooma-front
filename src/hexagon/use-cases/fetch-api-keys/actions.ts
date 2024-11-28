import { createAction } from "@reduxjs/toolkit";
import { ApiKey } from "../../../store/appState.ts";

export const fetcApiKeysSuccessAction = createAction<ApiKey[]>(
  "FETCH_API_KEYS_SUCCESS",
);
