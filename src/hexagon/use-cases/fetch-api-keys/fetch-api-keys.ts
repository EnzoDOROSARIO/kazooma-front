import { AppThunk } from "../../../store/reduxStore.ts";
import {
  fetcApiKeysPendingAction,
  fetcApiKeysSuccessAction,
} from "./actions.ts";

export const fetchApiKeys =
  (): AppThunk<Promise<void>> => async (dispatch, _, dependencies) => {
    dispatch(fetcApiKeysPendingAction());
    const apiKeys = await dependencies.apiKeyGateway.fetchApiKeys();
    dispatch(fetcApiKeysSuccessAction(apiKeys));
  };
