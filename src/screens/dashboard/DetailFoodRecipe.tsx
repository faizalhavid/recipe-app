import { ScrollView } from 'native-base';
import { Image, Text, View } from 'react-native';
import { AppColors } from '../../commons/colors';
import { AppTextStyle } from '../../commons/textStyle';
import Spacer from '../../components/Spacer';
import { AppStack } from '../../components/AppStack';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Avatar, Button, List } from 'react-native-paper';
import { Entypo } from '@expo/vector-icons';

type DetailFoodeRecipeProps = {
  imageFood?: string;
  title?: string;
  author?: string;
  authorImage?: string;
  Ingredients?: object[];
  steps?: object[];
};

export function DetailFoodRecipe({ title, imageFood, author, authorImage, Ingredients, steps }: DetailFoodeRecipeProps) {
  title = 'How to make sushi at home';
  Ingredients = [
    {
      material: 'bread',
      quantity: '200',
    },
    {
      material: 'egg',
      quantity: '200',
    },
    {
      material: 'milk',
      quantity: '200',
    },
    {
      material: 'butter',
      quantity: '200',
    },
  ];
  steps = [
    {
      step: 'lorems',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.',
    },
    {
      step: 'lorems',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.',
    },
    {
      step: 'lorems',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.',
    },
    {
      step: 'lorems',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.',
    },
  ];
  const ingredientsIcons = (material: string) => {
    let ingredientsIcons = '';
    switch (material) {
      case 'bread':
        ingredientsIcons = '🍞';
        break;
      case 'egg':
        ingredientsIcons = '🥚';
        break;
      case 'milk':
        ingredientsIcons = '🥛';
        break;
      case 'butter':
        ingredientsIcons = '🧈';
        break;

      default:
        ingredientsIcons = '🍪';
        break;
    }
    return ingredientsIcons;
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 20, paddingVertical: 15 }} style={{ backgroundColor: AppColors.Neutral_0 }}>
      <Text style={AppTextStyle.h4(AppColors.Neutral_90, 20)}>{title}</Text>
      <Spacer top={10} />
      <Image source={imageFood ? { uri: imageFood } : require('../../../assets/images/unknown-image.png')} style={{ height: 200, maxWidth: 370, borderRadius: 20 }} resizeMode="cover" />
      <AppStack direction="row" justifyContent="space-between" alignItems="center" alignContent="center" style={{ marginTop: 20, width: 165 }}>
        <Ionicons name="star" size={14} color={AppColors.Rating_100} style={{}} />
        <Text style={AppTextStyle.h4(AppColors.Neutral_100, 14)}>4,5</Text>
        <Text style={AppTextStyle.p(AppColors.Neutral_60, 14)}>{'(300 Reviews)'}</Text>
      </AppStack>

      <List.Item
        title={author || 'Niki Samentha'}
        description={() => (
          <AppStack direction="row" alignItems="center" alignContent="center" justifyContent="space-between" style={{ width: 120 }}>
            <Ionicons name="location" size={15} color={AppColors.Primary_40} style={{}} />
            <Text style={AppTextStyle.p(AppColors.Neutral_60, 12)}>Bali , Indonesia</Text>
          </AppStack>
        )}
        style={{ width: 400 }}
        left={() => (
          <Avatar.Image
            size={35}
            source={{
              uri: authorImage || 'https://cdn-icons-png.flaticon.com/512/64/64572.png',
            }}
            theme={{ colors: { primary: 'white' } }}
          />
        )}
        right={() => (
          <Button mode="contained" theme={{ colors: { primary: AppColors.Primary_50 } }} style={{ borderRadius: 20, height: 45, width: 100 }}>
            Follow
          </Button>
        )}
      />

      <AppStack direction={'row'} justifyContent="space-between" alignItems="center">
        <Text style={AppTextStyle.h4(AppColors.Neutral_100, 16)}>Integredients</Text>
        <Text style={AppTextStyle.p(AppColors.Neutral_40, 12)}>{Ingredients.length} items</Text>
      </AppStack>
      <Spacer top={5} />
      <List.Section>
        {Ingredients.map((item, index) => (
          <List.Item
            style={{ backgroundColor: AppColors.Neutral_10, marginVertical: 5, borderRadius: 10, padding: 8 }}
            key={index}
            title={item.material}
            titleStyle={[AppTextStyle.h4(AppColors.Neutral_100, 14), { paddingVertical: 15 }]}
            left={() => (
              <View style={{ paddingHorizontal: 15, backgroundColor: AppColors.Neutral_0, borderRadius: 5, justifyContent: 'center' }}>
                <Text style={{ fontSize: 19 }}>{ingredientsIcons(item.material)}</Text>
              </View>
            )}
            right={() => <Text style={[AppTextStyle.p(AppColors.Neutral_60, 12), { paddingVertical: 15 }]}>{item.quantity} gr</Text>}
            centered
          />
        ))}
      </List.Section>

      <AppStack direction={'row'} justifyContent="space-between" alignItems="center">
        <Text style={AppTextStyle.h4(AppColors.Neutral_100, 16)}>Steps</Text>
        <Text style={AppTextStyle.p(AppColors.Neutral_40, 12)}>{Ingredients.length} items</Text>
      </AppStack>

      <List.Section>
        {steps.map((item, index) => (
          <List.Item key={index} title={item.step} titleStyle={[AppTextStyle.h4(AppColors.Neutral_100, 14)]} description={item.description} descriptionStyle={[AppTextStyle.p(AppColors.Neutral_60, 12)]} left={() => <Entypo name="dot-single" size={24} color="black" />} centered />
        ))}
      </List.Section>
    </ScrollView>
  );
}
