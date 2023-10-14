import * as Font from 'expo-font';

export const useFonts = async () =>
  await Font.loadAsync({
    'Popins-ExtraBold': require('../../assets/fonts/Poppins-ExtraBold.ttf'),
    'Popins-Bold': require('../../assets/fonts/Poppins-Bold.ttf'),
    'Popins-Regular': require('../../assets/fonts/Poppins-Regular.ttf'),
    'Popins-Medium': require('../../assets/fonts/Poppins-Medium.ttf'),
    'Popins-SemiBold': require('../../assets/fonts/Poppins-SemiBold.ttf'),
  });
