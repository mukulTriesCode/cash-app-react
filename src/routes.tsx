import { lazy } from "react";
import Home from "./pages/Home";
import { LazyRoute } from "./components/LazyRoute";

// Lazy loaded components
const Login = lazy(() => import("./pages/Login"));
const SignUp = lazy(() => import("./pages/SignUp"));
const Category = lazy(() => import("./pages/Category"));
const AddEntry = lazy(() => import("./pages/AddEntry"));
const Profile = lazy(() => import("./pages/Profile"));
const NotFound = lazy(() => import("./pages/404"));

export const routes = [
  {
    path: "/",
    element: <LazyRoute component={Home} requiresAuth={true} />,
    protected: true,
  },
  {
    path: "/category",
    element: <LazyRoute component={Category} requiresAuth={true} />,
    protected: true,
  },
  {
    path: "/add-entry",
    element: <LazyRoute component={AddEntry} requiresAuth={true} />,
    protected: true,
  },
  {
    path: "/profile",
    element: <LazyRoute component={Profile} requiresAuth={true} />,
    protected: true,
  },
  {
    path: "/login",
    element: <LazyRoute component={Login} />,
    protected: false,
  },
  {
    path: "/sign-up",
    element: <LazyRoute component={SignUp} />,
    protected: false,
  },
  {
    path: "*",
    element: <LazyRoute component={NotFound} />,
    protected: false,
  },
];
