import React from "react";
import Timer from '../Timer/index.js';

import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
export default function Body({ isDone }) {
  const dataBlock = [{}]
  const image = {
    uri:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Disk_pack1.svg/1200px-Disk_pack1.svg.png",
  };
  const imageBlock =()=>{
    
    return dataBlock.map((data,item_id) =>{
    return (
 <View></View>
    )})
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.blank1} />

        <View style={styles.name}>
          <View style={styles.blank1} />

          <Image style={styles.image} source={image}></Image>

          <View style={styles.blank1} />
          <View>
            <View style={styles.blank2} />
            <Text style={styles.name1}>Me</Text>
          </View>

          <View style={styles.blank} />
          <View style={styles.blank} />

          <View>
            <View style={styles.blank2} />
            <Text style={styles.name1}>2/4</Text>
          </View>
        </View>

        <Timer isDone={isDone} />
        <View style={styles.blank1} />

        <View style={styles.name}>
          <View style={styles.blank1} />

          <Image style={styles.image} source={image}></Image>

          <View style={styles.blank1} />
          <View>
            <View style={styles.blank2} />
            <Text style={styles.name1}>Me</Text>
          </View>

          <View style={styles.blank} />
          <View style={styles.blank} />

          <View>
            <View style={styles.blank2} />
            <Text style={styles.name1}>2/4</Text>
          </View>
        </View>

        <Timer isDone={isDone} />

        <View style={styles.blank1} />

        <View style={styles.name}>
          <View style={styles.blank1} />

          <Image style={styles.image} source={image}></Image>

          <View style={styles.blank1} />
          <View>
            <View style={styles.blank2} />
            <Text style={styles.name1}>Me</Text>
          </View>

          <View style={styles.blank} />
          <View style={styles.blank} />

          <View>
            <View style={styles.blank2} />
            <Text style={styles.name1}>2/4</Text>
          </View>
        </View>

    
        <Timer isDone={isDone} />

      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  header: {
    flex: 1,
    backgroundColor: "green",
  },
  coName: {
    alignSelf: "center",
  },
  name: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "green",
    alignSelf: "stretch",
  },
  picTimer: {
    flex: 2,
    flexDirection: "row",
    alignSelf: "stretch",
    flexDirection: "row",
    backgroundColor: "pink",
  },
  blank: {
    flex: 0.43,
  },
  blank1: {
    flex: 0.05,
  },
  image: {
    height: 55,
    width: 55,
  },
  blank2: {
    flex: 0.5,
  },
  pic: {
    backgroundColor: "red",
    flex: 0.35,
  },
  image1: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "contain",
  },
  imageContain: {
    flex: 1,
    alignSelf: "stretch",
    backgroundColor: "blue",
  },
  blank4: {
    flex: 0.025,
  },
});