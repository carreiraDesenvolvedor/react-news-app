import { alpha } from '@mui/material';

export interface IColors {
  [key: number]: string;
}

export interface IColorsAlpha extends IColors {
  main: string;
  [key: number]: string;
}

const withAlphas = (colors: IColorsAlpha) => {
  return {
    ...colors,
    alpha50: alpha(colors.main, 0.5),
  };
};

export const colorsNeutral: IColors = {
  50: '#F8F9FA',
  500: '#6C737F',
  400: '#9DA4AE',
  800: '#1C2536',
  700: '#2F3746',
  900: '#111927',
};

export const colorsError: IColorsAlpha = withAlphas({
  main: '#F04438',
});

export const colorsSuccess: IColorsAlpha = withAlphas({
  main: '#10B981',
});

export const colorsInfo: IColorsAlpha = withAlphas({
  main: '#06AED4',
});

export const colorsWarning: IColorsAlpha = withAlphas({
  main: '#F79009',
});
