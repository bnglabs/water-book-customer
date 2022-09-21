import React, {useState} from 'react';
import {Color, TxtWeight} from '../../theme/const';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Txt from '../text/Text';
import ToggleSwitch from 'toggle-switch-react-native';
import Counter from '../counter';

const ScheduleDay = ({obj, handleSlotsView, onChangeBottle, last, i}) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        last && {borderBottomWidth: 0},
        {height: obj.enable ? 135 : 60},
      ]}
      onPress={() => handleSlotsView(obj, i)}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}>
        <Txt size={17} color={Color.Black} weight={TxtWeight.Regular}>
          {obj.day}
        </Txt>
        <ToggleSwitch
          isOn={obj.enable}
          onColor="#BDD4F7"
          offColor="#E5E9EB"
          size="small"
          thumbOnStyle={{backgroundColor: '#2A76E8'}}
          thumbOffStyle={{backgroundColor: '#8B8B8B'}}
          // disabled
          onToggle={() => handleSlotsView(obj, i)}
        />
      </View>
      {obj.enable && (
        <Counter
          difference={1}
          duration={obj.bottle}
          setDuration={(num) => onChangeBottle(num, i)}
          style={{borderColor: Color.lightGrey}}
        />
      )}
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    borderBottomColor: Color.borderColor,
    borderBottomWidth: 1,
    paddingVertical: 15,
  },
});
export default ScheduleDay;
