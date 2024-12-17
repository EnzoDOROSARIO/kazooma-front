import { createAction } from "@reduxjs/toolkit";
import { ApiKey } from "../../models/api-keys";

export const fetchApiKeysSuccessAction = createAction<ApiKey[]>(
  "FETCH_API_KEYS_SUCCESS",
);
