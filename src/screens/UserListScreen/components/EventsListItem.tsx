import React, { FC } from "react";
import { Button, StyleSheet, View, Text, Image } from "react-native";
import Animated, { SlideInLeft, SlideOutRight } from "react-native-reanimated";
import { eventT } from "../../../services/types";
import { DarkTheme } from "../../../navigation/constants";

type eventsListItemProps = {
  item: eventT
  onPress: () => void
}

export const EventsListItem: FC<eventsListItemProps> = ({ item, onPress }) => {
  const { type, actor } = item;

  return (
    <Animated.View entering={SlideInLeft} exiting={SlideOutRight} style={styles.container}>
      <View style={styles.headContainer}>
        <Image style={styles.avatar} source={{ uri: actor.avatar_url }} />
        <View>
          <Text children={type} style={styles.title} />
          <Text style={styles.subTitle}>{actor.login}</Text>
        </View>
      </View>
      <Button title={"Details"} onPress={onPress} />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 64,
    paddingHorizontal:6,
    backgroundColor: DarkTheme.colors.card,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 12,
    borderColor: "gray"
  },
  headContainer: {
    flexDirection: "row",
    gap: 8
  },
  avatar: {
    height: 56,
    width: 56,
    borderRadius: 24
  },
  subTitle: {
    marginTop: 4,
    color: "gray",
    fontSize: 12
  },
  title: {
    color: "white"
  }
});

