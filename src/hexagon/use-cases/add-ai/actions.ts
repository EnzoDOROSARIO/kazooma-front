import { createAction } from "@reduxjs/toolkit";
import { Ai } from "../../../store/appState.ts";

export type AddAiCommand = {
  name: string;
  key: string;
  type: "OPEN_AI" | "ANTHROPIC";
};

export const addAiSuccessAction = createAction<Ai>("ADD_AI_SUCCESS");
