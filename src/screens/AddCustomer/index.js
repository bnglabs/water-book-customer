import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  View,
} from 'react-native';
import {Color, Space} from '../../theme/const';
import {Header, Input, Btn, TextArea, ScheduleDay} from '../../common';
import {useAddCustomerMutation} from '../../services/customer';
import {useNavigation} from '@react-navigation/native';

const AddCustomer = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [unitPrice, setUnitPrice] = useState('');
  const [address, setAddress] = useState('');
  const [floor, setFloor] = useState('0');
  const [weekSchedule, setWeekSchedule] = useState([
    {
      day: 'Monday',
      enable: false,
      bottle: 0,
      key: 'monday',
    },
    {
      day: 'Tuesday',
      enable: false,
      bottle: 0,
      key: 'tuesday',
    },
    {
      day: 'Wednesday',
      enable: false,
      bottle: 0,
      key: 'wednesday',
    },
    {
      day: 'Thursday',
      enable: false,
      bottle: 0,
      key: 'thursday',
    },
    {
      day: 'Friday',
      enable: false,
      bottle: 0,
      key: 'friday',
    },
    {
      day: 'Saturday',
      enable: false,
      bottle: 0,
      key: 'saturday',
    },
    {
      day: 'Sunday',
      enable: false,
      bottle: 0,
      key: 'sunday',
    },
  ]);

  const navigation = useNavigation();

  const [addCustomer, {isError, isLoading, data}] = useAddCustomerMutation();

  const validateSchedule = () => {
    const obj = {
      isValid: false,
      schedule: {},
      errorMsg: 'Please add the bottle delivery days',
    };

    for (var i = 0; i < weekSchedule.length; i++) {
      let schedule = weekSchedule[i];
      if (schedule.enable) {
        if (schedule.bottle === 0) {
          obj.errorMsg = `Please enter number of bottles for ${schedule.day}`;
          obj.isValid = false;
          break;
        } else {
          obj.isValid = true;
          obj.schedule[schedule.key] = schedule.bottle;
          obj.errorMsg = '';
        }
      } else {
        obj.schedule[schedule.key] = 0;
      }
    }

    return obj;
  };

  const handleOnPressAddCustomer = async () => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

    if (name === '') {
      return alert('Please enter customer name');
    }
    if (number === '' || number.length !== 11) {
      return alert('Please enter valid customer number like 03001111111');
    }

    // console.log('reg.test(email)-->', reg.test(email))
    // if (email === '' || reg.test(email) === false) {
    //   return alert('Please enter valid customer email');
    // }
    if (unitPrice === '') {
      return alert('Please enter bottle unit price');
    }
    if (address === '') {
      return alert('Please enter customer address');
    }

    console.log('validateSchedule()--', validateSchedule());

    if (!validateSchedule().isValid) {
      return alert(validateSchedule().errorMsg);
    }

    const obj = {
      name: name,
      number: number,
      email: email,
      address: address,
      unit_price: Number(unitPrice),
      floor: Number(floor),
      delivery_days: validateSchedule().schedule,
    };
    console.log('obj-->', obj);

    const registerCustomer = await addCustomer(obj);
    if (!registerCustomer.error) {
      alert('Customer Added');
      navigation.goBack();
    } else {
      alert(registerCustomer.error);
    }
  };
  const handleOnChangeSlot = (e, i) => {
    const schedule = weekSchedule;

    schedule[i].enable = !schedule[i].enable;
    setWeekSchedule([...schedule]);
  };

  const handleOnChangeBottle = (num, ind) => {
    const schedule = weekSchedule;
    schedule[ind].bottle = num;
    setWeekSchedule([...schedule]);

    // console.log('num , ind-->', num, ind);
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Color.White}}>
      <Header title={'Add Customer'} back rightIcon={<TouchableOpacity />} />
      <ScrollView style={{flex: 1}}>
        <View style={styles.container}>
          <Input
            containerSyle={{marginVertical: Space.SM, marginHorizontal: 0}}
            value={name}
            label={'Name'}
            onChangeText={text => setName(text)}
            placeholder={'Customer name'}
          />
          <Input
            containerSyle={{marginVertical: Space.SM, marginHorizontal: 0}}
            value={number}
            label={'Number'}
            maxLength={10}
            keyboardType={'number-pad'}
            phoneNumber
            onChangeText={text => setNumber(text)}
            placeholder={'3132933803'}
          />
          <Input
            containerSyle={{marginTop: Space.SM, marginHorizontal: 0}}
            value={email}
            label={'Email'}
            keyboardType={'email-address'}
            onChangeText={text => setEmail(text)}
            placeholder={'e.g bilal@gmail.com'}
          />
          <TextArea
            label={'Address'}
            placeholder={'Customer address'}
            value={address}
            onChange={e => setAddress(e)}
            textAreaStyle={{minHeight: 120, paddingTop: 12}}
            style={{marginBottom: Space.SM}}
          />
          <Input
            containerSyle={{marginVertical: Space.SM, marginHorizontal: 0}}
            value={unitPrice}
            label={'Unit Price'}
            keyboardType={'number-pad'}
            onChangeText={text => setUnitPrice(text)}
            placeholder={'Enter unit price'}
          />
          <Input
            containerSyle={{marginVertical: Space.SM, marginHorizontal: 0}}
            value={floor}
            label={'Floor'}
            keyboardType={'number-pad'}
            onChangeText={text => setFloor(text)}
            placeholder={'Enter Floor '}
          />
          {weekSchedule.map((obj, ind) => {
            return (
              <ScheduleDay
                handleSlotsView={handleOnChangeSlot}
                key={ind}
                i={ind}
                onChangeBottle={handleOnChangeBottle}
                obj={obj}
                last={ind + 1 === weekSchedule.length}
              />
            );
          })}
        </View>
      </ScrollView>
      <Btn
        style={{
          borderRadius: 0,
          marginHorizontal: 0,
        }}
        loading={isLoading}
        onPress={handleOnPressAddCustomer}>
        Add New Customer
      </Btn>
    </SafeAreaView>
  );
};

export default AddCustomer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: Space.XL,
    marginVertical: Space.SM,
  },
});
