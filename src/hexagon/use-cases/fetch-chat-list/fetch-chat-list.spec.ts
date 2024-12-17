import { beforeEach, describe, expect, test } from "vitest";
import { initReduxStore, ReduxStore } from "../../../store/reduxStore";
import { FakeChatGateway } from "../../../adapters/secondary/fake/fake-chat-gateway";
import { fetchChatList } from "./fetch-chat-list";

describe("Feature: Fetch chat list", () => {
  let store: ReduxStore;
  let chatGateway: FakeChatGateway;

  const remoteChats = [
    {
      id: "111",
      title: "test chat",
    },
  ];

  beforeEach(() => {
    chatGateway = new FakeChatGateway(remoteChats);
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

  describe("Scenario: it should fetch the chat list correctly", () => {
    test("the chat list should be fetched", async () => {
      await store.dispatch(fetchChatList());
      expect(store.getState()).toEqual(
        expect.objectContaining({
          chatList: {
            chats: remoteChats,
          },
        }),
      );
    });
  });
});
