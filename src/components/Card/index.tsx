import React from 'react';
import { Image, ImageBackground, SafeAreaView, StatusBar, StyleSheet, View, useColorScheme } from 'react-native';
import { AppColors } from '../../commons/colors';
import { Avatar, Card, Chip, Paragraph, Title } from 'react-native-paper';
import Ionicons from '@expo/vector-icons/Ionicons';

type AppCardProps = {
  color?: string | undefined;
  barStyle?: 'light-content' | 'dark-content' | undefined;
  likes?: string;
};

export function AppCard({ color, barStyle, ...props }: AppCardProps) {
  return (
    <Card>
      <ImageBackground source={{ uri: 'https://plus.unsplash.com/premium_photo-1665394004212-0d014eb6da68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1778&q=80' }} style={{ height: 200 }} resizeMode="cover">
        <Card.Title
          left={() => (
            <Chip icon={() => <Ionicons name="star" size={14} color={AppColors.Neutral_0} />} onPress={() => console.log('Pressed')} style={{ width: 60, backgroundColor: 'rgba(128, 128, 128, 0.5)' }}>
              {props.likes}
            </Chip>
          )}
          right={() => (
            <View style={{ backgroundColor: AppColors.Neutral_0, borderRadius: 30, padding: 8 }}>
              <Ionicons name="bookmarks-outline" size={15} color={AppColors.Neutral_100} />
            </View>
          )}
        />
        <Card.Content>
          <SafeAreaView>
            <Title>Card title</Title>
            <Paragraph>Card content</Paragraph>
          </SafeAreaView>
        </Card.Content>
      </ImageBackground>
    </Card>
  );
}
