import { describe, expect, test } from "vitest";
import { initReduxStore } from "../../../store/reduxStore.ts";

describe("Feature: Add ai", () => {
  test("Scenario: it should add a new ai correctly", () => {
    const store = initReduxStore();
    expect(store.getState()).toEqual({
      aisFetching: expect.objectContaining({
        ais: [],
      }),
    });
  });
});
