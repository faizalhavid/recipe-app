import { Text, View } from 'react-native';
import AppSafeAreaView from '../../components/AppSafeAreaView';
import { AppStack } from '../../components/AppStack';
import { Avatar, Button, DataTable } from 'react-native-paper';
import { AppColors } from '../../commons/colors';
import { AppTextStyle } from '../../commons/textStyle';
import Spacer from '../../components/Spacer';
import { Border } from '../../components/Border';

type profileProps = {
  user: object;
};

export function Profile({ user }: profileProps) {
  user = {
    name: 'Niki Samentha',
    email: 'niki@gmail.com',
    image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=377&q=80',
    bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.',
    address: 'Jl. Raya Bogor, Jakarta Timur',
  };
  return (
    <AppSafeAreaView>
      <AppStack direction="row" justifyContent="space-between" alignContent="center" alignItems="center">
        <Avatar.Image source={{ uri: user.image || 'https://cdn-icons-png.flaticon.com/512/64/64572.png' }} size={80} />
        <Button mode="outlined" theme={{ colors: { primary: AppColors.Primary_40, outline: AppColors.Primary_40 } }} style={{ borderRadius: 20, height: 45, width: 150 }}>
          Edit profile
        </Button>
      </AppStack>
      <Spacer top={10} />
      <AppStack direction="column" spacing={0}>
        <Text style={AppTextStyle.h4(AppColors.Neutral_100, 20)}>{user.name}</Text>
        <Text style={AppTextStyle.p(AppColors.Neutral_50, 12)}>
          {user.email} | {user.address}
        </Text>
        <Text style={AppTextStyle.p(AppColors.Neutral_50, 12)}>{user.bio}</Text>
      </AppStack>
      <Spacer top={10} />
      <AppStack direction="row" justifyContent="space-between" alignContent="center" alignItems="center">
        <AppStack direction="column" justifyContent="center" alignContent="center" alignItems="center">
          <Text style={AppTextStyle.p(AppColors.Neutral_60, 12)}>Recipes</Text>
          <Text style={AppTextStyle.h4(AppColors.Neutral_100, 20)}>20</Text>
        </AppStack>

        <AppStack direction="column" justifyContent="center" alignContent="center" alignItems="center">
          <Text style={AppTextStyle.p(AppColors.Neutral_60, 12)}>Videos</Text>
          <Text style={AppTextStyle.h4(AppColors.Neutral_100, 20)}>10</Text>
        </AppStack>

        <AppStack direction="column" justifyContent="center" alignContent="center" alignItems="center">
          <Text style={AppTextStyle.p(AppColors.Neutral_60, 12)}>Followers</Text>
          <Text style={AppTextStyle.h4(AppColors.Neutral_100, 20)}>100</Text>
        </AppStack>

        <AppStack direction="column" justifyContent="center" alignContent="center" alignItems="center">
          <Text style={AppTextStyle.p(AppColors.Neutral_60, 12)}>Following</Text>
          <Text style={AppTextStyle.h4(AppColors.Neutral_100, 20)}>50</Text>
        </AppStack>
      </AppStack>
      <Spacer top={10} />
      <View
        style={{
          borderBottomColor: AppColors.Neutral_20,
          borderBottomWidth: 0.6,
        }}
      />
      <Spacer top={10} />
      <AppStack direction={'row'} justifyContent="space-between">
        <Button mode="contained" buttonColor={AppColors.Neutral_0} textColor={AppColors.Primary_40} style={{ width: 170 }}>
          Video
        </Button>
        <Button mode="contained" buttonColor={AppColors.Primary_40} style={{ width: 170 }}>
          Video
        </Button>
      </AppStack>
    </AppSafeAreaView>
  );
}
