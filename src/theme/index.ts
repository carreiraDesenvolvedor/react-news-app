import { ThemeOptions, createTheme } from '@mui/material';
import { createTypography } from './create-typography';
import { createPalette } from './create-palette';
import { createShadows } from './create-shadows';
import { createComponents } from './create-components';

export const customTheme: ThemeOptions = createTheme({
  palette: createPalette(),
  typography: createTypography(),
  shadows: createShadows(),
  shape: {
    borderRadius: 8,
  },
  components: createComponents(createPalette()),
});
