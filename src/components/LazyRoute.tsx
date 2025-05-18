import { Suspense } from "react";
import { Navigate } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";
import { getToken } from "@/lib/utils";

interface LazyRouteProps {
  component: React.ComponentType;
  requiresAuth?: boolean;
}

export const LazyRoute = ({
  component: Component,
  requiresAuth = false,
}: LazyRouteProps) => {
  const isAuthenticated = getToken();

  if (requiresAuth && !isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Component />
    </Suspense>
  );
};
