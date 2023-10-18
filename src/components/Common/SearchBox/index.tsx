import { Image, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import React from 'react';
import { useTheme } from '@/hooks';
import { useNavigation } from '@react-navigation/native';

const SearchBox = () => {
  const { Layout, Fonts, Gutters, Icons, Colors } = useTheme();
  const navigation = useNavigation();

  return (
    <View
      style={[
        Layout.rowCenter,
        Layout.baseRounded,
        Gutters.tinyVMargin,
        Layout.heightMediumSize,
        {
          backgroundColor: Colors.secondary,
        },
      ]}
    >
      <TouchableOpacity>
        <Image
          source={Icons.SearchIcon}
          style={[Layout.sizeIcon, Gutters.tinyLMargin]}
          tintColor={'secondary'}
        />
      </TouchableOpacity>
      <View style={[Layout.fill, Gutters.smallRMargin, Layout.smallRounded]}>
        <TextInput
          style={[Layout.fullSize, Gutters.smallHPadding]}
          value={''}
          onPressIn={() => navigation.navigate('Search')}
          placeholder={'What are you looking for?'}
        />
      </View>
      <View>
        <TouchableOpacity
          style={[
            Layout.fullHeight,
            Layout.widthMediumSize,
            Layout.largeRounded,
            Layout.center,
            {
              backgroundColor: Colors.mainColor,
            },
          ]}
        >
          <Image
            source={Icons.CameraIcon}
            style={[Layout.sizeIcon]}
            tintColor={'secondary'}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SearchBox;
