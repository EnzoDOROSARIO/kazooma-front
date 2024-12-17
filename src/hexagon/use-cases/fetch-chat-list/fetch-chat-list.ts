import { AppThunk } from "../../../store/reduxStore.ts";
import { chatListFetchedAction } from "./actions.ts";

export const fetchChatList =
  (): AppThunk<Promise<void>> => async (dispatch, _, dependencies) => {
    const chats = await dependencies.chatListGateway.fetchChatList();
    dispatch(chatListFetchedAction(chats));
  };
