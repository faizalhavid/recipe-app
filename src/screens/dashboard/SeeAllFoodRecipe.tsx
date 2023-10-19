import React, { useEffect } from 'react';
import { Text, View } from 'native-base';
import { AppStack } from '../../components/AppStack';
import { AppColors } from '../../commons/colors';
import { Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import { VideoCard } from '../../components/Card/VideoCard';
import { AppTextStyle } from '../../commons/textStyle';
import { ingredientsIcons } from '../../constant/ingredientIcons';
import { AxiosClient } from '../../services/axios-client';
import { createShimmerPlaceHolder } from 'expo-shimmer-placeholder';
import { LinearGradient } from 'expo-linear-gradient';
import { navigate } from '../../navigations/rootNavigator';

const category = ['meat', 'pork', 'powder', 'vegetable', 'fruit', 'seafood'];

type SeeAllFoodRecipeProps = {
  route: any;
};

export function SeeAllFoodRecipe({ route }: SeeAllFoodRecipeProps) {
  const author = route.params.author;
  const [food, setFood] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [clickedIndex, setClickedIndex] = React.useState(-1);
  const ShimmerPlaceHolder = createShimmerPlaceHolder(LinearGradient);
  const fetchData = async (category: string) => {
    setLoading(true);
    try {
      const response = await AxiosClient.get(`complexSearch?query=${category}&number=6`);
      const data = response.data.results.map((item: object) => ({
        ...item,
        likes: (Math.random() * 5).toFixed(1),
        reviews: (Math.random() * 100).toFixed(0),
      }));
      setFood(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData('meat');
    setClickedIndex(0);
  }, [setFood]);

  return (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 20, paddingVertical: 15 }} style={{ backgroundColor: AppColors.Neutral_0 }}>
      <Text style={[AppTextStyle.h4(AppColors.Neutral_100, 16), { paddingVertical: 8 }]}> Category By Ingredients</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingVertical: 8 }}>
        {category.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={{ marginRight: 10 }}
            delayPressIn={0}
            delayLongPress={0}
            onPress={() => {
              setClickedIndex(index);
              fetchData(item);
            }}
          >
            <AppStack direction="row" style={{ paddingVertical: 4, paddingHorizontal: 8, backgroundColor: clickedIndex === index ? AppColors.Primary_60 : AppColors.Neutral_10, borderRadius: 10, marginBottom: 5 }} spacing={5}>
              <Text> {ingredientsIcons(item)}</Text>
              <Text style={AppTextStyle.p(clickedIndex === index ? AppColors.Neutral_0 : AppColors.Neutral_60, 12)}> {item}</Text>
            </AppStack>
          </TouchableOpacity>
        ))}
      </ScrollView>
      {loading ? (
        <View style={{ flexDirection: 'column', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          {[...Array(6)].map((_, index) => (
            <AppStack key={index} direction="column" style={{ width: 370, marginBottom: 20 }} spacing={10}>
              <ShimmerPlaceHolder style={{ width: '100%', height: 200, borderRadius: 10 }} />
              <ShimmerPlaceHolder style={{ width: '100%', height: 20, borderRadius: 10 }} />
              <ShimmerPlaceHolder style={{ width: '100%', height: 20, borderRadius: 10 }} />
            </AppStack>
          ))}
        </View>
      ) : (
        <>
          {food.map((item, index) => (
            <VideoCard
              key={index}
              image={item.image}
              title={item.title}
              author={author.name}
              likes={item.likes}
              width={365}
              style={{ marginBottom: 20 }}
              onPress={() =>
                navigate('DetailFoodRecipe', {
                  food: item,
                  author: author,
                })
              }
            />
          ))}
        </>
      )}
    </ScrollView>
  );
}
