import React from 'react';
import { StatusBar, StyleSheet, useColorScheme } from 'react-native';
import { AppColors } from '../../commons/colors';

type SearchFieldProps = {
  color?: string | undefined;
  barStyle?: 'light-content' | 'dark-content' | undefined;
};

export function SearchField({ color, barStyle }: SearchFieldProps) {
  return <StatusBar animated backgroundColor={color} barStyle={barStyle} showHideTransition="slide" hidden={false} />;
}
