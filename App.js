import React from "react";
import SideMenu from "./components/SideMenu/index.js";
import Name from "./components/Screen/Name/index.js";
import Avatar from "./components/Screen/Avatar/index.js";
import Join from "./components/Screen/Join/index.js";
import Create from "./components/Screen/Create/index.js";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator  headerMode="none">
      <Stack.Screen
         name="SideMenu"
         component={SideMenu}>
          
        </Stack.Screen>
        <Stack.Screen
         name="Create"
         component={Create}>
          
        </Stack.Screen>
        <Stack.Screen
         name="Name"
         component={Name}>
          
        </Stack.Screen>
        <Stack.Screen
         name="Join"
         component={Join}>
          
        </Stack.Screen>
        <Stack.Screen
         name="Avatar"
         component={Avatar}>
          
        </Stack.Screen>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
