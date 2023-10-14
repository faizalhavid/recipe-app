import { Ionicons } from '@expo/vector-icons'; // Pastikan Anda telah mengimpor Ionicons dari paket yang sesuai
import { navigation } from '../../navigations/rootNavigator';
import React from 'react';
import { AppColors } from '../../commons/colors';
import { AppTextStyle } from '../../commons/textStyle';

const HeaderOptions = (type: 'title' | 'titleAndIcon' | 'backAndIcon', icon?: React.ReactNode, title?: string) => {
  const backIcon = <Ionicons name="arrow-back" size={24} color="white" style={{ marginLeft: 10 }} onPress={() => navigation.goBack()} />;
  switch (type) {
    case 'title':
      return {
        headerTitle: title,
        headerTitleAlign: 'left',
        headerBackVisible: false,
        headerShadowVisible: false,
        headerTitleStyle: AppTextStyle.h4(AppColors.Neutral_100),
        headerStyle: {
          backgroundColor: AppColors.Neutral_0,
          elevation: 0,
          shadowOpacity: 0,
        },
      };
    case 'titleAndIcon':
      return {
        headerTitle: title,
        headerTitleAlign: 'left',
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: AppColors.Neutral_0,
          elevation: 0,
          shadowOpacity: 0,
        },
        headerRight: () => <Ionicons name="settings" size={24} color="white" style={{ marginRight: 10 }} />,
      };
    case 'backAndIcon':
      return ({}) => ({
        headerTitleAlign: 'center',
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: AppColors.Neutral_0,
          elevation: 0,
          shadowOpacity: 0,
        },
        headerLeft: () => backIcon,
        headerRight: () => <Ionicons name="settings" size={24} color="white" style={{ marginRight: 10 }} />,
      });
    default:
      return {
        headerTitle: title,
        headerTitleAlign: 'center',
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: AppColors.Neutral_0,
          elevation: 0,
          shadowOpacity: 0,
        },
        headerLeft: () => backIcon,
      };
  }
};

export default HeaderOptions;
