import { ApiKey } from "../../store/appState.ts";

export interface ApiKeyGateway {
  add(ai: ApiKey): Promise<void>;
  fetchApiKeys(): Promise<ApiKey[]>;
}
