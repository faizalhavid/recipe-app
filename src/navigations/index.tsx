import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NotFoundScreen from '../screens/NotFoundScreen';
import WelcomeScreen from '../screens/dashboard/WelcomeScreen';
import { DashboardScreen } from '../screens/dashboard/DashboardScreen';
import { navigationRef } from './rootNavigator';

const RootStackNavigation = (): JSX.Element => {
  const RootStack = createNativeStackNavigator();
  return (
    <NavigationContainer ref={navigationRef}>
      <RootStack.Navigator initialRouteName="Welcome">
        <RootStack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
        <RootStack.Screen name="Dashboard" component={DashboardScreen} options={{ headerShown: true }} />
        <RootStack.Screen name="NotFound" component={NotFoundScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
export default RootStackNavigation;
