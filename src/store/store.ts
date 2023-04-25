import { configureStore } from "@reduxjs/toolkit";
import { eventsListReducer } from "../features/events-list";

export const store = configureStore({
  reducer: {
    eventsList: eventsListReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
