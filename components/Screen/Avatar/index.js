import React, { Component } from "react";
import Header from "../../Header/index.js";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
export default function Avatar({ navigation }) {
  const [value, onChangeText] = React.useState("TEAM ID");
  return (
    <View style={styles.container}>
      <View style={styles.blank}></View>
      
      <View style={styles.timer}>
      <View style={{flex:1}}/>

        <Text style={{alignSelf:'center',fontSize:25}}>
          Upload an image for Avatar
        </Text>
        <View style={{flex:0.25}}/>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Upload</Text>
        </TouchableOpacity>
        <View style={{flex:1}}/>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Finish</Text>
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
    width: 200,
    alignSelf: "center",
    alignItems: "center",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
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
