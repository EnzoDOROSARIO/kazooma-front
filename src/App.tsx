import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./adapters/primary/react/views/Home";
import { Layout } from "./adapters/primary/react/Layout.tsx";
import ApiKeys from "./adapters/primary/react/views/ApiKeys";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/keys" element={<ApiKeys />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
