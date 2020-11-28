import React, { useRef, useEffect } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
export default function Timer({
  isDone,
  usersData,
  mainUserActivity,
  setDone,
  setMainUserActivity,
  onStartSession
}) {
  const [time, setTime] = React.useState(0);
  const [indexTime, setIndex] = React.useState(0);
  const [isActive, setActive] = React.useState(false);
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
  const newTimer =(index) =>{
    setIndex(index)
  }
  const handleStart = (index) => {
    if ( isActive === false) {
      const start = Date.now()
      setIndex(index)
      console.log(index)
      setTime(start)
      setDone(false)
      setActive(true)
      countRef.current = setInterval(() => {
        const _mainUserActivity = { ...mainUserActivity };
        const minus = Date.now() - start;
        _mainUserActivity.sessions[index].time =
          _mainUserActivity.sessions[index].time - ((Math.floor(minus/1000)+1)-Math.floor(minus/1000));;
        
        
          
          setMainUserActivity(_mainUserActivity);
        }, 1000);
      } else if (isActive === true){
        clearInterval(countRef.current);
        setActive(false)
      }
    };
  
    useEffect(() => {
      
    if(mainUserActivity.sessions[indexTime].time === 7199) {
      const _mainUserActivity = { ...mainUserActivity };
      _mainUserActivity.sessions[indexTime].status = "complete"
      setDone(true)
      setActive(false)
      const dex = indexTime;
      const dog = dex + 1
      setIndex(dog)
      clearInterval(countRef.current);

    }
  }, [mainUserActivity]);
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
          <View style={styles.pic} key={index} >
            {datas.status === "complete" ? (
              <TouchableOpacity
                style={styles.imageContain}
                onPress={() => console.log(index)}
              >
                <Image style={styles.image1} source={image}></Image>
              </TouchableOpacity>
            ) : datas.status === "progress" ? (
              <TouchableOpacity
                style={styles.imageContain}
                onPress={() => handleStart(index)}
              >
                <Text style={styles.child}>{formatTime()}</Text>
              </TouchableOpacity>
            ) : index === indexTime ?(
              <TouchableOpacity
                style={styles.imageContain}
                onPress={() => onStartSession(index)}
              >
                <Image style={styles.image1} source={image1}></Image>
              </TouchableOpacity>
            ): (
              <TouchableOpacity
                style={styles.imageContain}
                
              >
                <Image style={styles.image1} ></Image>
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
