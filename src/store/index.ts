import { configureStore } from "@reduxjs/toolkit";
import cashCountSlice from "../features/cashCountSlice";
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
import profileSlice from "@/features/profileSlice";
import authSlice from "@/features/authSlice";
import { userApi } from "@/services/profileService";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducers = {
  root: persistReducer(persistConfig, cashCountSlice),
  profile: persistReducer(persistConfig, profileSlice),
  auth: persistReducer(persistConfig, authSlice),
  [userApi.reducerPath]: userApi.reducer,
};

export const store = configureStore({
  reducer: persistedReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(userApi.middleware),
});

export const persistor = persistStore(store);
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
