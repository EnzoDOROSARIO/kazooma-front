import { BrowserRouter, Route, Routes } from "react-router";
import { Text } from "./adapters/primary/react/components/Text.tsx";
import Home from "./adapters/primary/react/views/Home";
import { Layout } from "./adapters/primary/react/Layout.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/keys" element={<Text>Keys</Text>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
