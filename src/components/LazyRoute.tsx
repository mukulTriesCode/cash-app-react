import { Suspense } from "react";
import { Navigate } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";

interface LazyRouteProps {
  component: React.ComponentType;
  requiresAuth?: boolean;
}

export const LazyRoute = ({
  component: Component,
  requiresAuth = false,
}: LazyRouteProps) => {
  const isAuthenticated = localStorage.getItem("token"); // Replace with your auth logic

  if (requiresAuth && !isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Component />
    </Suspense>
  );
};
