import React from 'react';
import { View } from 'react-native';

import { Wrapper } from '../common';
import { Typography } from '@elasticui/react-native';

const TypographyExample = () => {
  return (
    <Wrapper center>
      <Typography>variant: default</Typography>
      <Typography variant="caption">variant: caption</Typography>
      <Typography variant="h1">variant: h1</Typography>
      <Typography variant="h2">variant: h2</Typography>
      <Typography variant="h3">variant: h3</Typography>
      <Typography variant="h4">variant: h4</Typography>
      <Typography variant="h5">variant: h5</Typography>

      <Typography>color: default</Typography>
      <Typography color="primary">color: primary</Typography>
      <Typography color="secondary">color: secondary</Typography>
      <Typography color="success">color: success</Typography>
      <Typography color="warn">color: warn</Typography>
      <Typography color="error">color: error</Typography>

      <Typography>family: regular</Typography>
      <Typography family="thin">family: thin</Typography>
      <Typography family="medium">family: medium</Typography>
      <Typography family="bold">family: bold</Typography>
      <Typography family="heavy">family: heavy</Typography>
    </Wrapper>
  );
};

export default TypographyExample;
