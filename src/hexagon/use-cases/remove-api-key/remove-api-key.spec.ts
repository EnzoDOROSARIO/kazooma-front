import { describe, test, expect } from "vitest";
import { initReduxStore, ReduxStore } from "../../../store/reduxStore.ts";
import { AppState } from "../../../store/appState.ts";
import { removeApiKey } from "./remove-api-key.ts";
import { FakeApiKeyGateway } from "../../../adapters/secondary/fake/fake-api-key-gateway.ts";
import { ApiKey } from "../../models/api-keys.ts";

describe("Feature: Remove api key", () => {
  test("Scenario: it should remove an api key correctly", async () => {
    const apiKeys: ApiKey[] = [
      { id: "111", name: "my api key", key: "my-key", type: "OPEN_AI" },
      { id: "222", name: "my api key 2", key: "my-key-2", type: "OPEN_AI" },
    ];
    const apiKeyGateway = new FakeApiKeyGateway(apiKeys);
    const initialState: Partial<AppState> = {
      apiKeysFetching: {
        apiKeys,
      },
    };

    const store: ReduxStore = initReduxStore(
      {
        apiKeyGateway,
      },
      initialState,
    );
    const exec = store.dispatch(removeApiKey("111"));
    expect(store.getState()).toEqual({
      apiKeysFetching: expect.objectContaining({
        apiKeys: [
          { id: "222", name: "my api key 2", key: "my-key-2", type: "OPEN_AI" },
        ],
      }),
    });

    await exec;
    expect(apiKeyGateway.lastRemovedApiKeyId).toEqual("111");
  });
});
