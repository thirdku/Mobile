import React from "react";
import SideMenu from "./components/SideMenu/index.js";
import { NavigationContainer } from "@react-navigation/native";
export default function App() {
  return (
    <NavigationContainer>
      <SideMenu />
    </NavigationContainer>
  );
}
