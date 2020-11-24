import React from "react";
import SideMenu from "./components/SideMenu/index.js";
import Home from "./components/Screen/Home/index.js";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
const Drawer = createDrawerNavigator();
const App = () => {
  const [isDone, setDone] = React.useState(false);
  const [usersData, setUsersData] = React.useState([]);
  const [mainUserActivity, setMainUserActivity] = React.useState({
    name: "Max",
    lastSeen: "1 hour ago",
    sessions: [
      {
        time: 7200,
        status: "complete",
      },
      {
        time: 7200,
        status: "complete",
      },
      {
        time: 3600,
        status: "progress",
      },
      {
        time: null,
        status: "incomplete",
      },
    ],
  });

  const modifySession = (sessionIndex, status) => {
    //modify main user activity
    //set
  };

  return (
    <NavigationContainer>
      <Drawer.Navigator headerMode="none" initialRouteName="Home">
        <Drawer.Screen name="Home">
          {(props) => (
            <Home
              {...props}
              setDone={setDone}
              setMainUserActivity={setMainUserActivity}
              isDone={isDone}
              usersData={usersData}
              mainUserActivity={mainUserActivity}
            />
          )}
        </Drawer.Screen>

        <Drawer.Screen name="SideMenu" component={SideMenu}></Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
