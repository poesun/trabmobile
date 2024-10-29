import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Navbar from './src/components/Navbar';
import Login from './src/pages/Login/Login';
import Map from './src/pages/Map/Map';
import Members from './src/pages/Members/Members';
import MemberDetails from './src/pages/Members/MemberDetails'; // Componente para detalhes do membro

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MembersStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Members" 
        component={Members} 
        options={{ headerShown: false }} // Sem header nesta tela
      />
      <Stack.Screen 
        name="MemberDetails" 
        component={MemberDetails} 
        options={{ headerShown: false }} 
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={(props) => <Navbar {...props} />}>
        <Tab.Screen 
          name="Login" 
          component={Login} 
          options={{ 
            headerShown: false,
            tabBarLabel: 'Entrar' // Nome personalizado para a aba de login
          }} 
        />
        <Tab.Screen 
          name="Map" 
          component={Map} 
          options={{ 
            headerShown: false,
            tabBarLabel: 'Mapa' // Nome personalizado para a aba de mapa
          }} 
        />
        <Tab.Screen 
          name="Members" // Mudando para 'Members' em vez de 'MembersStack'
          component={MembersStack} // Mantendo a estrutura de Stack aqui
          options={{ 
            headerShown: false,
            tabBarLabel: 'Membros' // Nome personalizado para a aba de membros
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}



