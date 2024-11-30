import { ApiKey } from "../../../store/appState.ts";
import { ApiKeyGateway } from "../../../hexagon/ports/api-key-gateway.ts";
import * as localforage from "localforage";

export class LocalApiKeyGateway implements ApiKeyGateway {
  async add(apiKey: ApiKey): Promise<void> {
    const apiKeys: ApiKey[] | null = await localforage.getItem("apiKeys");
    if (!apiKeys) {
      await localforage.setItem("apiKeys", [apiKey]);
      return;
    }
    await localforage.setItem("apiKeys", [...apiKeys, apiKey]);
  }

  async fetchApiKeys(): Promise<ApiKey[]> {
    const apiKeys: ApiKey[] | null = await localforage.getItem("apiKeys");
    if (!apiKeys) {
      return [];
    }
    return apiKeys;
  }

  async remove(id: ApiKey["id"]): Promise<void> {
    const apiKeys: ApiKey[] | null = await localforage.getItem("apiKeys");
    if (!apiKeys) {
      return;
    }
    await localforage.setItem(
      "apiKeys",
      apiKeys.filter((apiKey) => apiKey.id !== id),
    );
  }
}
