import { nanoid } from "nanoid";
import { AppThunk } from "../../../store/reduxStore";
import { newChatCreatedAction } from "./actions";

export const createNewChat =
  (): AppThunk<Promise<void>> =>
  async (dispatch, _, { chatListGateway: chatGateway }) => {
    const chat = { title: "Nouvelle conversation", id: nanoid() };
    await chatGateway.create(chat);
    dispatch(newChatCreatedAction(chat));
  };
