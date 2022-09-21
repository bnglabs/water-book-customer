import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Txt} from '../index';
import {Color, Space, TxtWeight} from '../../theme/const';
import Modal from 'react-native-modal';
import {Counter, TextArea, Btn, DateInput} from '../index';

const DeliveryModal = ({visible, onClose, loading, onAddDelivery}) => {
  const [bottleDelivered, setBottleDelivered] = useState(1);
  const [bottleReceived, setBottleReceived] = useState(1);
  const [bottleMissed, setBottleMissed] = useState(1);
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState('');
  return (
    <Modal
      isVisible={visible}
      transparent={true}
      onBackButtonPress={onClose}
      animationIn={'fadeIn'}
      animationOut={'fadeOut'}
      onBackdropPress={onClose}
      style={{flex: 1}}>
      <View style={styles.container}>
        <Txt
          color={Color.primary}
          weight={TxtWeight.Bold}
          size={20}
          center
          mt={12}
          mb={14}>
          Add Delivery
        </Txt>
        <View style={styles.line} />
        <View style={{marginHorizontal: Space.MD, marginVertical: Space.MD}}>
          <DateInput date={date} onConfirm={date => setDate(date)} />
          <View style={{marginTop: 10}}>
            <Txt weight={TxtWeight.Medium}>Bottle Delivered</Txt>
            <Counter
              difference={1}
              duration={bottleDelivered}
              setDuration={e => setBottleDelivered(e)}
              style={{borderColor: Color.lightGrey}}
              mt={3}
            />
          </View>
          <View style={{marginTop: 5}}>
            <Txt weight={TxtWeight.Medium}>Bottle Received</Txt>
            <Counter
              difference={1}
              duration={bottleReceived}
              setDuration={e => setBottleReceived(e)}
              style={{borderColor: Color.lightGrey}}
              mt={3}
            />
          </View>
          <View style={{marginTop: 5}}>
            <Txt weight={TxtWeight.Medium}>Missed Bottle</Txt>
            <Counter
              difference={1}
              duration={bottleMissed}
              setDuration={e => setBottleMissed(e)}
              style={{borderColor: Color.lightGrey}}
              mt={3}
            />
          </View>
          <View style={{marginTop: 5}}>
            <Txt weight={TxtWeight.Medium}>Note</Txt>
            <TextArea
              style={{marginTop: 12}}
              placeholder={'Your comments here'}
              noOfLines={4}
              onChange={txt => setNotes(txt)}
              value={notes}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 20,
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
              loading = {loading}
              onPress={() => {
                let obj = {
                  bottles: bottleDelivered,
                  bottel_received: bottleReceived,
                  bottel_missed: bottleMissed,
                  notes: notes,
                };
              
                onAddDelivery(obj);
              }}>
              Add Bottles
            </Btn>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default DeliveryModal;

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
});
