import React, { useEffect } from "react";
import Timer from "../Timer/index.js";
import TimerDisplay from "../TimerDisplay/index.js";
import ModalImage from "../ModalImage/index.js";

import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
export default function Body({
  navigation,
  setDone,
  setMainUserActivity,
  isDone,
  usersData,
  mainUserActivity,
  onStartSession,
  other1UserActivity,
  setOther1UserActivity,
  otherUserActivity,
  setOtherUserActivity,
}) {
  const name = mainUserActivity.name;
  const name1 = otherUserActivity.name;
  const name2 = other1UserActivity.name;

  const dataBlock = [{}];
  const image = {
    uri:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Disk_pack1.svg/1200px-Disk_pack1.svg.png",
  };
  const imageBlock = () => {
    return dataBlock.map((data, item_id) => {
      return <View></View>;
    });
  };

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
            <Text style={styles.name1}>{name}</Text>
          </View>

          <View style={styles.blank} />
          <View style={styles.blank} />

          <View>
            <View style={styles.blank2} />
            <Text style={styles.name1}>2/4</Text>
          </View>
        </View>
        <View style={{ flex: 1 }} />

        <Timer
          setDone={setDone}
          setMainUserActivity={setMainUserActivity}
          isDone={isDone}
          usersData={usersData}
          mainUserActivity={mainUserActivity}
          onStartSession={onStartSession}
        />
        <View style={{ flex: 0.6 }} />

        <View style={styles.blank1} />

        <View style={styles.name}>
          <View style={styles.blank1} />

          <Image style={styles.image} source={image}></Image>

          <View style={styles.blank1} />
          <View>
            <View style={styles.blank2} />
            <Text style={styles.name1}>{name1}</Text>
          </View>

          <View style={styles.blank} />
          <View style={styles.blank} />

          <View>
            <View style={styles.blank2} />
            <Text style={styles.name1}>2/4</Text>
          </View>
        </View>

        <View style={{ flex: 1 }} />
        <TimerDisplay
          setDone={setDone}
          setMainUserActivity={setOtherUserActivity}
          isDone={isDone}
          usersData={usersData}
          mainUserActivity={otherUserActivity}
          onStartSession={onStartSession}
        />
        <View style={{ flex: 0.6 }} />
        <View style={styles.blank1} />

        <View style={styles.name}>
          <View style={styles.blank1} />

          <Image style={styles.image} source={image}></Image>

          <View style={styles.blank1} />
          <View>
            <View style={styles.blank2} />
            <Text style={styles.name1}>{name2}</Text>
          </View>

          <View style={styles.blank} />
          <View style={styles.blank} />

          <View>
            <View style={styles.blank2} />
            <Text style={styles.name1}>2/4</Text>
          </View>
        </View>

        <View style={{ flex: 1 }} />
        <TimerDisplay
          setDone={setDone}
          setMainUserActivity={setOther1UserActivity}
          isDone={isDone}
          usersData={usersData}
          mainUserActivity={other1UserActivity}
          onStartSession={onStartSession}
        />
        <View style={{ flex: 0.6 }} />
        <View style={styles.blank1} />

        <View style={styles.name}>
          <View style={styles.blank1} />

          <Image style={styles.image} source={image}></Image>

          <View style={styles.blank1} />
          <View>
            <View style={styles.blank2} />
            <Text style={styles.name1}>{name2}</Text>
          </View>

          <View style={styles.blank} />
          <View style={styles.blank} />

          <View>
            <View style={styles.blank2} />
            <Text style={styles.name1}>2/4</Text>
          </View>
        </View>

        <View style={{ flex: 0.9 }} />
        <TimerDisplay
          setDone={setDone}
          setMainUserActivity={setOther1UserActivity}
          isDone={isDone}
          usersData={usersData}
          mainUserActivity={other1UserActivity}
          onStartSession={onStartSession}
        />
        <View style={{ flex: 0.5 }} />
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
  },
  coName: {
    alignSelf: "center",
  },
  name: {
    flex: 1,
    flexDirection: "row",
    alignSelf: "stretch",
  },
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
