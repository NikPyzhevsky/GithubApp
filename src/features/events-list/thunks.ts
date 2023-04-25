import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchEvents } from "../../services";
import { RootState } from "../../store/store";
import { eventListT, FetchEventsParamsT } from "../../services/types";


export const fetchEventsList = createAsyncThunk<eventListT,
  FetchEventsParamsT,
  {
    state: RootState;
  }>("eventsList/fetchEvents", async (args) => {
  return await fetchEvents(args);
});
