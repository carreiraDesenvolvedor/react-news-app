import { ThemeOptions, createTheme } from '@mui/material';
import { createTypography } from './createTypography';
import { createPalette } from './createPalette';

export const customTheme: ThemeOptions = createTheme({
  palette: createPalette(),
  typography: createTypography(),
});
