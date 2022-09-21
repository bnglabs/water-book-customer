import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Txt} from '../index';
import {SvgXml} from 'react-native-svg';
import {minus_icon, plus_small_icon} from '../../assets/index';
import {Color} from '../../theme/const';

const Counter = ({duration, setDuration, difference, style, currency, mt}) => {
  return (
    <View style={{marginTop: mt ? mt : 12}}>
      <View style={[styles.durationsView, style]}>
        <TouchableOpacity
          onPress={() => duration !== 0 && setDuration(duration - difference)}
          style={{padding: 15}}>
          <SvgXml xml={minus_icon} />
        </TouchableOpacity>
        <Txt size={18}>
          {currency}
          {duration}
        </Txt>
        <TouchableOpacity
          onPress={() => setDuration(duration + difference)}
          style={{padding: 15}}>
          <SvgXml xml={plus_small_icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  durationsView: {
    borderWidth: 1,
    borderColor: Color.borderColor,
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 8,
  },
});
