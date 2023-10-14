import { ReactNode } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { AppStack } from '../AppStack';

type AppButtonProps = {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  style?: any;
  type?: 'filled' | 'outlined';
  backgroundcolor?: string;
  textStyle?: any;
  suffix?: React.ReactNode;
  prefix?: React.ReactNode;
  height?: number;
  width?: number;
  spacing?: number;
};

export function AppButton({ title, onPress, disabled, ...props }: AppButtonProps) {
  const styles = StyleSheet.create({
    button: {
      backgroundColor: props.backgroundcolor,
      borderRadius: 16,
      paddingVertical: props.height || 12,
      paddingHorizontal: props.width || 12,
    },
  });

  return (
    <TouchableOpacity style={styles.button} onPress={onPress} disabled={disabled} {...props}>
      <AppStack direction="row" alignItems="center" justifyContent="space-between" spacing={props.spacing}>
        {props.prefix}
        <Text style={props.textStyle}>{title}</Text>
        {props.suffix}
      </AppStack>
    </TouchableOpacity>
  );
}
