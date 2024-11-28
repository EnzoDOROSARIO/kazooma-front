import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./adapters/primary/react/views/Home";
import { Layout } from "./adapters/primary/react/Layout.tsx";
import ApiKeys from "./adapters/primary/react/views/ApiKeys";
import { Provider } from "react-redux";
import { initReduxStore } from "./store/reduxStore.ts";
import { InMemoryApiKeyGateway } from "./adapters/secondary/in-memory/in-memory-api-key-gateway.ts";

function App() {
  const store = initReduxStore({ apiKeyGateway: new InMemoryApiKeyGateway() });

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/keys" element={<ApiKeys />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
