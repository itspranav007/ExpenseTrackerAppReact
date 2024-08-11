import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Homescreen from "./screen/Homescreen"
import Loginscreen from "./screen/loginscreen"
import Mainscreen from "./screen/Mainscreen"
import Profile from "./screen/Profile"
//import Practicescreen from './screen/practice';


const Stack = createNativeStackNavigator();
//const Drawer = createDrawerNavigator();

const StackNavigation = () => (
  <Stack.Navigator initialRouteName='Home'>
    <Stack.Screen options={{ headerShown: false }} name='Main' component={Mainscreen} />
    <Stack.Screen options={{ headerShown: false }} name='Home' component={Homescreen} />
    <Stack.Screen options={{ headerShown: false }} name='Login' component={Loginscreen} />
   {/* <Stack.Screen options={{ headerShown: false }} name='Practice' component={Practicescreen } />*/}

  </Stack.Navigator>
);

const Drawernavigation = () => (
  <Drawer.Navigator initialRouteName='Profile'>
    <Drawer.Screen name="Profile" component={Profile} />
  </Drawer.Navigator>
);

const App = () => (
    <NavigationContainer>
      <StackNavigation />
      <Drawernavigation/>
    </NavigationContainer>

);

export default App;
