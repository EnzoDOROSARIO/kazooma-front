export type AppState = {
  apiKeysFetching: {
    apiKeys: ApiKey[];
  };
};

export type ApiKey = {
  id: string;
  name: string;
  key: string;
  type: "OPEN_AI" | "ANTHROPIC";
};
