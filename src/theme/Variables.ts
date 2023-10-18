/**
 * This file contains the application's variables.
 *
 * Define color, sizes, etc. here instead of duplicating them throughout the components.
 * That allows to change them more easily later on.
 */

import { ThemeNavigationColors } from '../../@types/theme';

/**
 * Colors
 */
export const Colors = {
  transparent: 'rgba(0,0,0,0)',
  inputBackground: '#FFFFFF',
  white: '#ffffff',
  //Typography
  textGray800: '#000000',
  textGray400: '#4D4D4D',
  textGray200: '#A1A1A1',
  primary: '#E14032',
  success: '#28a745',
  error: '#dc3545',
  //ComponentColors
  circleButtonBackground: '#E1E1EF',
  circleButtonColor: '#44427D',
  mainColor: '#2A4D50',
  secondary: '#DDF0FF',
  tertiary: '#FF7754',
  gray: '#83829A',
  gray2: '#C1C0C8',
  offwhite: '#F3F4F8',
  black: '#000000',
  normalColor: '#000000',
  red: '#e81e4d',
  green: '#00C135',
  lightWhite: '#FAFAFC',
};

export const NavigationColors: Partial<ThemeNavigationColors> = {
  primary: Colors.primary,
  background: '#EFEFEF',
  card: '#EFEFEF',
};

export const FontSize = {
  xSmall: 10,
  small: 12,
  tiny: 14,
  base: 16,
  md: 18,
  lg: 20,
  xl: 24,
  '2xl': 32,
  '3xl': 40,
  '4xl': 48,
  '5xl': 64,
  '6xl': 96,
};

/**
 * Border Radius
 */
export const Rounded = {
  tiny: 4,
  small: 6,
  base: 8,
  md: 10,
  xl: 12,
  '2xl': 14,
  large: 16,
  full: 9999,
};

/**
 * Metrics Sizes
 */
const xsTiny = 2;
const xTiny = 4;
const tiny = 10;
const xsSmall = 12;
const xSmall = 16;
const small = tiny * 2; // 20
const regular = tiny * 3; // 30
const lRegular = tiny * 4;
const large = regular * 2; // 60
export const MetricsSizes = {
  xsTiny,
  xTiny,
  tiny,
  xsSmall,
  xSmall,
  small,
  regular,
  lRegular,
  large,
};

export default {
  Colors,
  NavigationColors,
  FontSize,
  MetricsSizes,
  Rounded,
};
