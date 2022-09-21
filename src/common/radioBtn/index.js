import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Txt} from '../index';
import {SvgXml} from 'react-native-svg';
import {check_icon, minus_icon, plus_small_icon} from '../../assets/index';
import {Color, TxtWeight} from '../../theme/const';
import Modal from 'react-native-modal';
import {DateInput} from '../index';

const RadioBtn = ({data, setSelectedVal, selectedVal, style}) => {
  return (
    <View style={style}>
      {data &&
        data.map((e, i) => {
          return (
            <TouchableOpacity
              key={i}
              style={[
                styles.genderOption,
                i < data.length - 1 && {
                  borderBottomWidth: 1,
                  borderBottomColor: Color.borderColor,
                },
              ]}
              onPress={() => setSelectedVal(e)}>
              <Txt size={16} ml={8}>
                {e.title}
              </Txt>
              {e.title === selectedVal && (
                <View style={{marginLeft: 7}}>
                  <SvgXml xml={check_icon} />
                </View>
              )}
            </TouchableOpacity>
          );
        })}
    </View>
  );
};

export default RadioBtn;

const styles = StyleSheet.create({
  radioBtn: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Color.skyBlueDark,
    backgroundColor: Color.lightBlue,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedRadioBtn: {
    width: 12,
    height: 12,
    borderRadius: 10,
    backgroundColor: Color.primary,
  },
  genderOption: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
});
