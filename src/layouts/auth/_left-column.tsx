import React, { FC, ReactElement } from 'react';
import { IAuthLayout } from '.';
import { Unstable_Grid2 as Grid } from '@mui/material';

export const AuthLayoutLeftColumn: FC<IAuthLayout> = ({
  children,
}): ReactElement => {
  return (
    <Grid
      xs={12}
      lg={6}
      sx={{ background: 'background.paper' }}
      md={6}
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}
      direction={'column'}
    >
      {children}
    </Grid>
  );
};
