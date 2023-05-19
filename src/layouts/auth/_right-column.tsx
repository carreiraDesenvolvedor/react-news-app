import { Grid } from '@mui/material';
import React, { FC, ReactElement } from 'react';

export const AuthLayoutRightColumn: FC =
  (): ReactElement => {
    return (
      <Grid
        sx={{ background: 'yellow' }}
        item
        xs={12}
        lg={6}
      >
        Fixed Content
      </Grid>
    );
  };
