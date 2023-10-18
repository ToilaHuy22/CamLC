import React from 'react';
import { SafeAreaView } from 'react-native';
import { SearchBox } from '@/components';

const SearchScreen = () => {
  return (
    <SafeAreaView>
      <SearchBox
        placeholder={'What are you looking for?'}
        isSearchScreen={true}
      />
    </SafeAreaView>
  );
};

export default SearchScreen;
