import React from 'react';
import {Color, Space} from '../../theme/const';
import {TextInput, View, StyleSheet} from 'react-native';
import {SvgXml} from 'react-native-svg';
import search_icon from '../../assets/icons/search_icon';
const SearchInput = ({placeholder, onChangeText, style}) => {
  return (
    <View style={[styles.searchContainer, style]}>
      <TextInput
        onChangeText={onChangeText}
        style={styles.input}
        placeholder={placeholder}
      />
      <SvgXml xml={search_icon} style={{marginHorizontal: 12}} />
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    marginHorizontal: Space.XL,
    borderColor: Color.borderColor,
    borderWidth: 1,
    borderRadius: 7,
    height: 55,
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: 'rgba(154, 175, 186, 0.25)',
    backgroundColor: '#fff',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
  input: {
    flex: 1,
    color: Color.Black,
    paddingLeft: 12,
    fontFamily: 'Raleway-Regular',
  },
});

export default SearchInput;
