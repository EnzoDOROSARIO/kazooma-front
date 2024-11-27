export type AppState = {
  aisFetching: {
    ais: Ai[];
  };
};

export type Ai = {
  id: string;
  name: string;
  key: string;
  type: "OPEN_AI" | "ANTHROPIC";
};
