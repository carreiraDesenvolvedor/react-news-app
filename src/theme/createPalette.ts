import { PaletteOptions } from '@mui/material';
import { common } from '@mui/material/colors';

export const createPalette = (): PaletteOptions => {
  return {
    mode: 'dark',
    background: {
      default: common.white,
      paper: common.white,
    },
  };
};
