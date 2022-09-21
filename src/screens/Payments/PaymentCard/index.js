import React from 'react';
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {Color, TxtWeight} from '../../../theme/const';
import {Txt, Btn} from '../../../common';
import {whatsapp_icon, phone_icon, calendarIcon} from '../../../assets';
import {SvgXml} from 'react-native-svg';
import {wallet_icon} from '../../../assets';

const PaymentCard = ({pending, received}) => {
  return (
    <View style={styles.container}>
      <View style={styles.headingView}>
        <Txt size={18} weight={TxtWeight.Bold}>
          Bilal
        </Txt>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image source={wallet_icon} style={styles.icon} />
          <Txt ml={10} weight={TxtWeight.Medium} size={20}>
            2200
          </Txt>
        </View>
      </View>
      <View style={styles.paymentView}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <TouchableOpacity style={{marginRight: 12}}>
            <Image
              source={phone_icon}
              style={{
                tintColor: Color.primary,
                height: 20,
                width: 20,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <SvgXml xml={whatsapp_icon} width={20} height={20} />
          </TouchableOpacity>
        </View>
        {received && (
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <SvgXml xml={calendarIcon} />
            <Txt ml={7}>25/06/2022</Txt>
          </View>
        )}
        {pending && <Btn style={styles.invoiceBtn}>Send Invoice</Btn>}
      </View>
    </View>
  );
};

export default PaymentCard;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: Color.skyBlueDark,
    borderRadius: 6,
    padding: 12,
    backgroundColor: Color.lightGrey2,
    marginBottom: 15,
  },
  headingView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: Color.borderColor,
    paddingBottom: 15,
  },
  paymentView: {
    paddingTop: 15,
    paddingBottom: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    tintColor: Color.primary,
    height: 22,
    width: 22,
  },
  invoiceBtn: {
    height: 36,
    width: 120,
    marginHorizontal: 0,
  },
});
