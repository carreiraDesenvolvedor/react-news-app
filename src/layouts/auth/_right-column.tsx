import {
  Box,
  Unstable_Grid2 as Grid,
  Typography,
} from '@mui/material';
import React, { FC, ReactElement } from 'react';

export const AuthLayoutRightColumn: FC =
  (): ReactElement => {
    return (
      <Grid
        xs={12}
        lg={6}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        sx={{
          color: 'white',
          background:
            'radial-gradient(50% 50% at 50% 50%, #122647 0%, #090E23 100%)',
          '& img': {
            width: '100%',
            maxWidth: '400px',
          },
        }}
      >
        <Box sx={{ p: 3 }}>
          <Typography
            align="center"
            color="inherit"
            sx={{
              fontSize: '24px',
              lineHeight: '32px',
              mb: 1,
            }}
            variant="h1"
          >
            Welcome to{' '}
            <Box
              component="a"
              sx={{ color: '#15B79E' }}
              target="_blank"
            >
              NewsFeed
            </Box>
          </Typography>
          <Typography
            align="center"
            sx={{ mb: 3 }}
            variant="subtitle1"
          >
            A professional App to help you follow the most
            important News for you!
          </Typography>
          <img alt="" src="/assets/auth/news-art.png" />
        </Box>
      </Grid>
    );
  };
