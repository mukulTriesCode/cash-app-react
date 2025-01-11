import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import { lazy, Suspense } from "react";

const Category = lazy(() => import("./pages/Category"));
const AddEntry = lazy(() => import("./pages/AddEntry"));
const Profile = lazy(() => import("./pages/Profile"));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="/category"
            element={
              <Suspense fallback={<></>}>
                <Category />
              </Suspense>
            }
          />
          <Route
            path="/add-entry"
            element={
              <Suspense fallback={<></>}>
                <AddEntry />
              </Suspense>
            }
          />
          <Route
            path="/profile"
            element={
              <Suspense fallback={<></>}>
                <Profile />
              </Suspense>
            }
          />
          <Route path="*" element={<h1>404</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
