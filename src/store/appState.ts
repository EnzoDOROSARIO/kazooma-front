import { ApiKey } from "../hexagon/models/api-keys";

export type AppState = {
  apiKeysFetching: {
    apiKeys: ApiKey[];
  };
};
