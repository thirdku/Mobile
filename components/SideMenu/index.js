import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Home from '../Home/index.js'
import Join from '../Join/index.js'
import Create from '../Create/index.js'

import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
  } from '@react-navigation/drawer';


const Drawer = createDrawerNavigator();

export default function SideMenu() {
  return (
    <Drawer.Navigator initialRouteName="Home" >
      <Drawer.Screen 
          name="Dashboard" 
          component={Home} 
      />
      <Drawer.Screen 
          name="Join" 
          component={Join} 
      />
      <Drawer.Screen 
          name="Create" 
          component={Create} 
      />
      <Drawer.Screen 
          name="Upgrade" 
          component={Home} 
      />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  
  
});
