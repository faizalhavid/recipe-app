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

type Food = {
  id: number;
  title: string;
  image: string;
  likes: string;
  reviews: string;
  time: string;
};
type Author = {
  name: string;
  email: string;
  address: string;
  phone: string;
  image?: string;
};

const popularCategory = ['Breakfast', 'Salad', 'Appetizer', 'Dinner', 'Cake', 'Soup'];
const author: Author = {
  name: 'Moh. Faizal Norhavid',
  email: 'nurhavid123@gmail.com',
  address: 'Surabaya, Indonesia',
  phone: '081234567890',
};
export function DashboardScreen() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [clickedIndex, setClickedIndex] = React.useState(-1);
  const [trendingFood, setTrendingFood] = React.useState([]);
  const [categoryFood, setCategoryFood] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const ShimmerPlaceHolder = createShimmerPlaceHolder(LinearGradient);

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
  const fetchtrendingFood = async () => {
    try {
      setLoading(true);
      const response = await AxiosClient.get('complexSearch?query=chicken&number=6');
      const data = response.data.results.map((item: object) => ({
        ...item,
        likes: (Math.random() * 5).toFixed(1),
        reviews: (Math.random() * 100).toFixed(0),
      }));
      setTrendingFood(data);
      console.log(data);
      setLoading(false);
    } catch (error: any) {
      setLoading(false);
      if (error.response.status === 402) {
        Toast('You have reached your request limit for today, please try again tomorrow !');
      }
      console.error('Error fetching data:', error);
    }
  };

  const fetchFoodCategory = async (category: string) => {
    try {
      setLoading(true);
      const response = await AxiosClient.get(`complexSearch?query=${category}&number=6`);
      const data = response.data.results.map((item: object) => ({
        ...item,
        time: (Math.random() * 60).toFixed(0),
      }));
      setCategoryFood(data);
      console.log(data);
      setLoading(false);
    } catch (error: any) {
      setLoading(false);
      if (error.response.status === 402) {
        Toast('You have reached your request limit for today, please try again tomorrow !');
      }
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchtrendingFood();
    setClickedIndex(0);
    fetchFoodCategory(popularCategory[0]);
  }, [setClickedIndex]);

  const onChangeSearch = (query: SetStateAction<string>) => setSearchQuery(query);
  return (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 20 }} style={{ backgroundColor: AppColors.Neutral_0 }}>
      <Searchbar placeholder="Search recipes" onChangeText={onChangeSearch} value={searchQuery} icon="magnify" style={styles.searchbar} inputStyle={AppTextStyle.p(AppColors.Neutral_30)} />
      <Spacer top={20} />
      <AppStack direction="row" justifyContent="space-between">
        <Text style={AppTextStyle.h4(AppColors.Neutral_100, 18)}>Chicken Trending 🔥</Text>
        <AppButton spacing={5} title="See all" textStyle={{ color: AppColors.Primary_30, fontFamily: 'Popins-SemiBold', fontSize: 14 }} onPress={() => navigate('SeeAllFoodRecipe', { author: author })} backgroundcolor={'transparent'} height={5} width={20} suffix={<Ionicons name="ios-arrow-forward" size={23} color={AppColors.Primary_30} style={{ fontWeight: '400' }} />} />
      </AppStack>
      <Spacer top={20} />
      <View style={{ height: 280 }}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {loading ? (
            [...Array(3)].map((_, index) => (
              <AppStack key={index} direction="column" spacing={12} style={{ marginRight: 15 }}>
                <ShimmerPlaceHolder style={{ width: 260, height: 180, borderRadius: 15 }} />
                <ShimmerPlaceHolder style={{ width: 80, height: 10, borderRadius: 25 }} />
                <AppStack direction="row" spacing={15} alignItems="center" alignContent="center">
                  <ShimmerPlaceHolder style={{ width: 40, height: 40, borderRadius: 50 }} />
                  <ShimmerPlaceHolder style={{ width: 80, height: 10, borderRadius: 15 }} />
                </AppStack>
              </AppStack>
            ))
          ) : trendingFood.length > 0 ? (
            trendingFood.map((item: Food, index: number) => (
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
            ))
          ) : (
            <AppStack direction="column" alignContent="center" alignItems="center" justifyContent="center" style={{ width: 380, height: 200 }}>
              <Text style={AppTextStyle.h4(AppColors.Neutral_70, 12)}>Something went error, please try again later !</Text>
            </AppStack>
          )}
        </ScrollView>
      </View>
      <Text style={AppTextStyle.h4(AppColors.Neutral_100, 18)}>Popular category</Text>
      <Spacer top={5} />
      <View style={{ height: 60 }}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {popularCategory.map((item, index) => (
            <Chip
              icon={() => <Ionicons name="heart" size={12} color={AppColors.Neutral_0} />}
              key={index}
              style={[styles.chip, { backgroundColor: clickedIndex === index ? AppColors.Primary_60 : AppColors.Neutral_20 }]}
              onPress={() => {
                setClickedIndex(index);
                fetchFoodCategory(item);
              }}
              selected={clickedIndex === index}
              selectedColor={AppColors.Primary_60}
              textStyle={AppTextStyle.h5(clickedIndex === index ? AppColors.Neutral_0 : AppColors.Neutral_60, 12)}
            >
              {item}
            </Chip>
          ))}
        </ScrollView>
      </View>

      <View style={{ height: 260 }}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {loading ? (
            [...Array(3)].map((_, index) => (
              <AppStack key={index} direction="column" spacing={12} style={{ marginRight: 15 }}>
                <ShimmerPlaceHolder style={{ width: 260, height: 180, borderRadius: 15 }} />
                <ShimmerPlaceHolder style={{ width: 80, height: 10, borderRadius: 25 }} />
                <AppStack direction="row" spacing={15} alignItems="center" alignContent="center">
                  <ShimmerPlaceHolder style={{ width: 40, height: 40, borderRadius: 50 }} />
                  <ShimmerPlaceHolder style={{ width: 80, height: 10, borderRadius: 15 }} />
                </AppStack>
              </AppStack>
            ))
          ) : categoryFood.length > 0 ? (
            categoryFood.map((item: Food, index: number) => (
              <FoodCard
                key={index}
                title={item.title}
                foodImage={item.image}
                time={item.time}
                onPress={() =>
                  navigate('DetailFoodRecipe', {
                    food: item,
                  })
                }
              />
            ))
          ) : (
            <AppStack direction="column" alignContent="center" alignItems="center" justifyContent="center" style={{ width: 380, height: 200 }}>
              <Text style={AppTextStyle.h4(AppColors.Neutral_70, 12)}>Something went error, please try again later !</Text>
            </AppStack>
          )}
        </ScrollView>
      </View>
      <AppStack direction="row" justifyContent="space-between">
        <Text style={AppTextStyle.h4(AppColors.Neutral_100, 18)}>Popular creators</Text>
        <AppButton spacing={5} title="See all" textStyle={AppTextStyle.h5(AppColors.Primary_30, 16)} onPress={() => navigate('Dashboard')} backgroundcolor={'transparent'} height={5} width={20} suffix={<Ionicons name="ios-arrow-forward" size={23} color={AppColors.Primary_30} style={{ fontWeight: '400' }} />} />
      </AppStack>
      <Spacer top={5} />
      <View style={{ height: 110 }}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {Creator(undefined, 'James Bordan')}
          {Creator('https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=377&q=80', 'Arlond defai')}
          {Creator(undefined, 'James Bordan')}
          {Creator('https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=377&q=80', 'Arlond defai')}
          {Creator(undefined, 'James Bordan')}
          {Creator('https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=377&q=80', 'Arlond defai')}
          {Creator(undefined, 'James Bordan')}
          {Creator('https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=377&q=80', 'Arlond defai')}
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
  chip: { height: 35, marginRight: 8 },
});
