import React from "react";
import Home from "../Screen/Home/index.js";
import Join from "../Screen/Join/index.js";
import Create from "../Screen/Create/index.js";
import Name from "../Screen/Name/index.js";
import Avatar from "../Screen/Avatar/index.js";

import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function SideMenu() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Join" component={Join} />
      <Stack.Screen name="Create" component={Create} />
      <Stack.Screen name="Upgrade" component={Name} />
      <Stack.Screen name="Avatar" component={Avatar} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
