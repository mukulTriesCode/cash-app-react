// hooks/useLoader.ts
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import isLoading from "@/features/loaderSlice";

const useLoader = (loading: boolean) => {
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(isLoading(loading));
  }, [loading, dispatch]);
};

export default useLoader;
