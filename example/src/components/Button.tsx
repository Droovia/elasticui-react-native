import React from 'react';

import { Wrapper } from '../common';
import { Button } from '@elasticui/react-native';

const ButtonExample = () => {
  return (
    <Wrapper center>
      <Button>CONTAINED</Button>
      <Button variant="outlined">OUTLINED</Button>
      <Button variant="transparent"> TRANSPARENT</Button>

      <Button size="small">SMALL</Button>
      <Button size="large">LARGE</Button>

      <Button shape="plate">PLATE</Button>
      <Button shape="round">ROUND</Button>

      <Button color="secondary">SECONDARY</Button>
      <Button color="success">SUCCESS</Button>
      <Button color="warn" loading>
        WARN
      </Button>
      <Button color="error">ERROR</Button>
    </Wrapper>
  );
};

export default ButtonExample;
