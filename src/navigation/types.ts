import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { eventT } from "../services/types";

export enum ROUTES {
  EVENTS_LIST = "eventsList",
  EVENT_DETAILS = "eventDetails",
}

export type RootStackParamList = {
  [ROUTES.EVENTS_LIST]: undefined;
  [ROUTES.EVENT_DETAILS]: {
    id: eventT["id"],
    type: eventT["type"],
    url: eventT["actor"]["url"],
    avatar_url: eventT["actor"]["avatar_url"],
    login: eventT["actor"]["login"]
  };
};

export type EventsListProps = NativeStackScreenProps<RootStackParamList, ROUTES.EVENTS_LIST>;
export type EventDetailsProps = NativeStackScreenProps<RootStackParamList, ROUTES.EVENT_DETAILS>;

