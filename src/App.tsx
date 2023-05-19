import { ThemeProvider } from '@emotion/react';
import React, { FC, ReactElement } from 'react';
import { customTheme } from './theme/customTheme';
import { CssBaseline } from '@mui/material';

const App: FC = (): ReactElement => {
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <h1>Hey, how you doing?! :)</h1>
    </ThemeProvider>
  );
};

export default App;
