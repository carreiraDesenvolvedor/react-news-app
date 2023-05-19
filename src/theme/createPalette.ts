import { PaletteOptions, alpha } from '@mui/material';
import { common } from '@mui/material/colors';
import { colorsNeutral } from './colors';

export const createPalette = (): PaletteOptions => {
  return {
    background: {
      default: common.white,
      paper: common.white,
    },
    text: {
      primary: colorsNeutral[900],
      secondary: colorsNeutral[500],
      disabled: alpha(colorsNeutral[900], 0.38),
    },
  };
};
