import { createAction } from "@reduxjs/toolkit";
import { Ai } from "../../../store/appState.ts";

export type AddAiCommand = {
  name: string;
  key: string;
  type: "OPEN_AI" | "ANTHROPIC";
};

export const addAiAction = createAction<Ai>("ADD_AI_SUCCESS");
