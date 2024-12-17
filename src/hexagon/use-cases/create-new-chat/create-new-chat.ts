import { nanoid } from "nanoid";
import { AppThunk } from "../../../store/reduxStore";
import { newChatCreatedAction } from "./actions";

export const createNewChat =
  (title: string): AppThunk<Promise<void>> =>
  async (dispatch, _, { chatListGateway: chatGateway }) => {
    const chat = { title, id: nanoid() };
    await chatGateway.create(chat);
    dispatch(newChatCreatedAction(chat));
  };
