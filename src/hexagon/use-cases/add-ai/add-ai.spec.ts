import { describe, expect, test } from "vitest";
import { initReduxStore, ReduxStore } from "../../../store/reduxStore.ts";
import { addAi } from "./add-ai.ts";

describe("Feature: Add ai", () => {
  test("Scenario: it should add a new ai correctly", async () => {
    const store: ReduxStore = initReduxStore();
    const testAi = {
      name: "my ai",
      key: "my-key",
      type: "OPEN_AI" as const,
    };
    await store.dispatch(addAi(testAi));
    expect(store.getState()).toEqual({
      aisFetching: expect.objectContaining({
        ais: [{ name: "my ai", key: "my-key", type: "OPEN_AI" }],
      }),
    });
  });
});
