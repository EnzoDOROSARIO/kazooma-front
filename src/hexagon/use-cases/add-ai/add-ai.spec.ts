import { describe, expect, test, vi } from "vitest";
import { initReduxStore, ReduxStore } from "../../../store/reduxStore.ts";
import { addAi } from "./add-ai.ts";

vi.mock("uuid", () => ({
  v4: () => "111",
}));

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
        ais: [{ id: "111", name: "my ai", key: "my-key", type: "OPEN_AI" }],
      }),
    });
  });
});
