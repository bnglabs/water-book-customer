import React from 'react';
import {View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import Txt from '../text/Text';
import {Color, Space, TxtWeight} from '../../theme/const';
import {phone_icon, whatsapp_icon} from '../../assets';
import {Btn} from '../button/Btn';
import {SvgXml} from 'react-native-svg';

const weekObj = {
  monday: {
    en: 'Mon',
  },
  tuesday: {
    en: 'Tue',
  },
  wednesday: {
    en: 'Wed',
  },
  thursday: {
    en: 'Thu',
  },
  friday: {
    en: 'Fri',
  },
  saturday: {
    en: 'Sat',
  },
  sunday: {
    en: 'Sun',
  },
};

const ScheduleCard = ({onPress, onPressAddBottle, onPressAddPayment, item}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.headingView}>
        <Txt size={18} weight={TxtWeight.Bold}>
          {item.name}
        </Txt>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <TouchableOpacity style={{marginHorizontal: 12}}>
            <Image
              source={phone_icon}
              style={{
                tintColor: Color.primary,
                height: 22,
                width: 22,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <SvgXml xml={whatsapp_icon} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.summaryView}>
        {Object.keys(item.delivery_days).map((key, i) => {
          const enabled = item.delivery_days[key] > 0;
          return (
            <View
              key={i}
              style={[
                styles.date,
                enabled > 0 && {
                  backgroundColor: Color.lightBlue,
                  borderWidth: 1,
                  borderColor: Color.primary,
                },
              ]}>
              <Txt size={12} mb={4}>
                {weekObj[key].en}
              </Txt>
              <View
                style={{
                  borderTopWidth: 1,
                  borderTopColor: enabled ? Color.primary : Color.borderColor,
                  width: '100%',
                }}
              />
              <Txt size={12} weight={enabled && TxtWeight.Bold}>
                {item.delivery_days[key]}
              </Txt>
            </View>
          );
        })}
      </View>
      <View style={styles.btnView}>
        <Btn
          onPress={onPressAddBottle}
          style={[styles.btn1, {height: 41}]}
          txtColor={Color.primary}>
          Add Bottles
        </Btn>
        <Btn
          onPress={onPressAddPayment}
          style={{width: '47%', marginHorizontal: 0, height: 41}}>
          Add Payment
        </Btn>
      </View>
    </TouchableOpacity>
  );
};

export default ScheduleCard;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: Color.skyBlueDark,
    borderRadius: 6,
    padding: 12,
    marginHorizontal: Space.XL,
    backgroundColor: Color.lightGrey2,
    marginVertical: 10,
  },
  headingView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: Color.borderColor,
    paddingBottom: 15,
  },
  summaryView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
  },
  date: {
    alignItems: 'center',
    backgroundColor: Color.White,
    paddingHorizontal: 5,
    borderRadius: 6,
    paddingVertical: 8,
  },
  btnView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
  },
  btn1: {
    width: '47%',
    marginHorizontal: 0,
    backgroundColor: Color.lightGrey2,
    borderWidth: 1,
    borderColor: Color.primary,
  },
});
