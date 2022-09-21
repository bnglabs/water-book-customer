import React from 'react';
import {StyleSheet, TouchableOpacity, ActivityIndicator} from 'react-native';
import {Color, Space, TxtSize, TxtWeight} from '../../theme/const';
import Txt from '../text/Text';
export const Btn = ({
  children,
  onPress,
  txtStyle,
  style,
  loading,
  disabled,
  txtWeight,
  txtColor,
  txtSize,
}) => {
  return (
    <TouchableOpacity
      disabled={loading || disabled}
      style={[
        styles.touchableBtn,
        (loading || disabled) && {backgroundColor: Color.skyBlueDark},
        style,
      ]}
      onPress={onPress}>
      {loading && (
        <ActivityIndicator color={'white'} style={{marginRight: 12}} />
      )}
      <Txt
        color={txtColor ? txtColor : Color.White}
        size={txtSize ? txtSize : TxtSize.LG - 2}
        weight={txtWeight ? txtWeight : TxtWeight.Regular}
        style={[txtStyle]}>
        {children}
      </Txt>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touchableBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.primary,
    height: 48,
    marginHorizontal: Space.XL,
    flexDirection: 'row',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
