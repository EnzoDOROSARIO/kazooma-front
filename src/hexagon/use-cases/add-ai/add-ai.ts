import { v4 } from "uuid";
import { AppThunk } from "../../../store/reduxStore.ts";
import { AddAiCommand, addAiAction } from "./actions.ts";

export const addAi =
  (payload: AddAiCommand): AppThunk<Promise<void>> =>
  async (dispatch, _, dependencies) => {
    dispatch(addAiAction({ id: v4(), ...payload }));
    await dependencies.aiGateway.add({ id: v4(), ...payload });
  };
