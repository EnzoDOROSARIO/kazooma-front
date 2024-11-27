export type AppState = {
  aisFetching: {
    ais: Array<{
      name: string;
      key: string;
      type: "OPEN_AI" | "ANTHROPIC";
    }>;
  };
};
