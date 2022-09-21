import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {Txt} from '../index';
import {Color, TxtWeight} from '../../theme/const';

const   TextArea = ({
  label,
  placeholder,
  labelStyle,
  value,
  onChange,
  style,
  noOfLines,
  textAreaStyle,
}) => {
  return (
    <View style={[styles.container, style]}>
      {label && (
        <Txt size={14} mb={8} style={labelStyle} weight={TxtWeight.Regular}>
          {label}
        </Txt>
      )}
      <TextInput
        editable
        multiline
        textAlignVertical="top"
        numberOfLines={noOfLines ? noOfLines : 7}
        style={[styles.textArea, textAreaStyle]}
        placeholder={placeholder}
        value={value}
        onChangeText={onChange}
      />
    </View>
  );
};

export default TextArea;

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
  },
  textArea: {
    borderWidth: 1,
    borderColor: Color.borderColor,
    borderRadius: 6,
    padding: 15,
    justifyContent: 'flex-start',
    fontFamily: 'Raleway-Regular',
  },
});
