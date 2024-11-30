import { AppThunk } from "../../../store/reduxStore.ts";
import { removeApiKeyAction } from "./actions.ts";

export const removeApiKey =
  (payload: string): AppThunk<Promise<void>> =>
  async (dispatch) => {
    dispatch(removeApiKeyAction(payload));
  };
