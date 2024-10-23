import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Path from "./pages/Path";
import Layout from "./components/Layout";
import CashCounter from "./pages/CashCounter";
function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/path" element={<Path />} />
          <Route path="/cash" element={<CashCounter />} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
