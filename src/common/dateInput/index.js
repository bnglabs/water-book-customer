import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import {Txt} from '../index';
import {SvgXml} from 'react-native-svg';
import {minus_icon, plus_small_icon} from '../../assets/index';
import {Color, TxtWeight} from '../../theme/const';
import Modal from 'react-native-modal';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {Btn} from '../index';

const DateInput = ({date, onConfirm}) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    hideDatePicker();
    onConfirm(new Date(date).toLocaleDateString());
  };
  return (
    <View>
      <Txt size={16} mb={5} weight={TxtWeight.Medium}>
        Date  
      </Txt>
      <TouchableOpacity onPress={showDatePicker} style={styles.dateInput}>
        <Txt>{new Date(date).toLocaleDateString()}</Txt>
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        date={date}
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        maximumDate={new Date()}
      />
    </View>
  );
};

export default DateInput;

const styles = StyleSheet.create({
  dateInput: {
    borderWidth: 1,
    borderColor: Color.borderColor,
    padding: 15,
    borderRadius: 6,
  },
});
