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
  const isAuthenticated = sessionStorage.getItem("token");

  if (requiresAuth && !isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Component />
    </Suspense>
  );
};
