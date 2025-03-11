import { Suspense } from "react";
import LoadingSpinner from "./LoadingSpinner";

export const LazyRoute = ({ component: Component }: { component: React.ComponentType }) => (
  <Suspense fallback={<LoadingSpinner />}>
    <Component />
  </Suspense>
);