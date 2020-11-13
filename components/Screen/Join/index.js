import React, { Component } from "react";
import Header from "../../Header/index.js";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
export default function Join({ navigation }) {
  const [value, onChangeText] = React.useState("TEAM ID");
  return (
    <View style={styles.container}>
      <View style={styles.blank}></View>
      <Header style={styles.header} navigation={navigation} />
      <View style={styles.timer}>
        <TextInput
          style={styles.input}
          placeholder="TEAM ID"
          textAlign="center"
        ></TextInput>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Join</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.name}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  blank: {
    flex: 0.2,
  },
  timer: {
    flex: 4,
    alignSelf: "stretch",
  },
  name: {
    flex: 2,
    alignItems: "center",
  },
  input: {
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    width: 200,
    alignSelf: "center",
    alignItems: "center",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    alignSelf: "stretch",
    height: 60,
    padding: 16,
    margin: 10,
  },
  buttonText: {
    fontSize: 25,
  },
  header: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "pink",
  },
});
