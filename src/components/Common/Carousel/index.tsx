import React from 'react';
import { Text } from '@/components';
import { View } from 'react-native';
// @ts-ignore
import { SliderBox } from 'react-native-image-slider-box';
import { useTheme } from '@/hooks';

interface ISlider {
  dataImage: Array<string>;
}

const Carousel = (props: ISlider) => {
  const { Layout, Fonts, Gutters, Icons, Colors } = useTheme();
  const { dataImage } = props;

  return (
    <View style={[Layout.fill, Layout.alignItemsCenter]}>
      <SliderBox
        images={dataImage}
        dotColor={Colors.mainColor}
        inactiveDotColor={Colors.secondary}
        ImageComponentStyle={[
          Layout.xlRounded,
          Gutters.xsSmallTMargin,
          { width: '95%' },
        ]}
        imageLoadingColor={Colors.mainColor}
        circleLoop
        autoplay
      />
    </View>
  );
};

export default Carousel;
