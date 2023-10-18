import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { AppStack } from '../AppStack';

type ListTileProps = {
  title?: string;
  subtitle?: string;
  image?: string;
  onPress?: () => void;
  style?: any;
  width?: number;
  height?: number;
  spacing?: number;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  titleStyle?: any;
  subtitleStyle?: any;
  imageStyle?: any;
  disabled?: boolean;
  type?: 'filled' | 'outlined';
  backgroundcolor?: string;
  textStyle?: any;
  icon?: React.ReactNode;
  iconStyle?: any;
  iconColor?: string;
  iconSize?: number;
  iconPosition?: 'left' | 'right';
  iconSpacing?: number;
};

export function ListTile({ title, subtitle, image, onPress, ...props }: ListTileProps) {
  const styles = StyleSheet.create({
    button: {
      backgroundColor: props.backgroundcolor,
      borderRadius: 16,
      paddingVertical: props.height || 12,
      paddingHorizontal: props.width || 12,
    },
  });

  return (
    <TouchableOpacity style={styles.button} onPress={onPress} disabled={props.disabled} {...props}>
      <AppStack direction="row" alignItems="center" justifyContent="space-between" spacing={props.spacing}>
        {props.prefix}
        <Text style={props.textStyle}>{title}</Text>
        {props.suffix}
      </AppStack>
    </TouchableOpacity>
  );
}
