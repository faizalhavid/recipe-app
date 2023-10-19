import React, { useEffect } from 'react';
import { AxiosClient } from '../../services/axios-client';
import { ScrollView } from 'native-base';
import { Image, Text, View } from 'react-native';
import { AppColors } from '../../commons/colors';
import { AppTextStyle } from '../../commons/textStyle';
import Spacer from '../../components/Spacer';
import { AppStack } from '../../components/AppStack';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Avatar, Button, Chip, List } from 'react-native-paper';
import { Entypo } from '@expo/vector-icons';
import { ingredientsIcons } from '../../constant/ingredientIcons';
import { createShimmerPlaceHolder } from 'expo-shimmer-placeholder';
import { LinearGradient } from 'expo-linear-gradient';

type Ingredient = {
  name: string;
  amount: {
    metric: {
      value: number;
    };
  };
};

type Instruction = {
  step: string;
  ingredients: Ingredient[];
};

type DetailFoodRecipeProps = {
  route: any;
};

export function DetailFoodRecipe({ route }: DetailFoodRecipeProps) {
  const { food, author } = route.params;
  const [ingredients, setingredients] = React.useState([]);
  const [instruction, setinstruction] = React.useState([]);
  const ShimmerPlaceHolder = createShimmerPlaceHolder(LinearGradient);
  const [loading, setLoading] = React.useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await AxiosClient.get(`${food.id}/ingredientWidget.json`);
      const data = response.data.ingredients.map((item: object) => ({
        ...item,
      }));
      setingredients(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  const fetchInstruction = async () => {
    setLoading(true);
    try {
      const response = await AxiosClient.get(`${food.id}/analyzedInstructions`);
      const data = response.data[0].steps.map((item: object) => ({
        ...item,
      }));
      setinstruction(data);
      console.log(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
    fetchInstruction();
  }, [setingredients]);

  return (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 20, paddingVertical: 15 }} style={{ backgroundColor: AppColors.Neutral_0 }}>
      <Text style={AppTextStyle.h4(AppColors.Neutral_90, 20)}>{food.title}</Text>
      <Spacer top={10} />
      <Image source={food.image ? { uri: food.image } : require('../../../assets/images/unknown-image.png')} style={{ height: 200, width: 370, borderRadius: 20 }} resizeMode="cover" />

      <AppStack direction="row" spacing={5} alignItems="center" alignContent="center" style={{ marginTop: 20, width: 150 }}>
        <Ionicons name="star" size={14} color={AppColors.Rating_100} style={{}} />
        <Text style={AppTextStyle.h4(AppColors.Neutral_100, 14)}>{food.likes}</Text>
        <Text style={AppTextStyle.p(AppColors.Neutral_60, 14)}>
          {'('}
          {food.reviews}
          {' reviews )'}
        </Text>
      </AppStack>

      <List.Item
        title={author.name || 'Unknown Author'}
        description={() => (
          <AppStack direction="row" alignItems="center" alignContent="center" justifyContent="space-between" style={{ width: 160 }}>
            <Ionicons name="location" size={15} color={AppColors.Primary_40} style={{}} />
            <Text style={AppTextStyle.p(AppColors.Neutral_60, 12)}>{author.address}</Text>
          </AppStack>
        )}
        style={{ width: 400 }}
        left={() => <Avatar.Image size={35} source={require('../../../assets/images/author.jpg')} theme={{ colors: { primary: 'white' } }} style={{ marginTop: 10 }} />}
        right={() => (
          <Button mode="contained" theme={{ colors: { primary: AppColors.Primary_50 } }} style={{ borderRadius: 20, height: 45, width: 100 }}>
            Follow
          </Button>
        )}
      />

      <AppStack direction={'row'} justifyContent="space-between" alignItems="center">
        <Text style={AppTextStyle.h4(AppColors.Neutral_100, 16)}>Integredients</Text>
        {loading ? <ShimmerPlaceHolder style={{ width: 80, height: 10, borderRadius: 10 }} /> : <Text style={AppTextStyle.p(AppColors.Neutral_40, 12)}>{ingredients.length} items</Text>}
      </AppStack>
      <Spacer top={5} />
      <List.Section>
        {loading
          ? [...Array(8)].map((_, index) => <ShimmerPlaceHolder key={index} style={{ width: '100%', height: 60, borderRadius: 10, marginVertical: 5 }} />)
          : ingredients.map((item: Ingredient, index: number) => (
              <List.Item
                style={{ backgroundColor: AppColors.Neutral_10, marginVertical: 5, borderRadius: 10, padding: 8 }}
                key={index}
                title={() => (
                  <Text style={[AppTextStyle.h4(AppColors.Neutral_100, 14), { paddingVertical: 5, maxWidth: 160 }]} numberOfLines={2}>
                    {item.name}
                  </Text>
                )}
                left={() => (
                  <View style={{ paddingHorizontal: 15, backgroundColor: AppColors.Neutral_0, borderRadius: 5, justifyContent: 'center' }}>
                    <Text style={{ fontSize: 19 }}>{ingredientsIcons(item.name)}</Text>
                  </View>
                )}
                right={() => <Text style={[AppTextStyle.p(AppColors.Neutral_60, 12), { paddingVertical: 15 }]}>{item.amount.metric.value}gr</Text>}
                centered
              />
            ))}
      </List.Section>

      <AppStack direction={'row'} justifyContent="space-between" alignItems="center">
        <Text style={AppTextStyle.h4(AppColors.Neutral_100, 16)}>Steps</Text>
        {loading ? <ShimmerPlaceHolder style={{ width: 80, height: 10, borderRadius: 10 }} /> : <Text style={AppTextStyle.p(AppColors.Neutral_40, 12)}>{instruction.length} steps</Text>}
      </AppStack>

      <List.Section>
        {loading
          ? [...Array(8)].map((_, index) => <ShimmerPlaceHolder key={index} style={{ width: '100%', height: 60, borderRadius: 10, marginVertical: 5 }} />)
          : instruction.map((item: Instruction, index: number) => (
              <List.Item
                key={index}
                title={() => (
                  <Text style={[AppTextStyle.p(AppColors.Neutral_60, 14), { paddingVertical: 5, maxWidth: 280 }]} numberOfLines={8}>
                    {item.step}
                  </Text>
                )}
                description={() => (
                  <>
                    {item.ingredients.length > 0 && <Text style={[AppTextStyle.h4(AppColors.Neutral_100, 14), { paddingVertical: 5 }]}>Ingredients</Text>}
                    <AppStack direction="row" alignItems="center" justifyContent="flex-start" spacing={5} style={{ width: 308, flexWrap: 'wrap' }}>
                      {item.ingredients.map((ingredient: object, ingredientIndex: number) => (
                        <AppStack direction="row" key={ingredientIndex} style={{ paddingVertical: 4, paddingHorizontal: 8, backgroundColor: AppColors.Neutral_20, borderRadius: 10, marginBottom: 5 }} spacing={5}>
                          <Text> {ingredientsIcons(ingredient.name)}</Text>
                          <Text style={AppTextStyle.p(AppColors.Neutral_60, 12)}>{ingredient.name}</Text>
                        </AppStack>
                      ))}
                    </AppStack>
                  </>
                )}
                style={{ backgroundColor: AppColors.Neutral_10, marginVertical: 5, borderRadius: 10, padding: 8 }}
                left={() => <Entypo name="dot-single" size={24} color="black" />}
                centered
              />
            ))}
      </List.Section>
    </ScrollView>
  );
}
