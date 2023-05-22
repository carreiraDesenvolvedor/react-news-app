import { PaletteOptions, alpha } from '@mui/material';
import { common } from '@mui/material/colors';
import {
  IColors,
  IColorsAlpha,
  colorsError,
  colorsInfo,
  colorsNeutral,
  colorsSuccess,
  colorsWarning,
} from './colors';

export interface ICustomPaletteOptions
  extends PaletteOptions {
  neutral: IColors;
  error: IColorsAlpha;
  info: IColorsAlpha;
  warning: IColorsAlpha;
  success: IColorsAlpha;
}

export const createPalette = (): ICustomPaletteOptions => {
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
    neutral: colorsNeutral,
    error: colorsError,
    info: colorsInfo,
    success: colorsSuccess,
    warning: colorsWarning,
  };
};
