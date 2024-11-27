import { AppThunk } from "../../../store/reduxStore.ts";
import { AddAiCommand, addAiSuccessAction } from "./actions.ts";

export const addAi =
  (payload: AddAiCommand): AppThunk<Promise<void>> =>
  async (dispatch) => {
    dispatch(addAiSuccessAction(payload));
  };
