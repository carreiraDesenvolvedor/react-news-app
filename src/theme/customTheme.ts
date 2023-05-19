import { ThemeOptions, createTheme } from '@mui/material';
import { createTypography } from './createTypography';

export const customTheme: ThemeOptions = createTheme({
  palette: {
    mode: 'dark',
  },
  typography: createTypography(),
});
