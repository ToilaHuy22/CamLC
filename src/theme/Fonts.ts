/**
 * This file contains all application's style relative to fonts
 */
import { StyleSheet } from 'react-native';
import { ThemeVariables } from '../../@types/theme';

export default function ({ FontSize, Colors }: ThemeVariables) {
  return StyleSheet.create({
    textTiny: {
      fontSize: FontSize.tiny,
      color: Colors.normalColor,
    },
    textXsSmall: {
      fontSize: FontSize.tiny,
      color: Colors.normalColor,
    },
    textSmall: {
      fontSize: FontSize.small,
      color: Colors.normalColor,
    },
    textRegular: {
      fontSize: FontSize.base,
      color: Colors.normalColor,
    },
    textLarge: {
      fontSize: FontSize.md,
      color: Colors.normalColor,
    },
    textNormal: {
      fontSize: FontSize.tiny,
      color: Colors.normalColor,
      fontWeight: 'normal',
    },
    textTitleScreen: {
      fontSize: FontSize['2xl'],
      color: Colors.normalColor,
      fontWeight: 'bold',
    },
    textXBold: {
      fontWeight: '700',
    },
    textBold: {
      fontWeight: '900',
    },
    textMedium: {
      fontWeight: '500',
    },
    textUppercase: {
      textTransform: 'uppercase',
    },
    titleSmall: {
      fontSize: FontSize.small * 1.5,
      fontWeight: 'bold',
      color: Colors.textGray800,
    },
    titleRegular: {
      fontSize: FontSize.base * 2,
      fontWeight: 'bold',
      color: Colors.textGray800,
    },
    titleLarge: {
      fontSize: FontSize.md * 2,
      fontWeight: 'bold',
      color: Colors.textGray800,
    },
    textCenter: {
      textAlign: 'center',
    },
    textJustify: {
      textAlign: 'justify',
    },
    textLeft: {
      textAlign: 'left',
    },
    textRight: {
      textAlign: 'right',
    },
    textError: {
      color: Colors.error,
    },
    textSuccess: {
      color: Colors.success,
    },
    textPrimary: {
      color: Colors.primary,
    },
    textLight: {
      color: Colors.textGray200,
    },
    textLobster: {
      fontFamily: 'lobster',
      fontWeight: 'normal',
    },
  });
}
