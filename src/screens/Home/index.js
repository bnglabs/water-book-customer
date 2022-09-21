import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {Color, Space, TxtWeight} from '../../theme/const';
import {Txt, Header} from '../../common';
import {SvgXml} from 'react-native-svg';
import {filter} from '../../assets';

const Home = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Color.White}}>
      <Header title={'Dashboard'} />
      <ScrollView style={{flex: 1}}></ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: Space.XL,
    marginVertical: Space.MD,
  },
});
