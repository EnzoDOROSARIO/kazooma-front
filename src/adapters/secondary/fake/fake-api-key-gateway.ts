import { ApiKey } from "../../../store/appState.ts";
import { ApiKeyGateway } from "../../../hexagon/ports/api-key-gateway.ts";

export class FakeApiKeyGateway implements ApiKeyGateway {
  lastAddedApiKey: ApiKey | null = null;

  constructor(public remoteApiKeys: ApiKey[] = []) {}

  async add(apiKey: ApiKey): Promise<void> {
    this.lastAddedApiKey = apiKey;
  }
  async fetchApiKeys(): Promise<ApiKey[]> {
    return this.remoteApiKeys;
  }
}
