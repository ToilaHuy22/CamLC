import { StyleSheet } from 'react-native';
import { ThemeVariables } from '../../@types/theme';
import { Rounded } from '@/theme/Variables';

export default function ({}: ThemeVariables) {
  return StyleSheet.create({
    /* Column Layouts */
    col: {
      flexDirection: 'column',
    },
    colReverse: {
      flexDirection: 'column-reverse',
    },
    colCenter: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    colVCenter: {
      flexDirection: 'column',
      alignItems: 'center',
    },
    colHCenter: {
      flexDirection: 'column',
      justifyContent: 'center',
    },
    /* Row Layouts */
    row: {
      flexDirection: 'row',
    },
    rowCenterBetween: {
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    rowReverse: {
      flexDirection: 'row-reverse',
    },
    rowCenter: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    rowVCenter: {
      flexDirection: 'row',
      justifyContent: 'center',
    },
    rowHCenter: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    /* Default Layouts */
    center: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    alignItemsCenter: {
      alignItems: 'center',
    },
    alignItemsStart: {
      alignItems: 'flex-start',
    },
    alignItemsStretch: {
      alignItems: 'stretch',
    },
    alignItemsEnd: {
      alignItems: 'flex-end',
    },
    justifyContentCenter: {
      justifyContent: 'center',
    },
    justifyContentAround: {
      justifyContent: 'space-around',
    },
    justifyContentBetween: {
      justifyContent: 'space-between',
    },
    justifyContentEnd: {
      justifyContent: 'flex-end',
    },
    scrollSpaceAround: {
      flexGrow: 1,
      justifyContent: 'space-around',
    },
    scrollSpaceBetween: {
      flexGrow: 1,
      justifyContent: 'space-between',
    },
    selfStretch: {
      alignSelf: 'stretch',
    },
    /* Sizes Layouts */
    fill: {
      flex: 1,
    },
    fullSize: {
      height: '100%',
      width: '100%',
    },
    fullWidth: {
      width: '100%',
    },
    halfWidth: {
      width: '50%',
    },
    fullHeight: {
      height: '100%',
    },

    /*Icon Image*/
    sizeImage: {
      width: 48,
      height: 48,
    },
    sizeIcon: {
      width: 24,
      height: 24,
    },
    sizeQuantity: {
      width: 14,
      height: 14,
    },
    /*Box size*/
    heightMediumSize: {
      height: 50,
    },
    widthMediumSize: {
      width: 50,
    },
    heightLargeSize: {
      height: 100,
    },
    widthLargeSize: {
      width: 100,
    },
    /* Operation Layout */
    mirror: {
      transform: [{ scaleX: -1 }],
    },
    rotate90: {
      transform: [{ rotate: '90deg' }],
    },
    rotate90Inverse: {
      transform: [{ rotate: '-90deg' }],
    },
    // Position
    relative: {
      position: 'relative',
    },
    absolute: {
      position: 'absolute',
    },
    top0: {
      top: 0,
    },
    bottom0: {
      bottom: 0,
    },
    left0: {
      left: 0,
    },
    right0: {
      right: 0,
    },

    //rouder
    borderTop1: {
      borderTopWidth: 1,
    },
    borderTop2: {
      borderTopWidth: 2,
    },
    borderBot2: {
      borderBottomWidth: 2,
    },
    tinyRounded: {
      borderRadius: Rounded.tiny,
    },
    smallRounded: {
      borderRadius: Rounded.small,
    },
    baseRounded: {
      borderRadius: Rounded.base,
    },
    mdRounded: {
      borderRadius: Rounded.md,
    },
    xlRounded: {
      borderRadius: Rounded.xl,
    },
    '2xlRounded': {
      borderRadius: Rounded['2xl'],
    },
    largeRounded: {
      borderRadius: Rounded.large,
    },
    fullRounded: {
      borderRadius: Rounded.full,
    },

    //shadow
    smallShadow: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 2,
    },
    mediumShadow: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 5.84,
      elevation: 5,
    },
  });
}
