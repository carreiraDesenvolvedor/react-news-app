import '@fontsource/plus-jakarta-sans';
import { ThemeProvider } from '@emotion/react';
import React, { FC, ReactElement } from 'react';
import { customTheme } from './theme/customTheme';
import { CssBaseline } from '@mui/material';
import { LoginPage } from './pages/auth/LoginPage';

const App: FC = (): ReactElement => {
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <LoginPage />
    </ThemeProvider>
  );
};

export default App;
