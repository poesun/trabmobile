import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Navbar from './src/components/Navbar';
import Login from './src/pages/Login/Login';
import Map from './src/pages/Map/Map';
import Members from './src/pages/Members/Members';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={(props) => <Navbar {...props} />}>
        <Tab.Screen name="Login" component={Login} />
        <Tab.Screen name="Map" component={Map} />
        <Tab.Screen name="Members" component={Members} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}