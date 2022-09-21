import React, {useState, useContext} from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import styles from './LoginScreen.style';
import {Color, TxtWeight, Space} from '../../../theme/const';
import {Txt, Headers} from '../../../common';
import {Input} from '../../../common/TxtInput/TxtInput';
import {Btn} from '../../../common/button/Btn';
import {Context as AuthContext} from '../../../context/AuthContext';
import {useNavigation} from '@react-navigation/native';
import {useLazyGetVendorByNumberQuery} from '../../../services/vendor';

const LoginScreen = () => {
  const [phoneNo, setPhoneNo] = useState('3082409229');
  const navigation = useNavigation();
  const {signin} = useContext(AuthContext);

  const [verifyVendor, {isLoading}] = useLazyGetVendorByNumberQuery();

  const onPresslogin = async () => {
    const number = '92' + phoneNo;
    const verified = await verifyVendor({number});

    if (verified.isSuccess) {
      console.log(verified.data);
      if (verified.data.data) {
        navigation.navigate('Verification', {phoneNumber: number});
      } else {
        alert(verified.data.msg);
      }
    }
  };

  console.log('isLoading-->', isLoading);
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : null}>
        <ScrollView
          style={{backgroundColor: Color.White}}
          showsVerticalScrollIndicator={false}>
          <View style={{marginLeft: Space.XL, marginTop: 41}}>
            <Txt size={34} weight={TxtWeight.Regular} color={Color.Black}>
              Sign in to
            </Txt>
            <Txt
              size={34}
              weight={TxtWeight.Regular}
              mt={8}
              color={Color.Black}>
              your account
            </Txt>
          </View>
          <View style={{marginLeft: Space.XL, marginVertical: 18}}>
            <Txt size={17} weight={TxtWeight.Regular} color={Color.Black}>
              Please enter your phone number
            </Txt>
            <Txt
              size={17}
              weight={TxtWeight.Regular}
              mt={5}
              color={Color.Black}>
              below to sign in.
            </Txt>
          </View>

          <Input
            containerSyle={{marginVertical: Space.MD}}
            value={phoneNo}
            label={'Phone Number'}
            phoneNumber
            maxLength={10}
            keyboardType={'number-pad'}
            onChangeText={text => setPhoneNo(text)}
            placeholder={'Enter Your Number'}
          />

          <Btn
            loading={isLoading}
            disabled={phoneNo.length < 10}
            style={{marginTop: 20, height: 58, width: 120}}
            onPress={onPresslogin}>
            Sign In
          </Btn>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;
