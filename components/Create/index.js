import { StatusBar } from 'expo-status-bar';
import React , { Component } from 'react';
import Header from '../Header/index.js'
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';
export default function Create({ navigation }) {
  const [value, onChangeText] = React.useState('TEAM ID');
  return (
    <View style={styles.container}>
      <View style={styles.blank}> 
      
      </View>
      <Header style={styles.header} navigation={navigation} />
      <View style={styles.timer}>
       <TextInput
           value={value}
           style={styles.input}
       >
       </TextInput>
       <Button title="Create">
       </Button>
      </View>
      <View  style={styles.name}>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  blank :{
    flex:1,
    alignItems: 'center',
    backgroundColor: '#fdf',
  },
  timer :{
    flex:3,
    alignItems: 'center',
  },
  name :{
    flex:2,
    alignItems: 'center',
  },
  input :{ 
      height: 40, 
      borderColor: 'gray', 
      borderWidth: 1 
    }
});
