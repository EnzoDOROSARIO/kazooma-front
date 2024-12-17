import { describe, test, expect } from "vitest";
import { initReduxStore, ReduxStore } from "../../../store/reduxStore.ts";
import { FakeApiKeyGateway } from "../../../adapters/secondary/fake/fake-api-key-gateway.ts";
import { fetchApiKeys } from "./fetch-api-keys.ts";
import { ApiKey } from "../../models/api-keys.ts";

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
    const apiKeyGateway = new FakeApiKeyGateway(remoteApiKeys);
    const store: ReduxStore = initReduxStore({
      apiKeyGateway,
    });
    expect(store.getState()).toEqual({
      apiKeysFetching: {
        apiKeys: [],
      },
    });

    await store.dispatch(fetchApiKeys());

    expect(store.getState()).toEqual({
      apiKeysFetching: {
        apiKeys: remoteApiKeys,
      },
    });
  });
});
