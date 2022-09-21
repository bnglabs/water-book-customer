import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Txt} from '../index';
import {Color, Space} from '../../theme/const';
import {
  home_icon,
  profile_icon,
  settings,
  wallet_icon_svg,
  dollar,
  bottle,
} from '../../assets/index';
import {SvgXml} from 'react-native-svg';

const BottomTab = ({state, descriptors, navigation}) => {
  let tabs = [
    {
      icon: bottle,
      name: 'Bottles',
      navigate: 'Home',
    },
    {
      icon: profile_icon,
      name: 'Payments',
      navigate: 'Customers',
    },
  ];
  const handleTabs = (e, i) => {
    navigation.navigate(e.navigate);
  };

  return (
    <View style={styles.bottomTab}>
      {tabs.map((e, i) => {
        const isFocused = state.index === i;

        return (
          <TouchableOpacity
            style={styles.tabsView}
            key={i}
            onPress={() => handleTabs(e, i)}>
            <SvgXml
              xml={e.icon}
              stroke={isFocused ? Color.primary : Color.lightGrey}
            />
            <Txt
              color={isFocused ? Color.primary : Color.lightGrey}
              mt={3}
              size={10}>
              {e.name}
            </Txt>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default BottomTab;

const styles = StyleSheet.create({
  bottomTab: {
    backgroundColor: Color.White,
    flexDirection: 'row',
    minHeight: 60,
    borderTopColor: '#E5E9EB',
    borderTopWidth: 1,
    alignItems: 'center',
    paddingHorizontal: Space.SM,
    justifyContent: 'space-between',
  },
  tabsView: {
    alignItems: 'center',
    flex: 1,
  },
});
