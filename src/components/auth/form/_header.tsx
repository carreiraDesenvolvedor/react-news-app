import { Link, Stack, Typography } from '@mui/material';
import React, { FC, ReactElement } from 'react';

export const AuthFormHeader: FC = (): ReactElement => {
  return (
    <Stack spacing={1} sx={{ mb: 3 }}>
      <Typography variant="h4">Login</Typography>
      <Typography color="text.secondary" variant="body2">
        Don&apos;t have an account?{' '}
        <Link underline="hover" variant="subtitle2">
          Register
        </Link>
      </Typography>
    </Stack>
  );
};
