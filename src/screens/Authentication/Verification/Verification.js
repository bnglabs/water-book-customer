import React, {useState, useContext} from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import styles from './Verification.style';
import {Color, TxtWeight, Space} from '../../../theme/const';
import {Txt} from '../../../common';
import {Input} from '../../../common/TxtInput/TxtInput';
import {Btn} from '../../../common/button/Btn';
import {Context as AuthContext} from '../../../context/AuthContext';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {useLoginMutation} from '../../../services/auth';
import {addKeyToStorage} from '../../../helpers/asyncStorage';
import { useLoginVendorMutation } from '../../../services/vendor';

const Verification = ({route}) => {
  const phoneNumber = route.params?.phoneNumber;
  const [value, setValue] = useState('');

  // const [isLoading, setIsLoading] = useState(false);
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const CELL_COUNT = 6;
  const {signin} = useContext(AuthContext);

  const [loginUser, {isError, isSuccess, isLoading}] = useLoginVendorMutation();

  const onPresslogin = async () => {
    const login = await loginUser({vendor_number: phoneNumber});
    console.log('login.data--->', login);
    if (!login.error) {
      await addKeyToStorage('user', JSON.stringify(login.data.data.vendor));
      await addKeyToStorage('token', JSON.stringify(login.data.data.token));
      signin();
    }
    // setIsLoading(true);
  };
  const handleCode = e => {
    console.log(e);
  };

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
              Enter your
            </Txt>
            <Txt
              size={34}
              weight={TxtWeight.Regular}
              mt={8}
              color={Color.Black}>
              verification code
            </Txt>
          </View>
          <View
            style={{
              marginHorizontal: Space.XL,
              width: '70%',
              marginVertical: Space.MD,
            }}>
            <CodeField
              ref={ref}
              {...props}
              // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
              value={value}
              onChangeText={setValue}
              cellCount={CELL_COUNT}
              rootStyle={styles.codeFieldRoot}
              keyboardType="number-pad"
              textContentType="oneTimeCode"
              renderCell={({index, symbol, isFocused}) => (
                <Txt
                  key={index}
                  style={[styles.cell, isFocused && styles.focusCell]}
                  onLayout={getCellOnLayoutHandler(index)}>
                  {symbol || (isFocused ? <Cursor /> : null)}
                </Txt>
              )}
            />
          </View>
          <Btn
            loading={isLoading}
            style={{marginTop: 20, height: 58, width: 120}}
            onPress={onPresslogin}>
            Verify OTP
          </Btn>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Verification;
