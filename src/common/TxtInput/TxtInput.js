import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {Space, Color, TxtWeight} from '../../theme/const';
import Txt from '../text/Text';

export const Input = ({
  icon,
  label,
  onChange,
  style,
  input,
  meta,
  placeholder,
  labelFont,
  containerSyle,
  keyboardType,
  required,
  value,
  setValue,
  phoneNumber,
  ...inputProps
}) => {
  return (
    <View
      style={[
        {
          marginHorizontal: Space.XL,
        },
        containerSyle,
      ]}>
      <View style={{flexDirection: 'row'}}>
        <Txt
          size={labelFont ? labelFont : 14}
          mb={8}
          color={Color.Black}
          weight={TxtWeight.Medium}>
          {label}
        </Txt>
        {required && (
          <Txt size={20} color={'#F45656'}>
            {''} *
          </Txt>
        )}
      </View>
      <View style={{flexDirection: 'row'}}>
        {phoneNumber && (
          <View style={styles.phoneNumber}>
            <Txt weight={TxtWeight.Bold}>+92</Txt>
          </View>
        )}

        <TextInput
          placeholderTextColor={Color.secondary}
          style={[styles.input, style]}
          placeholder={placeholder}
          keyboardType={keyboardType}
          value={value}
          onChangeText={e => (setValue ? setValue(e) : console.log(e))}
          {...inputProps}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    minHeight: 51,
    borderWidth: 1,
    paddingLeft: 12,
    borderColor: Color.borderColor,
    borderRadius: 6,
    flex: 1,
    fontFamily: 'Raleway-Regular',
  },

  inputIcon: {
    paddingHorizontal: Space.SM,
  },
  phoneNumber: {
    height: 51,
    width: 50,
    borderColor: Color.borderColor,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
  },
  imagesView: {
    borderColor: Color.borderColor,
    borderRadius: 10,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },

  imageUploadView: {
    borderColor: Color.skyBlueDark,
    borderWidth: 1,
    backgroundColor: Color.lightBlue,
    padding: 4,
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
