import React, {useState} from 'react';
import {View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import Txt from '../text/Text';
import {Color, TxtWeight, Space} from '../../theme/const';
import {SvgXml} from 'react-native-svg';
import {useNavigation} from '@react-navigation/native';
import {filter, back_arrow} from '../../assets';

const Header = ({back, title, rightIcon, onPressRightIcon}) => {
  const navigation = useNavigation();
  const handleOnPressBack = () => {
    back && navigation.goBack();
  };
  return (
    <View style={styles.header}>
      {back ? (
        <TouchableOpacity onPress={handleOnPressBack} style={styles.backView}>
          <SvgXml xml={back_arrow} />
          <Txt size={20} ml={12} weight={TxtWeight.Bold}>
            {title}
          </Txt>
        </TouchableOpacity>
      ) : (
        <View onPress={handleOnPressBack} style={styles.backView}>
          <Txt size={20} weight={TxtWeight.Bold}>
            {title}
          </Txt>
        </View>
      )}
      {rightIcon ? (
        rightIcon
      ) : (
        <TouchableOpacity onPress={onPressRightIcon}>
          <SvgXml xml={filter} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    minHeight: 60,
    borderBottomColor: '#E5E9EB',
    borderBottomWidth: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Space.XL,
  },
  backView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
