import React from 'react';
import { View } from 'react-native';

import { Button } from '@elasticui/react-native';

const ButtonExample = () => {
  return (
    <View
      style={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      <Button>variant: default</Button>
      <Button variant="outlined">variant: outlined</Button>
      <Button variant="transparent">variant: transparent</Button>

      <Button>size: default</Button>
      <Button size="small" loading>
        size: small
      </Button>
      <Button size="large">size: large</Button>

      {/* <Button>shape: default</Button>
      <Button shape="plate">shape: plate</Button>
      <Button shape="round">shape: round</Button> */}

      {/* <Button>color: default</Button>
      <Button color="secondary">color: secondary</Button>
      <Button color="success">color: success</Button>
      <Button color="warn">shape: warn</Button>
      <Button color="error">shape: error</Button> */}
    </View>
  );
};

export default ButtonExample;
