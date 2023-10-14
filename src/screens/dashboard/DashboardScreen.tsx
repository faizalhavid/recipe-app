import { View, Text, StyleSheet } from 'react-native';
import { AppColors } from '../../commons/colors';
import { Searchbar } from 'react-native-paper';
import * as React from 'react';
import { SetStateAction } from 'react';
import { AppTextStyle } from '../../commons/textStyle';
import AppSafeAreaView from '../../components/AppSafeAreaView';
import { AppStack } from '../../components/AppStack';
import { navigate } from '../../navigations/rootNavigator';
import Ionicons from '@expo/vector-icons/Ionicons';
import { AppButton } from '../../components/AppButton';
import Spacer from '../../components/Spacer';
import { AppCard } from '../../components/Card';

export function DashboardScreen() {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = (query: SetStateAction<string>) => setSearchQuery(query);
  return (
    <AppSafeAreaView>
      <Searchbar placeholder="Search recipes" onChangeText={onChangeSearch} value={searchQuery} icon="magnify" style={styles.searchbar} inputStyle={AppTextStyle.p(AppColors.Neutral_30)} />
      <Spacer top={20} />
      <AppStack direction="row" justifyContent="space-between">
        <Text style={AppTextStyle.h4(AppColors.Neutral_100, 18)}>Trending now 🔥</Text>
        <AppButton spacing={5} title="See all" textStyle={{ color: AppColors.Primary_30, fontFamily: 'Popins-SemiBold', fontSize: 14 }} onPress={() => navigate('Dashboard')} backgroundcolor={'transparent'} height={5} width={20} suffix={<Ionicons name="ios-arrow-forward" size={23} color={AppColors.Primary_30} style={{ fontWeight: '400' }} />} />
      </AppStack>
      <Spacer top={20} />
      <AppCard />
    </AppSafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.Neutral_0,
  },

  searchbar: {
    backgroundColor: AppColors.Neutral_0,
    borderColor: AppColors.Neutral_30,
    borderWidth: 1,
    borderRadius: 15,
  },
});
