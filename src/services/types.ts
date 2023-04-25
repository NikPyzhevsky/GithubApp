export type eventT = {
  "id": string,
  "type": string,
  "actor": {
    "id": number,
    "login": string,
    "display_login": string,
    "gravatar_id": string,
    "url": string,
    "avatar_url": string
  },
  "repo": {
    "id": number,
    "name": string,
    "url": string
  },
  "payload": {
    "action": string
  },
  "public": boolean,
  "created_at": string
}

export type eventListT = eventT[]

export type fetchEventsResponseT = eventT[]

export type FetchEventsParamsT = {
  limit: number;
  offset: number;
};

export type FetchEventsServiceT = (
  args: FetchEventsParamsT
) => Promise<fetchEventsResponseT>;
