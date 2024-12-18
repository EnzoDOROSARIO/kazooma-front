import { nanoid } from "nanoid";
import { AppThunk } from "../../../store/reduxStore.ts";
import { AddApiKeyCommand, addApiKeyAction } from "./actions.ts";

export const addApiKey =
  (payload: AddApiKeyCommand): AppThunk<Promise<void>> =>
  async (dispatch, _, dependencies) => {
    const apiKey = { id: nanoid(), ...payload };
    dispatch(addApiKeyAction(apiKey));
    await dependencies.apiKeyGateway.add(apiKey);
  };
