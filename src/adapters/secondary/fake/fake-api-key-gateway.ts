import { ApiKey } from "../../../hexagon/models/api-keys.ts";
import { ApiKeyGateway } from "../../../hexagon/ports/api-key-gateway.ts";

export class FakeApiKeyGateway implements ApiKeyGateway {
  lastAddedApiKey: ApiKey | null = null;
  lastRemovedApiKeyId?: ApiKey["id"] | null = null;

  constructor(public remoteApiKeys: ApiKey[] = []) {}

  async fetchApiKeys(): Promise<ApiKey[]> {
    return this.remoteApiKeys;
  }
  async add(apiKey: ApiKey): Promise<void> {
    this.lastAddedApiKey = apiKey;
  }
  async remove(id: ApiKey["id"]): Promise<void> {
    this.lastRemovedApiKeyId = id;
  }
}
