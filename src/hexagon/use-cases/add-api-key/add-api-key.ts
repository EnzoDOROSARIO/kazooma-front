import { v4 } from "uuid";
import { AppThunk } from "../../../store/reduxStore.ts";
import { AddApiKeyCommand, addApiKeyAction } from "./actions.ts";

export const addApiKey =
  (payload: AddApiKeyCommand): AppThunk<Promise<void>> =>
  async (dispatch, _, dependencies) => {
    dispatch(addApiKeyAction({ id: v4(), ...payload }));
    await dependencies.apiKeyGateway.add({ id: v4(), ...payload });
  };
