import { Ai } from "../../store/appState.ts";

export interface AiGateway {
  add(ai: Ai): Promise<void>;
}
