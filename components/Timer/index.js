import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
export default function Timer({ isDone }) {
  const dataBlock = [{}]
  const image = {
    uri:
      "https://dt.azadicdn.com/wp-content/uploads/2015/07/screenshots-Oppo-phones.jpg?200",
  };
  const imageBlock =()=>{
    
    return dataBlock.map((data,item_id) =>{
    return (
 <View></View>
    )})
  }
  return (
    <View style={styles.picTimer}>
          <View style={styles.blank4} />

          <View style={styles.pic}>
            {!isDone ? (
              <TouchableOpacity style={styles.imageContain}>
                <Image style={styles.image1} source={image}></Image>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity>
                <Text style={styles.child}>00:00:00</Text>
              </TouchableOpacity>
            )}
          </View>
          <View style={styles.blank4} />

          <View style={styles.pic}>
            {!isDone ? (
              <TouchableOpacity style={styles.imageContain}>
                <Image style={styles.image1} source={image}></Image>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity>
                <Text style={styles.child}>00:00:00</Text>
              </TouchableOpacity>
            )}
          </View>
          <View style={styles.blank4} />

          <View style={styles.pic}>
            {!isDone ? (
              <TouchableOpacity style={styles.imageContain}>
                <Image style={styles.image1} source={image}></Image>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity>
                <Text style={styles.child}>00:00:00</Text>
              </TouchableOpacity>
            )}
          </View>
          <View style={styles.blank4} />

          <View style={styles.pic}>
            {!isDone ? (
              <TouchableOpacity style={styles.imageContain}>
                <Image style={styles.image1} source={image}></Image>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity>
                <Text style={styles.child}>00:00:00</Text>
              </TouchableOpacity>
            )}
          </View>
          <View style={styles.blank4} />

        </View>
  );
}
const styles = StyleSheet.create({
  
  picTimer: {
    flex: 2,
    flexDirection: "row",
    alignSelf: "stretch",
    flexDirection: "row",
    
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
    flex: 0.35,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth:1,
    borderBottomWidth:1,
    backgroundColor: '#DCDCDC'
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
  },
  blank4: {
    flex: 0.05,
  },
});
