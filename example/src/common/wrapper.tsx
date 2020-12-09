import React from 'react';
import { View, StyleProp, ViewStyle } from 'react-native';

export default function Wrapper({
  children,
  center,
}: {
  children: React.ReactNode;
  center: boolean;
}) {
  const styles: StyleProp<ViewStyle> = [
    center && { flexGrow: 1, justifyContent: 'center', alignItems: 'center' },
  ];

  return <View style={styles}>{children}</View>;
}
