import { AppState } from "../../../../store/appState.ts";

export const apiKeysSelector = (state: AppState) => state.apiKeysFetching;
