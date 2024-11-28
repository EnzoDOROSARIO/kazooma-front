import { ApiKey } from "../../../store/appState.ts";
import { ApiKeyGateway } from "../../../hexagon/ports/api-key-gateway.ts";

export class InMemoryApiKeyGateway implements ApiKeyGateway {
  apiKeys: ApiKey[] = [];

  async add(apiKey: ApiKey): Promise<void> {
    this.apiKeys = [...this.apiKeys, apiKey];
  }

  async fetchApiKeys(): Promise<ApiKey[]> {
    return this.apiKeys;
  }
}
