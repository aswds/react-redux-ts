import { postAPI } from "./../services/PostService";
import userReducer from "./reducers/UserSlice";
import { configureStore, combineReducers } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    user: userReducer,
    [postAPI.reducerPath]: postAPI.reducer,
  },

  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat(postAPI.middleware);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
