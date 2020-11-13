import React from "react";
import Home from "../Screen/Home/index.js";
import Join from "../Screen/Join/index.js";
import Create from "../Screen/Create/index.js";

import { StyleSheet } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

export default function SideMenu() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Dashboard" component={Home} />
      <Drawer.Screen name="Join" component={Join} />
      <Drawer.Screen name="Create" component={Create} />
      <Drawer.Screen name="Upgrade" component={Home} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({});
