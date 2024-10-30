import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import AddEntry from "./pages/AddEntry";
import Category from "./pages/Category";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import background from "./assets/Dashboard-min (1).webp";

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Sidebar />
        <div className="ms-[88px] relative">
          <div className="absolute z-[-1] top-0 left-0 w-full min-h-screen h-full opacity-10">
            <img
              className="w-full h-full object-cover"
              src={background}
              alt="bg"
              loading="eager"
              decoding="async"
            />
          </div>
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
