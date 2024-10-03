import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Path from "./pages/Path";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/path" element={<Path />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
