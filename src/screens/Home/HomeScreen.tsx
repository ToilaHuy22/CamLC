import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import { useTheme } from '@/hooks';
import { Text, Welcome } from '@/components';

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
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
