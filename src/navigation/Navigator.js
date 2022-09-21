import React, {useContext} from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeStack from './homeTab/HomeTab';
import AuthNavigator from './authentication/authenticationStack';
import {Provider as AuthProvider} from '../context/AuthContext';
import {Context as AuthContext} from '../context/AuthContext';
import {navigationRef} from './rootnavigation';
import {I18nextProvider} from 'react-i18next';
import i18n from '../i18n';
import {store} from '../store';
import {Provider} from 'react-redux';
import {AddCustomer, CustomerDetails} from '../screens';

function App() {
  const AuthStack = createNativeStackNavigator();
  const {state} = useContext(AuthContext);
  return (
    <NavigationContainer ref={navigationRef}>
      <Provider store={store}>
        <I18nextProvider i18n={i18n}>
          <AuthStack.Navigator headerMode={'none'}>
            {state.signIn ? (
              <>
                <AuthStack.Screen
                  options={{headerShown: false}}
                  name={'App'}
                  component={HomeStack}
                />
                <AuthStack.Screen
                  options={{headerShown: false}}
                  name={'AddCustomer'}
                  component={AddCustomer}
                />
                <AuthStack.Screen
                  options={{headerShown: false}}
                  name={'CustomerDetails'}
                  component={CustomerDetails}
                />
              </>
            ) : (
              <>
                <AuthStack.Screen
                  options={{headerShown: false}}
                  name={'Auth'}
                  component={AuthNavigator}
                />
              </>
            )}
          </AuthStack.Navigator>
        </I18nextProvider>
      </Provider>
    </NavigationContainer>
  );
}

function Navigator() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </SafeAreaView>
  );
}

export default Navigator;
