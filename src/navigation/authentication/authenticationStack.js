import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login, Verification} from '../../screens';

const stack = createNativeStackNavigator();

function AuthNavigator() {
  return (
    <stack.Navigator
      initialRouteName="Login"
      screenOptions={{headerShown: false}}>
      <stack.Screen
        name="Login"
        options={{headerShown: false}}
        component={Login}
      />
      <stack.Screen
        name="Verification"
        options={{headerShown: false}}
        component={Verification}
      />
    </stack.Navigator>
  );
}

export default AuthNavigator;
