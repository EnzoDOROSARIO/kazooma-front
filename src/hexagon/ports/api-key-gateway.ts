import { ApiKey } from "../models/api-keys";

export interface ApiKeyGateway {
  fetchApiKeys(): Promise<ApiKey[]>;
  add(apiKey: ApiKey): Promise<void>;
  remove(id: ApiKey["id"]): Promise<void>;
}
