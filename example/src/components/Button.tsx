import React, { ReactNode } from 'react';
import { ViewStyle, TextStyle, StyleSheet } from 'react-native';
import { ShowcaseButton, ShowcaseLabel } from '@gorhom/showcase-template';

interface ButtonProps {
  label: string;
  endContent?: string | ReactNode;
  style?: ViewStyle;
  labelStyle?: TextStyle;
  onPress: () => void;
}

export const Button = ({
  label,
  endContent,
  style,
  labelStyle,
  onPress,
}: ButtonProps) => (
  <ShowcaseButton
    containerStyle={style}
    contentContainerStyle={styles.container}
    onPress={onPress}
  >
    <ShowcaseLabel style={labelStyle}>{label}</ShowcaseLabel>
    {endContent && endContent}
  </ShowcaseButton>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
  },
});
