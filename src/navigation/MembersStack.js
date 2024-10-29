import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Members from '../pages/Members/Members';
import MemberDetails from '../pages/Members/MemberDetails';

const Stack = createStackNavigator();

export default function MembersStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Members" 
        component={Members} 
        options={{ title: 'Lista de Membros' }}
      />
      <Stack.Screen 
        name="MemberDetails" 
        component={MemberDetails} 
        options={{ title: 'Detalhes do Membro' }}
      />
    </Stack.Navigator>
  );
}
