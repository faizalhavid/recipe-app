import { Center, Spinner, useColorModeValue, VStack } from 'native-base';
import React from 'react';
import { Dimensions, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppColors } from '../../commons/colors';
// import AppBannerWrapper from '../AppBannerWrapper';
// import { AppStatusBar } from '../AppStatusBar';

type AppSafeAreaViewProps = {
  bg?: string;
  mt?: number;
  statusBarColor?: string;
  children?: React.ReactNode;
  loading?: boolean;
};

function AppSafeAreaView({ bg, mt = 0, statusBarColor, children, loading }: AppSafeAreaViewProps): JSX.Element {
  return (
    <SafeAreaView
      edges={['right', 'left']}
      // mode="margin"
      style={{
        flex: 1,
        flexDirection: 'column',
        backgroundColor: bg || useColorModeValue('white', 'black'),
        paddingVertical: 20,
        paddingHorizontal: 20,
      }}
    >
      {/* <AppStatusBar color={statusBarColor || useColorModeValue('white', 'black')} /> */}
      {/* <AppBannerWrapper /> */}
      {loading && (
        <View
          style={{
            position: 'absolute',
            width: '100%',
            height: Dimensions.get('screen').height,
            backgroundColor: 'rgba(0,0,0,0.5)',
            zIndex: 999,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Center>
            <VStack>
              <Spinner size="lg" />
            </VStack>
          </Center>
        </View>
      )}
      {children}
    </SafeAreaView>
  );
}

export default AppSafeAreaView;
