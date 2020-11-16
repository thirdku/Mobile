import React, { useEffect } from "react";
import SideMenu from "./components/SideMenu/index.js";
import Home from "./components/Screen/Home/index.js";
import Name from "./components/Screen/Name/index.js";
import Avatar from "./components/Screen/Avatar/index.js";
import Join from "./components/Screen/Join/index.js";
import Create from "./components/Screen/Create/index.js";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
 const App = () => {
  const [isDone ,setDone] = React.useState(false)
  const [usersData, setUsersData] = React.useState([]);
  const [mainUserActivity, setMainUserActivity] = React.useState({
    name: 'Max',
    lastSeen: '1 hour ago',
    sessions: [
      {
        time: '2:00:00',
        status: 'complete',
      },
      {
        time: '2:00:00',
        status: 'complete',
      },
      {
        time: '1:00:00',
        status: 'progress',
      },
      {
        time: null,
        status: 'incomplete',
      },
    ]
  })
  const HomeComponent = (props) =>(<Home isDone={true} usersData={usersData} mainUserActivity={mainUserActivity}  />);

  const modifySession = (sessionIndex, status) => {
   //modify main user activity
    //set
  }
  
  
  return (
    <NavigationContainer>
      <Stack.Navigator  headerMode="none" >
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
        <Stack.Screen name="Home">
         {props => <Home {...props} isDone={true} usersData={usersData} mainUserActivity={mainUserActivity}  />}
        
    
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App