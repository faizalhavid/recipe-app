import { View, Text, Image } from 'native-base';
import { StyleSheet } from 'react-native';
import { AppColors } from '../../../commons/colors';
import { AppTextStyle } from '../../../commons/textStyle';
import { AppStack } from '../../AppStack';
import Ionicons from '@expo/vector-icons/Ionicons';
import { IconButton } from 'react-native-paper';

type FoodCardProps = {
  title?: string;
  time?: string;
  foodImage?: string;
};

export function FoodCard({ title, time, foodImage }: FoodCardProps) {
  const imageSource = foodImage ? { uri: foodImage } : require('../../../../assets/images/food-circle.png');
  return (
    <View style={styles.wrapper}>
      <View style={styles.foodCircle}>
        <Image source={imageSource} style={styles.foodImage} alt="Food Circle" />
      </View>
      <View style={styles.foodContainer}>
        <Text style={[AppTextStyle.h4(AppColors.Neutral_100, 14), { textAlign: 'center' }]}>{title}</Text>
        <AppStack direction={'row'} justifyContent="space-between" alignContent="center" alignItems="center">
          <AppStack direction={'column'}>
            <Text style={AppTextStyle.h5(AppColors.Neutral_60, 12)}>Time</Text>
            <Text style={AppTextStyle.h3(AppColors.Neutral_100, 12)}>{time} min</Text>
          </AppStack>
          <IconButton icon="bookmark-minus-outline" size={16} iconColor={AppColors.Neutral_100} mode="contained" onPress={() => console.log(title)} style={{ backgroundColor: AppColors.Neutral_0 }} />
        </AppStack>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    height: 200,
    width: 175,
    marginRight: 15,
  },
  foodCircle: {
    height: 100,
    width: 100,
    borderRadius: 50,
    backgroundColor: AppColors.Neutral_30,
    shadowColor: AppColors.Neutral_60,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 2,
    shadowRadius: 6.84,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  foodContainer: {
    height: 200,
    width: 175,
    borderRadius: 18,
    position: 'absolute',
    top: 50,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -4,
    backgroundColor: AppColors.Neutral_20,
    shadowOpacity: 0.15,
    shadowRadius: 0,
    elevation: 0,
    justifyContent: 'flex-end',
    padding: 15,
  },

  foodImage: { height: 100, width: 100, borderRadius: 50 },
});