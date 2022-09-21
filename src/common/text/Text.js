import React, {useState} from 'react';
import {Text, StyleSheet, Animated} from 'react-native';
import {Color, TxtWeight} from '../../theme/const';

function Txt({
  size,
  weight,
  color,
  center,
  mt,
  mr,
  mb,
  ml,
  lh,
  style,
  lang,
  ...restProps
}) {
  const getFontFamily = weight => {
    if (lang === 'urdu') {
      return 'Jameel-Noori-Nastaleeq';
    }

    if (weight === TxtWeight.Bold) {
      return 'Raleway-Bold';
    }
    if (weight === TxtWeight.Medium) {
      return 'Raleway-Medium';
    }
    if (weight === TxtWeight.Regular) {
      return 'Raleway-Regular';
    }
    if (weight === TxtWeight.Light) {
      return 'Raleway-Light';
    }
    return 'Raleway-Regular';
  };
  const allStyles = [
    styles.default,
    style,
    !!color && {color},
    {fontFamily: getFontFamily(weight)},
    !!size && {fontSize: size},
    !!center && {textAlign: 'center'},
    !!mt && {marginTop: mt},
    !!mr && {marginRight: mr},
    !!mb && {marginBottom: mb},
    !!ml && {marginLeft: ml},
  ];
  return <Text style={allStyles} {...restProps} />;
}

export default Txt;

const styles = StyleSheet.create({
  default: {
    color: Color.Black,
    // lineHeight : 27.4
  },
});
