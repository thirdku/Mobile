import React, { Component } from "react";
import Header from "../../Header/index.js";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
export default function Create({ navigation }) {
  const [value, onChangeText] = React.useState("TEAM ID");
  return (
    
    <View style={styles.container}>
      <View style={styles.blank}></View>
      <View style={{flex:1}}/>
      <View style={styles.timer}>
      <View style={styles.date}>
           <View style={styles.blank1}></View>
           
           <View style={styles.blank1}></View>

           <Text style={{ alignSelf:'center', fontSize:30,}}>
          I am a
        </Text>
           </View>
        <View style={{flex:0.25}}/>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Employee</Text>
        </TouchableOpacity>
        <View style={{flex:0.25}}/>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Manager</Text>
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
  
});
