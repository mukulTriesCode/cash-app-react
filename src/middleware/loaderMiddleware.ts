// middleware/loaderMiddleware.ts
import { isPending, isRejected, isFulfilled } from "@reduxjs/toolkit";
import { incrementPending, decrementPending } from "@/features/loaderSlice";

export const loaderMiddleware = () => (next: any) => (action: any) => {
  if (isPending(action)) {
    next(incrementPending());
  } else if (isFulfilled(action) || isRejected(action)) {
    next(decrementPending());
  }
  return next(action);
};
