import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import AddEntry from "./pages/AddEntry";
import Category from "./pages/Category";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Sidebar />
        <div className="ms-[88px]">
          <Navbar />
          <div className="pt-[95px]">
            <Routes>
              <Route path="/" index element={<Home />} />
              <Route path="/category" element={<Category />} />
              <Route path="/add-entry" element={<AddEntry />} />
              <Route path="*" element={<h1>404</h1>} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
