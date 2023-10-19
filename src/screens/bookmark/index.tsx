import { AppColors } from '../../commons/colors';
import { ScrollView } from 'react-native';
import { VideoCard } from '../../components/Card/VideoCard';

export function BookmarkScreen() {
  return (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 20, paddingVertical: 15 }} style={{ backgroundColor: AppColors.Neutral_0 }}>
      <VideoCard likes="4.5" style={{ marginBottom: 20 }} title="How to make sushi at home" author="Mohamad Faizal Norhavid" width={365} />
      <VideoCard likes="4.5" style={{ marginBottom: 20 }} title="How to make sushi at home" author="Mohamad Faizal Norhavid" width={365} />
      <VideoCard likes="4.5" style={{ marginBottom: 20 }} title="How to make sushi at home" author="Mohamad Faizal Norhavid" width={365} />
    </ScrollView>
  );
}
