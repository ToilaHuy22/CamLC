import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { SearchBox, Text } from '@/components';
import { useTheme } from '@/hooks';

const Welcome = () => {
  const { Layout, Fonts, Gutters, Icons, Colors } = useTheme();

  return (
    <View style={[Gutters.xsSmallHMargin]}>
      <View style={[Layout.fullWidth]}>
        <Text style={[Fonts.textBold, Gutters.tinyTMargin]} variant={'label'}>
          Find The Most
        </Text>
        <Text
          style={[Fonts.textBold, Gutters.tinyTMargin]}
          color={'mainColor'}
          variant={'label'}
        >
          Luxurious Furniture
        </Text>
      </View>
      <SearchBox />
    </View>
  );
};

export default Welcome;
