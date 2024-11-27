import { createAction } from "@reduxjs/toolkit";

export type AddAiCommand = {
  name: string;
  key: string;
  type: "OPEN_AI" | "ANTHROPIC";
};

export const addAiSuccessAction = createAction<AddAiCommand>("ADD_AI_SUCCESS");
