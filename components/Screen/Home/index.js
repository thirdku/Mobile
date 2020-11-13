import React from 'react';
import Body from '../../Body/index.js';
import Header from '../../Header/index.js';

import { StyleSheet, Text, View,  } from 'react-native';
export default function Home({navigation}) {
  const [isDone ,setDone] = React.useState(false)
  return (
       <View style={styles.container}>
           <View style={styles.blank}></View>
           <Header style={styles.header} navigation={navigation}/>
           <View style={styles.date}>
           <View style={styles.blank1}></View>
           
           <View style={styles.blank1}></View>

             <Text> Today </Text>
           </View>
           <View style={styles.body}>
                <Body isDone={isDone}/>
           </View>
       </View>
    
      
  );
}
const styles = StyleSheet.create({
  container:{
      flex:1,
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
  }, 
  
  coName:{
      alignSelf: 'center',
  },
  body:{
    flex:8,
    flexDirection: 'row',
    backgroundColor: 'white',
    alignSelf:'stretch'

  },
  date:{
      flex:0.5,
      alignSelf: 'center'
  },
  image :{
    width: 40, 
    height: 40, 
    marginLeft: 10, 
 },
 menu :{
    flex:0.2,
    alignSelf: 'flex-start',
  },  
 blank:{
   flex:0.25,
   backgroundColor: 'black',
   alignSelf:'stretch'
 },
 blank1:{
  flex:0.25
}
});
