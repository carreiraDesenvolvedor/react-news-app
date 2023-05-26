import '@fontsource/plus-jakarta-sans';
import { ThemeProvider } from '@emotion/react';
import React, { FC, ReactElement } from 'react';
import { customTheme } from './theme';
import { CssBaseline } from '@mui/material';
import { AppRoutes } from './routes';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import AuthProvider from './context/auth';
import { CookiesProvider } from 'react-cookie';

const App: FC = (): ReactElement => {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <ThemeProvider theme={customTheme}>
        <CssBaseline />
        <CookiesProvider>
          <AuthProvider>
            <AppRoutes />
          </AuthProvider>
        </CookiesProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
