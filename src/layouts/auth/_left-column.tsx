import React, { FC, ReactElement } from 'react';
import { IAuthLayout } from '.';
import { Grid } from '@mui/material';

export const AuthLayoutLeftColumn: FC<IAuthLayout> = ({
  children,
}): ReactElement => {
  return (
    <Grid
      xs={12}
      lg={6}
      sx={{ background: 'background.paper' }}
      item
      md={6}
      height={'100vh'}
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}
      direction={'column'}
    >
      {children}
    </Grid>
  );
};
