import { Box, Unstable_Grid2 as Grid } from '@mui/material';

import React, { FC, ReactElement } from 'react';
import { AuthLayoutRightColumn } from './_right-column';
import { AuthLayoutLeftColumn } from './_left-column';

export interface IAuthLayout {
  children: ReactElement[] | ReactElement;
}

export const AuthLayout: FC<IAuthLayout> = ({
  children,
}): ReactElement => {
  return (
    <Box
      component={'main'}
      minHeight={'100vh'}
      display={'flex'}
    >
      <Grid container flex={'1 1 auto'}>
        <AuthLayoutLeftColumn>
          {children}
        </AuthLayoutLeftColumn>
        <AuthLayoutRightColumn />
      </Grid>
    </Box>
  );
};
