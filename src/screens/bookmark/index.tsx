import { Text, View } from 'native-base';
import AppSafeAreaView from '../../components/AppSafeAreaView';
import { AppStack } from '../../components/AppStack';
import { AppButton } from '../../components/AppButton';
import { AppColors } from '../../commons/colors';
import { Dimensions, ScrollView } from 'react-native';
import { VideoCard } from '../../components/Card/VideoCard';
import Spacer from '../../components/Spacer';

export function BookmarkScreen() {
  return (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 20, paddingVertical: 15 }} style={{ backgroundColor: AppColors.Neutral_0 }}>
      <VideoCard likes="4.5" style={{ marginBottom: 20 }} title="How to make sushi at home" author="Niki Samentha" authorImage="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=377&q=80" width={365} />
      <VideoCard likes="4.5" style={{ marginBottom: 20 }} title="How to make sushi at home" author="Niki Samentha" authorImage="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=377&q=80" width={365} />
      <VideoCard likes="4.5" style={{ marginBottom: 20 }} title="How to make sushi at home" author="Niki Samentha" authorImage="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=377&q=80" width={365} />
    </ScrollView>
  );
}
