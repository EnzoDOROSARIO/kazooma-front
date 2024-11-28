import { AppThunk } from "../../../store/reduxStore.ts";
import { fetcApiKeysSuccessAction } from "./actions.ts";

export const fetchApiKeys =
  (): AppThunk<Promise<void>> => async (dispatch, _, dependencies) => {
    const apiKeys = await dependencies.apiKeyGateway.fetchApiKeys();
    dispatch(fetcApiKeysSuccessAction(apiKeys));
  };
