import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NotFoundScreen from '../screens/NotFoundScreen';
import WelcomeScreen from '../screens/dashboard/WelcomeScreen';
import { navigationRef } from './rootNavigator';
import BottomTabNavigator from './bottomTabNavigator';
import { DetailFoodRecipe } from '../screens/dashboard/DetailFoodRecipe';
import { IconButton } from 'react-native-paper';
import { AppColors } from '../commons/colors';
import { SeeAllFoodRecipe } from '../screens/dashboard/SeeAllFoodRecipe';

const RootStackNavigation = () => {
  const RootStack = createNativeStackNavigator();
  return (
    <NavigationContainer ref={navigationRef}>
      <RootStack.Navigator initialRouteName="Welcome">
        <RootStack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
        <RootStack.Screen name="BottomTabNavigator" component={BottomTabNavigator} options={{ headerShown: false }} />
        <RootStack.Screen
          name="DetailFoodRecipe"
          component={DetailFoodRecipe}
          options={{
            headerRight: () => <IconButton icon="dots-horizontal" iconColor={AppColors.Neutral_100} size={25} onPress={() => console.log('Pressed')} />,
            headerTitle: '',
          }}
        />
        <RootStack.Screen
          name="SeeAllFoodRecipe"
          component={SeeAllFoodRecipe}
          options={{
            headerRight: () => <IconButton icon="dots-horizontal" iconColor={AppColors.Neutral_100} size={25} onPress={() => console.log('Pressed')} />,
            headerTitle: 'See all food recipe',
          }}
        />
        {/* <RootStack.Screen
          name="Dashboard"
          component={DashboardScreen}
          options={{
            header: () => (
              <View style={{ marginTop: 40, marginHorizontal: 20 }}>
                <Text style={AppTextStyle.h4(AppColors.Neutral_100, 20)}>Find best recipes</Text>
                <Text style={AppTextStyle.h4(AppColors.Neutral_100, 20)}>for cooking</Text>
              </View>
            ),
            headerTitleAlign: 'left',
            headerBackVisible: false,
            headerShadowVisible: false,
            headerTitleStyle: AppTextStyle.h4(AppColors.Neutral_100, 20),
            headerStyle: {
              backgroundColor: AppColors.Neutral_0,
              elevation: 0,
              shadowOpacity: 0,
            },
          }}
        /> */}
        <RootStack.Screen name="NotFound" component={NotFoundScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
export default RootStackNavigation;
