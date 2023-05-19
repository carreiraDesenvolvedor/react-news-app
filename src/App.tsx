import '@fontsource/plus-jakarta-sans';
import { ThemeProvider } from '@emotion/react';
import React, { FC, ReactElement } from 'react';
import { customTheme } from './theme/customTheme';
import { CssBaseline } from '@mui/material';
import { AppRoutes } from './routes';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

const App: FC = (): ReactElement => {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <ThemeProvider theme={customTheme}>
        <CssBaseline />
        <AppRoutes />
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
