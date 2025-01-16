import { configureStore } from "@reduxjs/toolkit";
import profileData from "../../features/profileData";
import {
  persistStore,
  persistReducer,
  REGISTER,
  PURGE,
  PERSIST,
  FLUSH,
  REHYDRATE,
  PAUSE,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "profileRoot",
  storage,
};

const persistedReducer = persistReducer(persistConfig, profileData);

export const profileStore = configureStore({
  reducer: {
    profileRoot: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const profilePersistor = persistStore(profileStore);
// Infer the `RootState` and `AppDispatch` types from the store itself
export type ProfileRootState = ReturnType<typeof profileStore.getState>;
// Inferred type: {profileRoot: ProfileDataState}
export type AppDispatch = typeof profileStore.dispatch;
