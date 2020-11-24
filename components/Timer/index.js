import React, { useRef, useEffect } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
export default function Timer({
  isDone,
  usersData,
  mainUserActivity,
  setDone,
  setMainUserActivity,
}) {
  const dataBlock = [{}];
  const countRef = useRef(null);

  const image = {
    uri:
      "https://dt.azadicdn.com/wp-content/uploads/2015/07/screenshots-Oppo-phones.jpg?200",
  };
  const image1 = {
    uri:
      "https://content.fortune.com/wp-content/uploads/2019/04/brb05.19.plus_.jpg",
  };
  const ImageBlock = () => {
    return dataBlock.map((data, item_id) => {
      return <View></View>;
    });
  };

  const data = mainUserActivity.sessions;

  const handleStart = (index) => {
    if (isDone == true) {
      setDone(false);
      countRef.current = setInterval(() => {
        const _mainUserActivity = { ...mainUserActivity };

        _mainUserActivity.sessions[2].time =
          _mainUserActivity.sessions[2].time - 1;

        setMainUserActivity(_mainUserActivity);
      }, 1000);
    } else {
      clearInterval(countRef.current);
      setDone(true);
    }
  };

  useEffect(() => {
    console.log("dogd", mainUserActivity.sessions[3 - 1].time);
  }, [handleStart]);
  return (
    <View style={styles.picTimer}>
      <View style={styles.blank4} />

      {data.map((datas, index) => {
        const formatTime = () => {
          const getSeconds = `0${datas.time % 60}`.slice(-2);
          const minutes = `${Math.floor(datas.time / 60)}`;
          const getMinutes = `0${minutes % 60}`.slice(-2);
          const getHours = `0${Math.floor(datas.time / 3600)}`.slice(-2);

          return `${getHours} : ${getMinutes} : ${getSeconds}`;
        };
        return (
          <View style={styles.pic} key={index}>
            {datas.status == "complete" ? (
              <TouchableOpacity
                style={styles.imageContain}
                onPress={() => console.log(datas.time)}
              >
                <Image style={styles.image1} source={image}></Image>
              </TouchableOpacity>
            ) : datas.status == "progress" ? (
              <TouchableOpacity
                style={styles.imageContain}
                onPress={() => handleStart(index)}
              >
                <Text style={styles.child}>{formatTime()}</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.imageContain}
                onPress={() => handleStart(index)}
              >
                <Image style={styles.image1} source={image1}></Image>
              </TouchableOpacity>
            )}
          </View>
        );
      })}
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
    borderTopWidth: 1,
    borderBottomWidth: 1,
    backgroundColor: "#DCDCDC",
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
    justifyContent: "center",
  },
  blank4: {
    flex: 0.05,
  },
  child: {
    alignSelf: "center",
  },
});
