import { describe, test, expect } from "vitest";
import { initReduxStore, ReduxStore } from "../../../store/reduxStore.ts";
import { fakeApiKeyGateway } from "../../../adapters/secondary/fake-api-key-gateway.ts";
import { ApiKey } from "../../../store/appState.ts";
import { fetchApiKeys } from "./fetch-api-keys.ts";

describe("Feature: Fetch api keys", () => {
  test("Scenario: it should fetch api keys correctly", async () => {
    const remoteApiKeys: ApiKey[] = [
      {
        id: "111",
        name: "my api key",
        key: "my-key",
        type: "OPEN_AI",
      },
    ];
    const apiKeyGateway = new fakeApiKeyGateway(remoteApiKeys);

    const store: ReduxStore = initReduxStore({
      apiKeyGateway,
    });
    await store.dispatch(fetchApiKeys());

    expect(store.getState()).toEqual({
      apiKeysFetching: expect.objectContaining({
        apiKeys: remoteApiKeys,
      }),
    });
  });
});
