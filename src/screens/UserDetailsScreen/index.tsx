import React, { FC, useEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { EventDetailsProps } from "../../navigation/types";

export const UserDetailsScreen: FC<EventDetailsProps> = ({ route, navigation }) => {
  const { id, login, url, avatar_url, type } = route.params;

  useEffect(() => {
    navigation.setOptions({ headerTitle: type });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{id}</Text>
      <Image style={styles.avatar} source={{ uri: avatar_url }} />
      <Text style={styles.userInf}>{login}</Text>
      <Text style={styles.userInf}>{url}</Text>
    </View>);
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", padding: 16 },
  title: {
    color: "white",
    fontSize: 36
  },
  avatar: {
    marginTop: 8,
    height: 144,
    width: 144,
    borderRadius: 36
  },
  userInf: {
    marginTop: 8,
    fontSize: 24,
    color: "gray",
    textAlign: "center"
  }
});
