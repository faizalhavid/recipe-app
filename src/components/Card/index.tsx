import React from 'react';
import { Image, ImageBackground, SafeAreaView, StatusBar, StyleSheet, View, useColorScheme } from 'react-native';
import { AppColors } from '../../commons/colors';
import { Avatar, Card, Chip, Paragraph, Title } from 'react-native-paper';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Text } from 'native-base';
import { AppStack } from '../AppStack';
import { IconButton } from 'react-native-paper';
import { AppTextStyle } from '../../commons/textStyle';

type AppCardProps = {
  color?: string | undefined;
  barStyle?: 'light-content' | 'dark-content' | undefined;
  likes?: string;
  title?: string;
  author?: string;
  authorImage?: string;
};

export function AppCard({ color, barStyle, ...props }: AppCardProps) {
  return (
    <Card style={styles.card} theme={{ colors: { primary: 'white' } }}>
      <View style={styles.container}>
        <Image source={{ uri: 'https://plus.unsplash.com/premium_photo-1665394004212-0d014eb6da68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1778&q=80' }} style={styles.background} resizeMode="cover" />
        <AppStack direction="row" justifyContent="space-between" paddingHorizontal={10} paddingVertical={10}>
          <Chip icon={() => <Ionicons name="star" size={12} color={AppColors.Neutral_0} />} onPress={() => console.log('Pressed')} style={styles.chip}>
            <Text style={AppTextStyle.h5(AppColors.Neutral_0, 12)}>{props.likes}</Text>
          </Chip>
          <View style={{ backgroundColor: AppColors.Neutral_0, borderRadius: 30, padding: 10 }}>
            <Ionicons name="bookmarks-outline" size={15} color={AppColors.Neutral_100} />
          </View>
        </AppStack>
        <AppStack direction="column" justifyContent="center" alignContent="center" alignItems="center" paddingHorizontal={10} paddingVertical={10}>
          <IconButton icon="play" iconColor={AppColors.Neutral_0} mode="contained" onPress={() => console.log('Pressed')} style={styles.buttonPlayer} />
        </AppStack>
      </View>
      <Card.Content style={{ backgroundColor: AppColors.Neutral_0, width: 290 }}>
        <AppStack direction={'row'} justifyContent="space-between" alignContent="center" alignItems="center">
          <Title style={AppTextStyle.h4(AppColors.Neutral_100, 12)}>{props.title}</Title>
          <IconButton icon="dots-horizontal" size={20} onPress={() => console.log('Pressed')} />
        </AppStack>
        <AppStack direction={'row'} alignItems="center" spacing={10}>
          <Avatar.Image
            size={35}
            source={{
              uri: props.authorImage || 'https://cdn-icons-png.flaticon.com/512/64/64572.png',
            }}
            theme={{ colors: { primary: 'white' } }}
          />
          <Paragraph style={AppTextStyle.h5(AppColors.Neutral_40, 12)}>By {props.author}</Paragraph>
        </AppStack>
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 295,
    width: 290,
    borderRadius: 20,
    shadowColor: AppColors.Neutral_0,
    shadowOpacity: 0,
    overflow: 'hidden',
    elevation: 10,
    marginHorizontal: 10,
  },
  container: {
    backgroundColor: AppColors.Neutral_0,
    height: 200,
    width: 290,
  },
  background: { borderRadius: 15, height: 200, width: 290, position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: -1 },
  buttonPlayer: {
    backgroundColor: AppColors.Neutral_50,
    opacity: 0.8,
  },
  chip: { width: 65, height: 32, backgroundColor: AppColors.Neutral_50, opacity: 0.8 },
});
