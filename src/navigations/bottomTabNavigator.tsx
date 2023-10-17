import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DashboardScreen } from '../.../../screens/dashboard/DashboardScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { AppColors } from '../commons/colors';
import { AppTextStyle } from '../commons/textStyle';
import { BookmarkScreen } from '../screens/bookmark';
import { AppStack } from '../components/AppStack';
import { IconButton } from 'react-native-paper';
const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          tabBarIcon: ({ color, size }) => <AntDesign name="home" color={color} size={size} />,

          tabBarActiveTintColor: AppColors.Primary_50,
          header: () => (
            <View style={{ paddingLeft: 20, paddingVertical: 15, height: 95, backgroundColor: AppColors.Neutral_0 }}>
              <Text style={AppTextStyle.h4(AppColors.Neutral_100, 20)}>Find best recipes</Text>
              <Text style={AppTextStyle.h4(AppColors.Neutral_100, 20)}>for cooking</Text>
            </View>
          ),
          headerTitleAlign: 'left',
          headerShadowVisible: false,
          headerTitleStyle: AppTextStyle.h4(AppColors.Neutral_100, 20),
        }}
      />
      <Tab.Screen
        name="Bookmark"
        component={BookmarkScreen}
        options={{
          tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="bookmark-minus-outline" size={size} color={color} />,

          tabBarActiveTintColor: AppColors.Primary_50,

          header: () => (
            <AppStack direction="row" style={{ paddingHorizontal: 20, paddingVertical: 15, height: 65, backgroundColor: AppColors.Neutral_0 }} justifyContent="space-between" alignItems="center">
              <Text style={AppTextStyle.h4(AppColors.Neutral_100, 20)}>Saved recipes</Text>
              <AppStack direction="row">
                <IconButton icon="video" iconColor={AppColors.Neutral_100} size={25} onPress={() => console.log('Pressed')} />
                <IconButton icon="note-text" iconColor={AppColors.Neutral_100} size={25} onPress={() => console.log('Pressed')} />
              </AppStack>
            </AppStack>
          ),
          headerTitleAlign: 'left',

          headerShadowVisible: false,
          headerTitleStyle: AppTextStyle.h4(AppColors.Neutral_100, 20),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: AppColors.Neutral_0,
    height: 60,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
    borderTopWidth: 0,
    borderTopColor: AppColors.Neutral_0,
  },
});
