import { ColorValue, View } from 'react-native';

export const Border = (color: ColorValue, width: number) => (
  <View
    style={{
      borderBottomColor: color,
      borderBottomWidth: width,
    }}
  />
);
