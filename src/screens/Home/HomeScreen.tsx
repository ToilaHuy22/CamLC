import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import { useTheme } from '@/hooks';
import { Slider, Text, Welcome } from '@/components';

const slides = [
  'https://amateurphotographer.com/wp-content/uploads/sites/7/2022/09/Sony-FX30-15-P9261053-acr.jpg',
  'https://amateurphotographer.com/wp-content/uploads/sites/7/2022/09/Sony-FX30-16-P9261055-acr.jpg',
  'https://amateurphotographer.com/wp-content/uploads/sites/7/2022/09/Sony-FX30-18-P9261061-acr.jpg',
];

const HomeScreen = () => {
  const { Layout, Fonts, Gutters, Icons, Colors } = useTheme();
  return (
    <SafeAreaView>
      <View style={[Gutters.xsSmallHMargin, Gutters.xsSmallTMargin]}>
        <View style={[Layout.row, Layout.rowCenterBetween]}>
          <Image
            source={Icons.LocationIcon}
            style={[Layout.sizeIcon]}
            tintColor={Colors.mainColor}
          />
          {/*<Text style={[Fonts.textRegular]}>Hanoi VietNam</Text>*/}
          <Text style={[Fonts.textLarge, Fonts.textXBold]} color={'gray'}>
            Hanoi
          </Text>
          <TouchableOpacity style={[Layout.alignItemsEnd]}>
            <View
              style={[
                Layout.absolute,
                Layout.sizeQuantity,
                Gutters.xSmallBottom,
                Layout.baseRounded,
                Layout.center,
                {
                  backgroundColor: Colors.success,
                  zIndex: 999,
                },
              ]}
            >
              <Text variant={'default'} color={'white'}>
                10
              </Text>
            </View>
            <Image
              source={Icons.ShoppingIcon}
              style={[Layout.sizeIcon]}
              tintColor={Colors.mainColor}
            />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView>
        <Welcome />
        <Slider dataImage={slides} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
