import { createAction } from "@reduxjs/toolkit";
import { ApiKey } from "../../../store/appState.ts";

export type AddApiKeyCommand = {
  name: string;
  key: string;
  type: "OPEN_AI" | "ANTHROPIC";
};

export const addApiKeyAction = createAction<ApiKey>("ADD_API_KEY_SUCCESS");
