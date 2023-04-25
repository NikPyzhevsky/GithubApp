import { AxiosResponse } from "axios";
import { api } from "./api";
import { FetchEventsServiceT, fetchEventsResponseT } from "./types";

export const fetchEvents: FetchEventsServiceT = async ({ limit = 20, offset = 0 }) => {
  const response: AxiosResponse<fetchEventsResponseT> = await api.get(
    `/events?page=${offset}&per_page=${limit}`
  );

  return response.data;
};
