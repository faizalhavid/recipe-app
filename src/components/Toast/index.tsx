import { ToastAndroid } from 'react-native';

export function Toast(message: string) {
  ToastAndroid.showWithGravity(message, ToastAndroid.SHORT, ToastAndroid.CENTER);
}
