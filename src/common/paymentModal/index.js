import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Txt} from '../index';
import {Color, Space, TxtWeight} from '../../theme/const';
import Modal from 'react-native-modal';
import {Btn, DateInput, Input} from '../index';

const PaymentModal = ({visible, onClose}) => {
  const [amount, setAmount] = useState('');
  return (
    <Modal
      isVisible={visible}
      transparent={true}
      onBackButtonPress={onClose}
      onBackdropPress={onClose}
      animationIn = {'fadeIn'}
      animationOut = {'fadeOut'}
      style={{flex: 1}}>
      <View style={styles.container}>
        <Txt
          color={Color.primary}
          weight={TxtWeight.Bold}
          size={20}
          center
          mt={12}
          mb={14}>
          Add Payment
        </Txt>
        <View style={styles.line} />
        <View
          style={{
            marginVertical: Space.MD,
            marginHorizontal: Space.MD,
          }}>
          <DateInput />
          <Input
            containerSyle={{marginTop: Space.SM, marginHorizontal: 0}}
            value={amount}
            label={'Enter an Amount'}
            keyboardType={'number-pad'}
            onChangeText={text => setAmount(text)}
            placeholder={'Enter an Amount'}
          />
          <View
            style={{
              marginTop: 12,
            }}>
            <View style={styles.alignment}>
              <Txt>Amount Due</Txt>
              <Txt>2000</Txt>
            </View>
            <View style={[styles.alignment, {marginTop: 5}]}>
              <Txt weight={TxtWeight.Bold}>Balance</Txt>
              <Txt weight={TxtWeight.Bold}>+500</Txt>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 18,
            }}>
            <Btn
              style={styles.cancelBtn}
              onPress={onClose}
              txtColor={Color.primary}
              txtSize={14}>
              Cancel
            </Btn>
            <Btn
              txtSize={14}
              style={{marginHorizontal: 0, width: '47%'}}
              onPress={onClose}>
              Add Payment
            </Btn>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default PaymentModal;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.White,
    borderRadius: 6,
  },
  line: {
    borderWidth: 1,
    borderColor: Color.borderColor,
  },
  cancelBtn: {
    backgroundColor: 'white',
    borderColor: Color.primary,
    borderWidth: 1,
    width: '47%',
    marginHorizontal: 0,
  },
  alignment: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
