import { ApiKey } from "../../../store/appState.ts";
import { ApiKeyGateway } from "../../../hexagon/ports/api-key-gateway.ts";

export class InMemoryApiKeyGateway implements ApiKeyGateway {
  apiKeys: ApiKey[] = [];

  async add(apiKey: ApiKey): Promise<void> {
    this.apiKeys = [...this.apiKeys, apiKey];
  }

  async fetchApiKeys(): Promise<ApiKey[]> {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return this.apiKeys;
  }

  async remove(id: ApiKey["id"]): Promise<void> {
    this.apiKeys = this.apiKeys.filter((apiKey) => apiKey.id !== id);
  }
}
