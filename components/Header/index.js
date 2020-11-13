import React from "react";

import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
export default function Header({ navigation }) {
  const image = {
    uri:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/220px-Hamburger_icon.svg.png",
  }
  return (
    <View style={styles.header}>
      <TouchableOpacity
        onPress={() => navigation.toggleDrawer()}
        style={styles.menu}
      >
        <Image
          source={image}
          style={styles.image}
        />
      </TouchableOpacity>
      <View style={styles.blank2} />

      <Text style={styles.coName}>Company Name</Text>
      <View style={styles.blank} />
      <Text>4/12</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    flex: 0.7,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "white",
    alignSelf: "stretch",
  },
  coName: {
    alignSelf: "center",
    fontSize: 22,
  },
  body: {
    flex: 8,
    flexDirection: "row",
    backgroundColor: "white",
    alignSelf: "stretch",
  },
  image: {
    width: 40,
    height: 40,
    marginLeft: 10,
  },
  menu: {
    flex: 0.2,
    alignSelf: "flex-start",
  },
  blank: {
    flex: 0.358,
  },
  blank1: {
    flex: 0.05,
  },
  blank2: {
    flex: 0.35,
  },
});
