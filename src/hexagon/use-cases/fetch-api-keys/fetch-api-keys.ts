import { AppThunk } from "../../../store/reduxStore.ts";
import { fetchApiKeysSuccessAction } from "./actions.ts";

export const fetchApiKeys =
  (): AppThunk<Promise<void>> => async (dispatch, _, dependencies) => {
    const apiKeys = await dependencies.apiKeyGateway.fetchApiKeys();
    dispatch(fetchApiKeysSuccessAction(apiKeys));
  };
