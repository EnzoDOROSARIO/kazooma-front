import { describe, test, expect } from "vitest";
import { initReduxStore, ReduxStore } from "../../../store/reduxStore.ts";
import { AppState } from "../../../store/appState.ts";
import { removeApiKey } from "./remove-api-key.ts";

describe("Feature: Remove api key", () => {
  test("Scenario: it should remove an api key correctly", async () => {
    const initialState: Partial<AppState> = {
      apiKeysFetching: {
        loading: false,
        apiKeys: [
          { id: "111", name: "my api key", key: "my-key", type: "OPEN_AI" },
        ],
      },
    };

    const store: ReduxStore = initReduxStore({}, initialState);
    await store.dispatch(removeApiKey());

    expect(store.getState()).toEqual({
      apiKeysFetching: expect.objectContaining({
        apiKeys: [],
      }),
    });
  });
});
