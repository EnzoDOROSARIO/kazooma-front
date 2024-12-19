import { beforeEach, describe, expect, test, vi } from "vitest";
import { initReduxStore, ReduxStore } from "../../../store/reduxStore";
import { createNewChat } from "./create-new-chat";
import { FakeChatGateway } from "../../../adapters/secondary/fake/fake-chat-gateway";

vi.mock("nanoid", () => ({
  nanoid: () => "111",
}));

describe("Feature: Create new chat", () => {
  let store: ReduxStore;
  let chatGateway: FakeChatGateway;

  beforeEach(() => {
    chatGateway = new FakeChatGateway();
    store = initReduxStore({
      chatListGateway: chatGateway,
    });
  });

  test("the chat list should be empty", async () => {
    expect(store.getState()).toEqual(
      expect.objectContaining({
        chatList: {
          chats: [],
        },
      }),
    );
  });

  describe("Scenario: a chat is created", () => {
    beforeEach(async () => {
      await store.dispatch(createNewChat());
    });

    test("the chat list should contain the new chat", async () => {
      expect(store.getState()).toEqual(
        expect.objectContaining({
          chatList: {
            chats: [
              {
                id: "111",
                title: "Nouvelle conversation",
              },
            ],
          },
        }),
      );
    });
    test("the chat should be sended to the gateway", async () => {
      expect(chatGateway.lastCreatedChat).toEqual({
        id: "111",
        title: "Nouvelle conversation",
      });
    });
  });
});
