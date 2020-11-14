import React, { Component } from "react";
import Header from "../../Header/index.js";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
export default function Name({ navigation }) {
  const [value, onChangeText] = React.useState("TEAM ID");
  return (
    <View style={styles.container}>
      <View style={styles.blank}></View>
      <View style={{flex:1}}/>

      <View style={styles.timer}>
        <Text style={{fontSize:25,alignSelf:'center'}}>My name is</Text>
        <View style={{flex:0.3}}/>

        <TextInput
          style={styles.input}
          placeholder="NAME"
          textAlign="center"
        ></TextInput>
        <View style={{flex:0.8}}/>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Next</Text>
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
  blank:{
    flex:0.25,
    backgroundColor: 'black',
    alignSelf:'stretch'
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
    width: 300,
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
