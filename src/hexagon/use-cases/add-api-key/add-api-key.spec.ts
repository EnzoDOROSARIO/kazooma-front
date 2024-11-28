import { describe, expect, test, vi } from "vitest";
import { initReduxStore, ReduxStore } from "../../../store/reduxStore.ts";
import { fakeApiKeyGateway } from "../../../adapters/secondary/fake-api-key-gateway.ts";
import { addApiKey } from "./add-api-key.ts";

vi.mock("uuid", () => ({
  v4: () => "111",
}));

describe("Feature: Add api key", () => {
  test("Scenario: it should add a new api key correctly", async () => {
    const apiKeyGateway = new fakeApiKeyGateway();
    const testApiKey = {
      name: "my api key",
      key: "my-key",
      type: "OPEN_AI" as const,
    };

    const store: ReduxStore = initReduxStore({
      apiKeyGateway,
    });
    const exec = store.dispatch(addApiKey(testApiKey));

    const expectedApiKey = {
      id: "111",
      name: "my api key",
      key: "my-key",
      type: "OPEN_AI",
    };
    expect(store.getState()).toEqual({
      apiKeysFetching: expect.objectContaining({
        apiKeys: [expectedApiKey],
      }),
    });
    await exec;
    expect(apiKeyGateway.lastAddedApiKey).toEqual(expectedApiKey);
  });
});
