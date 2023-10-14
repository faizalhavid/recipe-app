import RootStackNavigation from './src/navigations';
import { NativeBaseProvider, useTheme } from 'native-base';
import React, { useState } from 'react';
import { useFonts } from './src/hook/useFonts';
import { AppLoading } from './src/components/AppLoading';
import { AppColors } from './src/commons/colors';

export default function App() {
  const [IsReady, SetIsReady] = useState(false);

  const LoadFonts = async () => {
    await useFonts();
  };

  return <NativeBaseProvider>{IsReady ? <RootStackNavigation /> : <AppLoading color={AppColors.Primary_30} startAsync={LoadFonts} onFinish={() => SetIsReady(true)} onError={() => {}} />}</NativeBaseProvider>;
}
