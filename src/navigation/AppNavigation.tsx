import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import HomeScreen from '../screens/HomeScreen/HomeScreen';
import IntroScreen from '../screens/IntroScreen/IntroScreen';
import RoutineDetailsScreen from '../screens/RoutineDetails/RoutineDetailsScreen';

export type StackParamList = {
  Home: undefined;
  Intro: undefined;
  RoutineDetails: { id: number };
};
export default function AppNavigation() {
  const Stack = createStackNavigator<StackParamList>();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Intro" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Intro" component={IntroScreen} />
        <Stack.Screen name="RoutineDetails" component={RoutineDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
