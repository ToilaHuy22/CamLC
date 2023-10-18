import { useTheme } from '@/hooks';
import { DefaultVariables } from '@/theme';
import React, { PropsWithChildren, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { TextStyle, Text as RnText, StyleProp, StyleSheet } from 'react-native';
import { TranslationKeys } from 'types/i18next';
import { ThemeVariables } from 'types/theme';

type TextVariants =
  | 'default'
  | 'label'
  | 'xLabel'
  | 'hint'
  | 'error'
  | 'success'
  | 'button'
  | 'tab';

export type TextProps = PropsWithChildren<{
  variant?: TextVariants;
  style?: StyleProp<TextStyle>;
  color?: keyof ThemeVariables['Colors'];
  kt?: TranslationKeys;
}>;

const Text = (props: TextProps) => {
  const { children, variant = 'default', style = {}, color, kt } = props;
  const { t } = useTranslation();
  const { Colors, FontSize, darkMode } = useTheme();

  const variants: Record<TextVariants, TextStyle> = {
    default: {
      fontSize: FontSize.tiny,
      color: darkMode ? Colors.white : Colors.black,
      fontWeight: 'normal',
    },
    button: {
      fontSize: FontSize.md,
      color: darkMode ? Colors.white : Colors.black,
      fontWeight: 'bold',
    },
    error: {
      fontSize: FontSize.tiny,
      color: Colors.error,
      fontWeight: 'normal',
    },
    hint: {
      fontSize: FontSize.tiny,
      color: darkMode ? Colors.white : Colors.black,
      fontWeight: 'normal',
    },
    xLabel: {
      fontSize: FontSize.xl,
      color: darkMode ? Colors.white : Colors.black,
      fontWeight: 'normal',
    },
    label: {
      fontSize: FontSize['2xl'],
      color: darkMode ? Colors.white : Colors.black,
      fontWeight: 'normal',
    },
    success: {
      fontSize: FontSize.tiny,
      color: Colors.success,
      fontWeight: 'normal',
    },
    tab: {
      fontSize: FontSize.tiny,
      color: darkMode ? Colors.white : Colors.black,
      fontWeight: 'normal',
    },
  };

  const getStyles = () => {
    const _variant = variants[variant];
    const _color = color ? { color: DefaultVariables.Colors[color] } : {};
    return {
      ..._variant,
      ...StyleSheet.flatten(style),
      ..._color,
    };
  };

  const getContent = () => {
    if (kt) {
      return (
        <>
          {t(kt)}
          {children}
        </>
      );
    }

    return children;
  };

  return <RnText style={getStyles()}>{getContent()}</RnText>;
};

export default memo(Text);
