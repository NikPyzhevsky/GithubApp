import React, { FC, useCallback, useEffect } from "react";
import { FlatList, FlatListProps, ListRenderItem, View } from "react-native";
import { useAppDispatch, useAppSelector } from "../../store";
import { EventsListItem } from "./components/EventsListItem";
import { fetchEventsList } from "../../features/events-list";
import { eventT } from "../../services/types";
import { ROUTES, EventsListProps } from "../../navigation/types";
import { Timer } from "../../components/Timer";
import { styles } from "../styles";

const keyExtractor: FlatListProps<eventT>["keyExtractor"] = (item) => item.id;

export const UserListScreen: FC<EventsListProps> = ({ navigation }) => {
  const [users, isLoading] = useAppSelector(state => [state.eventsList.events, state.eventsList.loading]);
  const dispatch = useAppDispatch();

  const updateList = useCallback(() => {
    dispatch(fetchEventsList({ limit: 25, offset: 0 }));
  }, []);

  useEffect(() => {
    updateList();
  }, []);

  const itemSeparatorComponent = () => <View style={styles.separator}/>

  const renderItem: ListRenderItem<eventT> = ({ item }) => {
    const onPressHandler = () => {
      const { id, type, actor } = item;
      navigation.navigate(ROUTES.EVENT_DETAILS, {
        id,
        type,
        url: actor.url,
        avatar_url: actor.avatar_url,
        login: actor.login
      });
    };

    return <EventsListItem item={item} onPress={onPressHandler} />;
  };

  return <FlatList
    ListHeaderComponent={<Timer onTimerEnd={updateList} isLoading={isLoading} />}
    keyExtractor={keyExtractor}
    ItemSeparatorComponent={itemSeparatorComponent}
    onRefresh={updateList}
    refreshing={isLoading}
    style={styles.container}
    data={users}
    renderItem={renderItem}
  />;
};
