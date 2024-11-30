import { AppThunk } from "../../../store/reduxStore.ts";
import { removeApiKeyAction } from "./actions.ts";

export const removeApiKey = (): AppThunk<Promise<void>> => async (dispatch) => {
  dispatch(removeApiKeyAction());
};