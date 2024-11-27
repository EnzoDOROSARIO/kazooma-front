import { describe, expect, test, vi } from "vitest";
import { initReduxStore, ReduxStore } from "../../../store/reduxStore.ts";
import { FakeAiGateway } from "../../../adapters/secondary/fake-ai-gateway.ts";
import { addAi } from "./add-ai.ts";

vi.mock("uuid", () => ({
  v4: () => "111",
}));

describe("Feature: Add ai", () => {
  test("Scenario: it should add a new ai correctly", async () => {
    const fakeAiGateway = new FakeAiGateway();
    const store: ReduxStore = initReduxStore({
      aiGateway: fakeAiGateway,
    });
    const testAi = {
      name: "my ai",
      key: "my-key",
      type: "OPEN_AI" as const,
    };
    await store.dispatch(addAi(testAi));

    const expectedAi = {
      id: "111",
      name: "my ai",
      key: "my-key",
      type: "OPEN_AI",
    };
    expect(fakeAiGateway.latestAddedAi).toEqual(expectedAi);
    expect(store.getState()).toEqual({
      aisFetching: expect.objectContaining({
        ais: [expectedAi],
      }),
    });
  });
});
