import { Text, View } from 'react-native';
import AppSafeAreaView from '../../components/AppSafeAreaView';
import { AppStack } from '../../components/AppStack';
import { AppColors } from '../../commons/colors';
import { Button, List } from 'react-native-paper';
import { AppTextStyle } from '../../commons/textStyle';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export function Notifications() {
  const notifications = [
    {
      title: 'New recipe',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.',
      date: '10/18/2023',
    },
    {
      title: 'Verification new account',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.',
      date: '12/12/2020',
    },
    {
      title: 'Hello there',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.',
      date: '11/10/2020',
    },
    {
      title: 'Email',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.',
      date: '11/02/2020',
    },
  ];
  const date = new Date();
  const dateNow = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
  const today = notifications.filter((notification) => notification.date === dateNow);

  const yesterday = notifications.filter((notification) => notification.date !== dateNow);

  return (
    <AppSafeAreaView>
      {today.length > 0 && (
        <View>
          <Text style={AppTextStyle.h4(AppColors.Neutral_100, 16)}>Today</Text>
          <List.Section>
            {today.map((notification, index) => (
              <List.Item
                key={index}
                title={notification.title}
                style={{ backgroundColor: AppColors.Neutral_10, marginVertical: 5, borderRadius: 10, padding: 8 }}
                description={notification.description}
                left={(props) => (
                  <View style={{ padding: 5, borderRadius: 10, width: 35, height: 35, backgroundColor: AppColors.Success_0, justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                    <MaterialCommunityIcons name="file-document" size={18} color={AppColors.Success_100} />
                  </View>
                )}
              />
            ))}
          </List.Section>
        </View>
      )}

      {yesterday.length > 0 && (
        <View>
          <Text style={AppTextStyle.h4(AppColors.Neutral_100, 16)}>Yesterday</Text>
          <List.Section>
            {yesterday.map((notification, index) => (
              <List.Item
                key={index}
                style={{ backgroundColor: AppColors.Neutral_10, marginVertical: 5, borderRadius: 10, padding: 8 }}
                title={notification.title}
                description={notification.description}
                left={(props) => (
                  <View style={{ padding: 5, borderRadius: 10, width: 35, height: 35, backgroundColor: AppColors.Success_0, justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                    <MaterialCommunityIcons name="file-document" size={18} color={AppColors.Success_100} />
                  </View>
                )}
              />
            ))}
          </List.Section>
        </View>
      )}

      {today.length === 0 && yesterday.length === 0 && (
        <View style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center', height: '100%' }}>
          <Text style={AppTextStyle.h4(AppColors.Neutral_70, 16)}>No notification</Text>
        </View>
      )}
    </AppSafeAreaView>
  );
}
