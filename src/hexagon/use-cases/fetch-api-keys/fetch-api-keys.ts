import { AppThunk } from "../../../store/reduxStore.ts";
import {
  fetchApiKeysPendingAction,
  fetchApiKeysSuccessAction,
} from "./actions.ts";

export const fetchApiKeys =
  (): AppThunk<Promise<void>> => async (dispatch, _, dependencies) => {
    dispatch(fetchApiKeysPendingAction());
    const apiKeys = await dependencies.apiKeyGateway.fetchApiKeys();
    dispatch(fetchApiKeysSuccessAction(apiKeys));
  };
