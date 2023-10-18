import React from 'react';
import { View, StyleSheet, ToastAndroid, Button, StatusBar } from 'react-native';

export function Toast(message: string) {
  ToastAndroid.showWithGravity(message, ToastAndroid.SHORT, ToastAndroid.CENTER);
}
