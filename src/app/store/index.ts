import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "../../features/bookmark";


export const store = configureStore({
  reducer: {
    favourites: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
