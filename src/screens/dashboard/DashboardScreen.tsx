import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { AppColors } from '../../commons/colors';
import { Avatar, Chip, Searchbar } from 'react-native-paper';
import * as React from 'react';
import { SetStateAction } from 'react';
import { AppTextStyle } from '../../commons/textStyle';
import { AppStack } from '../../components/AppStack';
import { navigate } from '../../navigations/rootNavigator';
import Ionicons from '@expo/vector-icons/Ionicons';
import { AppButton } from '../../components/AppButton';
import Spacer from '../../components/Spacer';
import { VideoCard } from '../../components/Card/VideoCard';
import { FoodCard } from '../../components/Card/FoodCard';

export function DashboardScreen() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const Creator = (imageUri?: string, name?: string) => {
    return (
      <AppStack direction="column" style={{ width: 60, marginRight: 15 }} spacing={10}>
        <Avatar.Image
          size={60}
          source={{
            uri: imageUri || 'https://cdn-icons-png.flaticon.com/512/64/64572.png',
          }}
          theme={{ colors: { primary: 'white' } }}
        />
        <Text style={[AppTextStyle.h4(AppColors.Neutral_100, 10), { textAlign: 'center' }]} numberOfLines={2} ellipsizeMode="tail">
          {name}
        </Text>
      </AppStack>
    );
  };

  const onChangeSearch = (query: SetStateAction<string>) => setSearchQuery(query);
  return (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 20 }} style={{ backgroundColor: AppColors.Neutral_0 }}>
      <Searchbar placeholder="Search recipes" onChangeText={onChangeSearch} value={searchQuery} icon="magnify" style={styles.searchbar} inputStyle={AppTextStyle.p(AppColors.Neutral_30)} />
      <Spacer top={20} />
      <AppStack direction="row" justifyContent="space-between">
        <Text style={AppTextStyle.h4(AppColors.Neutral_100, 18)}>Trending now 🔥</Text>
        <AppButton spacing={5} title="See all" textStyle={{ color: AppColors.Primary_30, fontFamily: 'Popins-SemiBold', fontSize: 14 }} onPress={() => navigate('Dashboard')} backgroundcolor={'transparent'} height={5} width={20} suffix={<Ionicons name="ios-arrow-forward" size={23} color={AppColors.Primary_30} style={{ fontWeight: '400' }} />} />
      </AppStack>
      <Spacer top={20} />
      <View style={{ height: 280 }}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <VideoCard likes="4.5" onPress={() => navigate('DetailFoodRecipe')} style={{ marginRight: 10 }} title="How to make sushi at home" author="Niki Samentha" authorImage="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=377&q=80" width={290} />
          <VideoCard likes="4.5" style={{ marginRight: 10 }} title="How to make sushi at home" author="Niki Samentha" authorImage="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=377&q=80" width={290} />
          <VideoCard likes="4.5" style={{ marginRight: 10 }} title="How to make sushi at home" author="Niki Samentha" authorImage="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=377&q=80" width={290} />
        </ScrollView>
      </View>
      <Text style={AppTextStyle.h4(AppColors.Neutral_100, 18)}>Popular category</Text>
      <Spacer top={5} />
      <View style={{ height: 60 }}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Chip onPress={() => console.log('Pressed')} style={styles.chip} textStyle={{ color: AppColors.Primary_50 }}>
            Breakfast
          </Chip>
          <Chip onPress={() => console.log('Pressed')} style={{ height: 35, backgroundColor: AppColors.Primary_50, marginRight: 5 }} textStyle={{ color: AppColors.Neutral_0 }}>
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

      <View style={{ height: 260 }}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <FoodCard title="Pepper sweetcorn ramen" time="20" />
          <FoodCard title="Pepper sweetcorn ramen" time="20" />
          <FoodCard title="Pepper sweetcorn ramen" time="20" />
          <FoodCard title="Pepper sweetcorn ramen" time="20" />
          <FoodCard title="Pepper sweetcorn ramen" time="20" />
        </ScrollView>
      </View>
      <AppStack direction="row" justifyContent="space-between">
        <Text style={AppTextStyle.h4(AppColors.Neutral_100, 18)}>Popular creators</Text>
        <AppButton spacing={5} title="See all" textStyle={{ color: AppColors.Primary_30, fontFamily: 'Popins-SemiBold', fontSize: 14 }} onPress={() => navigate('Dashboard')} backgroundcolor={'transparent'} height={5} width={20} suffix={<Ionicons name="ios-arrow-forward" size={23} color={AppColors.Primary_30} style={{ fontWeight: '400' }} />} />
      </AppStack>
      <Spacer top={5} />
      <View style={{ height: 110 }}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {Creator(undefined, 'James Bordan')}
          {Creator('https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=377&q=80', 'Katty Carline')}
          {Creator(undefined, 'James Bordan')}
          {Creator('https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=377&q=80', 'Katty Carline')}
          {Creator(undefined, 'James Bordan')}
          {Creator('https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=377&q=80', 'Katty Carline')}
          {Creator(undefined, 'James Bordan')}
          {Creator('https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=377&q=80', 'Katty Carline')}
        </ScrollView>
      </View>
    </ScrollView>
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
  chip: { height: 35, backgroundColor: AppColors.Neutral_0, marginRight: 5 },
});
