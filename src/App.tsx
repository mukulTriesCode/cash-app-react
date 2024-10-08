import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Path from "./pages/Path";
import Layout from "./components/Layout";
import Grid from "./pages/Grid";
function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/path" element={<Path />} />
          <Route path="/grid" element={<Grid />} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
