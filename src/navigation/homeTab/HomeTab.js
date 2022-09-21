import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Customers, Payments, Settings} from '../../screens';
import {BottomTab} from '../../common';

const HomeStack = () => {
  const HomeStack = createBottomTabNavigator();
  return (
    <HomeStack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}
      tabBar={props => <BottomTab {...props} headerMode={'none'} />}>
      <HomeStack.Screen
        name="Home"
        options={{headerShown: false}}
        component={Home}
      />
      <HomeStack.Screen
        name="Customers"
        options={{headerShown: false}}
        component={Customers}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStack;
