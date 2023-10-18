import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { AppColors } from '../../commons/colors';
import { Avatar, Chip, Searchbar } from 'react-native-paper';
import React, { useEffect } from 'react';
import { SetStateAction } from 'react';
import { AppTextStyle } from '../../commons/textStyle';
import { AppStack } from '../../components/AppStack';
import { navigate } from '../../navigations/rootNavigator';
import Ionicons from '@expo/vector-icons/Ionicons';
import { AppButton } from '../../components/AppButton';
import Spacer from '../../components/Spacer';
import { VideoCard } from '../../components/Card/VideoCard';
import { FoodCard } from '../../components/Card/FoodCard';
import { AxiosClient } from '../../services/axios-client';
import { createShimmerPlaceHolder } from 'expo-shimmer-placeholder';
import { LinearGradient } from 'expo-linear-gradient';
import { Toast } from '../../components/Toast';

export function DashboardScreen() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [chickenFood, setChickenFood] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const author = {
    name: 'Moh. Faizal Norhavid',
    email: 'nurhavid123@gmail.com',
    address: 'Surabaya, Indonesia',
    phone: '081234567890',
  };

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
  const ShimmerPlaceHolder = createShimmerPlaceHolder(LinearGradient);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await AxiosClient.get('complexSearch?query=chicken&number=6');
        const data = response.data.results.map((item: object) => ({
          ...item,
          likes: (Math.random() * 5).toFixed(1),
          reviews: (Math.random() * 100).toFixed(0),
        }));
        setChickenFood(data);
        setLoading(false);
      } catch (error) {
        Toast('Error fetching data , try again later !');
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [setChickenFood]);

  const onChangeSearch = (query: SetStateAction<string>) => setSearchQuery(query);
  return (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 20 }} style={{ backgroundColor: AppColors.Neutral_0 }}>
      <Searchbar placeholder="Search recipes" onChangeText={onChangeSearch} value={searchQuery} icon="magnify" style={styles.searchbar} inputStyle={AppTextStyle.p(AppColors.Neutral_30)} />
      <Spacer top={20} />
      <AppStack direction="row" justifyContent="space-between">
        <Text style={AppTextStyle.h4(AppColors.Neutral_100, 18)}>Chicken Trending 🔥</Text>
        <AppButton spacing={5} title="See all" textStyle={{ color: AppColors.Primary_30, fontFamily: 'Popins-SemiBold', fontSize: 14 }} onPress={() => navigate('Dashboard')} backgroundcolor={'transparent'} height={5} width={20} suffix={<Ionicons name="ios-arrow-forward" size={23} color={AppColors.Primary_30} style={{ fontWeight: '400' }} />} />
      </AppStack>
      <Spacer top={20} />
      <View style={{ height: 280 }}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {loading
            ? [...Array(3)].map((_, index) => (
                <AppStack key={index} direction="column" spacing={12} style={{ marginRight: 15 }}>
                  <ShimmerPlaceHolder style={{ width: 260, height: 180, borderRadius: 15 }} />
                  <ShimmerPlaceHolder style={{ width: 80, height: 10, borderRadius: 25 }} />
                  <AppStack direction="row" spacing={15} alignItems="center" alignContent="center">
                    <ShimmerPlaceHolder style={{ width: 40, height: 40, borderRadius: 50 }} />
                    <ShimmerPlaceHolder style={{ width: 80, height: 10, borderRadius: 15 }} />
                  </AppStack>
                </AppStack>
              ))
            : chickenFood.map((item, index) => (
                <VideoCard
                  key={index}
                  author={author.name}
                  authorImage={author.image}
                  title={item.title}
                  likes={item.likes}
                  image={item.image}
                  style={{ marginRight: 10 }}
                  width={290}
                  onPress={() =>
                    navigate('DetailFoodRecipe', {
                      food: item,
                      author: author,
                    })
                  }
                />
              ))}
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
