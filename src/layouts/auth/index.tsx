import { Box, Grid } from '@mui/material';
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
      height={'100vh'}
      sx={{
        display: 'flex',
        alignContent: 'center',
      }}
    >
      <Grid
        alignContent={'center'}
        alignItems={'center'}
        container
        display={'flex'}
      >
        <AuthLayoutLeftColumn>
          {children}
        </AuthLayoutLeftColumn>
        <AuthLayoutRightColumn />
      </Grid>
    </Box>
  );
};
