import { Box } from '@mui/material';
import React, { FC, ReactElement } from 'react';
import { LoggedLayout } from '../../layouts/logged';

export const HomePage: FC = (): ReactElement => {
  return (
    <LoggedLayout>
      <Box
        component={'main'}
        sx={{
          py: 8,
        }}
      >
        <h1>Hello World!</h1>
      </Box>
    </LoggedLayout>
  );
};
