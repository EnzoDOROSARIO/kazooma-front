import { v4 } from "uuid";
import { AppThunk } from "../../../store/reduxStore.ts";
import { AddAiCommand, addAiSuccessAction } from "./actions.ts";

export const addAi =
  (payload: AddAiCommand): AppThunk<Promise<void>> =>
  async (dispatch, _, dependencies) => {
    await dependencies.aiGateway.add({ id: v4(), ...payload });
    dispatch(addAiSuccessAction({ id: v4(), ...payload }));
  };
