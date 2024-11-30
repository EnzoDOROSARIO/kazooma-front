import { AppThunk } from "../../../store/reduxStore.ts";
import { removeApiKeyAction } from "./actions.ts";

export const removeApiKey =
  (payload: string): AppThunk<Promise<void>> =>
  async (dispatch, _, dependencies) => {
    dispatch(removeApiKeyAction(payload));
    await dependencies.apiKeyGateway.remove(payload);
  };
