import React from 'react';
import { View, Text } from 'react-native';

import { makeStyle, useTheme } from '@elasticui/react-native';

const Typography = () => {
  const styles = useStyle();
  const theme = useTheme();

  return (
    <View
      style={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      <Text>hi</Text>
    </View>
  );
};

const useStyle = makeStyle((theme) => ({
  root: {
    fontSize: theme.font.font,
  },
}));

export default Typography;
