import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { AppColors } from '../../commons/colors';
import { Chip, Searchbar } from 'react-native-paper';
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
      <View style={{ height: 300 }}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <AppCard likes="4.5" title="How to make sushi at home" author="Niki Samentha" authorImage="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=377&q=80" />
          <AppCard likes="4.5" title="How to make sushi at home" author="Niki Samentha" authorImage="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=377&q=80" />
          <AppCard likes="4.5" title="How to make sushi at home" author="Niki Samentha" authorImage="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=377&q=80" />
        </ScrollView>
      </View>
      <Text style={AppTextStyle.h4(AppColors.Neutral_100, 18)}>Popular category</Text>
      <View style={{ height: 50 }}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Chip onPress={() => console.log('Pressed')} style={styles.chip} textStyle={{ color: AppColors.Primary_50 }}>
            Breakfast
          </Chip>
          <Chip onPress={() => console.log('Pressed')} style={styles.chip} textStyle={{ color: AppColors.Primary_50 }}>
            Salad
          </Chip>
          <Chip onPress={() => console.log('Pressed')} style={styles.chip} textStyle={{ color: AppColors.Primary_50 }}>
            Appetizer
          </Chip>
          <Chip onPress={() => console.log('Pressed')} style={styles.chip} textStyle={{ color: AppColors.Primary_50 }}>
            Dinner
          </Chip>
          <Chip onPress={() => console.log('Pressed')} style={styles.chip} textStyle={{ color: AppColors.Primary_50 }}>
            Cake
          </Chip>
          <Chip onPress={() => console.log('Pressed')} style={styles.chip} textStyle={{ color: AppColors.Primary_50 }}>
            Soup
          </Chip>
        </ScrollView>
      </View>
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
  chip: { height: 32, backgroundColor: AppColors.Neutral_0, marginRight: 5 },
});
