import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import {Color, TxtWeight} from '../../../theme/const';
import {Txt} from '../../../common';
import PaymentCard from '../PaymentCard';

const ReceivedPayments = () => {
  return (
    <View style={{flex: 1}}>
      <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
        <View style={styles.statusView}>
          <Txt size={18} weight={TxtWeight.Medium}>
            Total Received
          </Txt>
          <Txt size={18} weight={TxtWeight.Medium}>
            5000/-
          </Txt>
        </View>
        <View style={{marginTop: 15}}>
          {[1, 2, 3, 4, 5].map((e, i) => {
            return <PaymentCard received/>;
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default ReceivedPayments;

const styles = StyleSheet.create({
  statusView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: Color.borderColor,
    borderBottomWidth: 1,
    paddingVertical: 15,
  },
});
