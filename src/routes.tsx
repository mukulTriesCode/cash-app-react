import { lazy } from "react";
import Home from "./pages/Home";
import { LazyRoute } from "./components/LazyRoute";

// Lazy loaded components
const Login = lazy(() => import("./pages/Login"));
const SignUp = lazy(() => import("./pages/SignUp"));
const Category = lazy(() => import("./pages/Category"));
const AddEntry = lazy(() => import("./pages/AddEntry"));
const Profile = lazy(() => import("./pages/Profile"));

export const routes = [
  { path: "/", element: <Home /> },
  { path: "/category", element: <LazyRoute component={Category} /> },
  { path: "/add-entry", element: <LazyRoute component={AddEntry} /> },
  { path: "/profile", element: <LazyRoute component={Profile} /> },
  { path: "/login", element: <LazyRoute component={Login} /> },
  { path: "/sign-up", element: <LazyRoute component={SignUp} /> },
  { path: "*", element: <h1>404</h1> }
];