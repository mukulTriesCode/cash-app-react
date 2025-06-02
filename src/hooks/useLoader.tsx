import { loaderSlice } from "@/features/loaderSlice";
import { RootState } from "@/store";
import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

const useLoader = (isLoading: boolean) => {
  const dispatch = useDispatch();
  const loader = useSelector((state: RootState) => state?.loader);
  const loadingAction = loaderSlice?.actions?.isLoading;

  const handleLoading = useCallback(() => {
    if (loadingAction) {
      dispatch(loadingAction(isLoading));
    }
  }, [dispatch, loadingAction, isLoading]);

  useEffect(() => {
    handleLoading();
  }, [handleLoading]);

  return loader;
};

export default useLoader;
