export type AppState = {
  apiKeysFetching: {
    apiKeys: ApiKey[];
    loading: boolean;
  };
};

export type ApiKey = {
  id: string;
  name: string;
  key: string;
  type: "OPEN_AI" | "ANTHROPIC";
};
