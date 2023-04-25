import { createSlice } from "@reduxjs/toolkit";
import { fetchEventsList } from "./thunks";
import { eventT } from "../../services/types";
import { Alert } from "react-native";

export type EventsListState = {
  events: eventT[];
  loading: boolean;
  total?: number;
  page: number;
};

const initialState: EventsListState = {
  events: [],
  page: 0,
  loading: false
};

export const eventsListSlice = createSlice({
  name: "eventsList",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchEventsList.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchEventsList.fulfilled, (state, action) => {
      state.loading = false;
      state.events = action.payload;
    });
    builder.addCase(fetchEventsList.rejected, (state, action) => {
      state.loading = false;
      Alert.alert("Something go wrong", action?.payload?.toString());
    });
  }
});

export const eventsListReducer = eventsListSlice.reducer;
