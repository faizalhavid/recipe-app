import { View, Text, SafeAreaView, ImageBackground, StyleSheet, Dimensions } from 'react-native';

import { AppStatusBar } from '../../components/AppStatusBar';
import { AppColors } from '../../commons/colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import { AppStack } from '../../components/AppStack';
import { AppTextStyle } from '../../commons/textStyle';
import Spacer from '../../components/Spacer';
import { LinearGradient } from 'expo-linear-gradient';
import { AppButton } from '../../components/AppButton';
import { color } from 'native-base/lib/typescript/theme/styled-system';
import { navigate } from '../../navigations/rootNavigator';

function WelcomeScreen() {
  let { width, height } = Dimensions.get('window');
  return (
    <SafeAreaView style={styles.container}>
      <AppStatusBar color={AppColors.Neutral_100} />
      <ImageBackground style={{ flex: 1 }} source={require('../../../assets/images/backgroun-welcome.jpg')}>
        <LinearGradient colors={['transparent', 'rgba(0,0,0,0.4)']} style={styles.linearGradient}>
          <AppStack direction="row" alignItems="center" justifyContent="center" alignContent="space-between" spacing={3} paddingHorizontal={40} paddingVertical={30}>
            <Ionicons name="star" size={24} color={AppColors.Neutral_0} style={{}} />
            <Spacer left={8} />
            <Text style={AppTextStyle.h5(AppColors.Neutral_0)}>60k+</Text>
            <Text style={AppTextStyle.p(AppColors.Neutral_0)}>Premium recipes</Text>
          </AppStack>

          <Spacer top={height / 2} />
          <AppStack direction="column" alignItems="center" justifyContent="flex-start" spacing={0}>
            <Text style={AppTextStyle.h4(AppColors.Neutral_0, 39)}>Let's</Text>
            <Text style={AppTextStyle.h4(AppColors.Neutral_0, 39)}>Cooking</Text>
            <Text style={AppTextStyle.p(AppColors.Neutral_0)}>Find best recipes for cooking</Text>
            <Spacer top={20} />
            <AppButton spacing={10} title="Get Started" textStyle={{ color: AppColors.Neutral_0, fontFamily: 'Popins-Medium', fontSize: 16 }} onPress={() => navigate('BottomTabNavigator')} backgroundcolor={AppColors.Primary_50} height={15} width={40} suffix={<Ionicons name="ios-arrow-forward" size={20} color={AppColors.Neutral_0} style={{ fontWeight: '100' }} />} />
          </AppStack>
        </LinearGradient>
      </ImageBackground>
    </SafeAreaView>
  );
}
export default WelcomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleStyle: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
  },
  centerContentStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  linearGradient: {
    flex: 1,
  },
});
