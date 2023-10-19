import { ScrollView, Text, View } from 'react-native';
import AppSafeAreaView from '../../components/AppSafeAreaView';
import { AppStack } from '../../components/AppStack';
import { Avatar, Button, DataTable } from 'react-native-paper';
import { AppColors } from '../../commons/colors';
import { AppTextStyle } from '../../commons/textStyle';
import Spacer from '../../components/Spacer';
import React from 'react';
import { VideoCard } from '../../components/Card/VideoCard';

const user = {
  name: 'Moh. Faizal Norhavid',
  email: 'nurhavid123@gmail.com',
  address: 'Surabaya, Indonesia',
  phone: '081234567890',
  bio: 'I am a 5th semester student at Surabaya State Electronics Polytechnic, majoring in software engineering. I possess excellent adaptability, a quick learning ability, and strong multitasking skills. My approach to problem solving is creative and solution-oriented. I have a keen interest in learning and working on projects related to media creative products, software development, UI/UX design, IoT, and research',
};
export function Profile() {
  const [clicked, setClickedIndex] = React.useState(false);

  return (
    <AppSafeAreaView>
      <ScrollView contentContainerStyle={{ paddingVertical: 20 }} showsVerticalScrollIndicator={false}>
        <AppStack direction="row" justifyContent="space-between" alignContent="center" alignItems="center">
          <Avatar.Image source={require('../../../assets/images/author.jpg')} size={80} />
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
          <Button mode="contained" buttonColor={clicked ? AppColors.Primary_40 : AppColors.Neutral_0} textColor={clicked ? AppColors.Neutral_0 : AppColors.Primary_40} style={{ width: 170 }} onPress={() => setClickedIndex(!clicked)}>
            Video
          </Button>
          <Button mode="contained" buttonColor={clicked ? AppColors.Neutral_0 : AppColors.Primary_40} textColor={clicked ? AppColors.Primary_40 : AppColors.Neutral_0} style={{ width: 170 }} onPress={() => setClickedIndex(!clicked)}>
            Recipe
          </Button>
        </AppStack>
        <AppStack direction="column" justifyContent="center" alignContent="center" alignItems="center" style={{ marginTop: 20 }}>
          {clicked ? (
            <>
              <VideoCard likes="4.5" style={{ marginBottom: 20 }} title="How to make sushi at home" author="Mohamad Faizal Norhavid" width={365} />
              <VideoCard likes="4.5" style={{ marginBottom: 20 }} title="How to make sushi at home" author="Mohamad Faizal Norhavid" width={365} />
              <VideoCard likes="4.5" style={{ marginBottom: 20 }} title="How to make sushi at home" author="Mohamad Faizal Norhavid" width={365} />
              <VideoCard likes="4.5" style={{ marginBottom: 20 }} title="How to make sushi at home" author="Mohamad Faizal Norhavid" width={365} />
            </>
          ) : (
            <DataTable>
              <DataTable.Header>
                <DataTable.Title>Recipe</DataTable.Title>
                <DataTable.Title numeric>Rating</DataTable.Title>
                <DataTable.Title numeric>Reviews</DataTable.Title>
              </DataTable.Header>

              <DataTable.Row>
                <DataTable.Cell>How to make sushi at home</DataTable.Cell>
                <DataTable.Cell numeric>4.5</DataTable.Cell>
                <DataTable.Cell numeric>100</DataTable.Cell>
              </DataTable.Row>

              <DataTable.Row>
                <DataTable.Cell>How to make sushi at home</DataTable.Cell>
                <DataTable.Cell numeric>4.5</DataTable.Cell>
                <DataTable.Cell numeric>100</DataTable.Cell>
              </DataTable.Row>

              <DataTable.Row>
                <DataTable.Cell>How to make sushi at home</DataTable.Cell>
                <DataTable.Cell numeric>4.5</DataTable.Cell>
                <DataTable.Cell numeric>100</DataTable.Cell>
              </DataTable.Row>

              <DataTable.Row>
                <DataTable.Cell>How to make sushi at home</DataTable.Cell>
                <DataTable.Cell numeric>4.5</DataTable.Cell>
                <DataTable.Cell numeric>100</DataTable.Cell>
              </DataTable.Row>

              <DataTable.Row>
                <DataTable.Cell>How to make sushi at home</DataTable.Cell>
                <DataTable.Cell numeric>4.5</DataTable.Cell>
                <DataTable.Cell numeric>100</DataTable.Cell>
              </DataTable.Row>
            </DataTable>
          )}
        </AppStack>
      </ScrollView>
    </AppSafeAreaView>
  );
}
