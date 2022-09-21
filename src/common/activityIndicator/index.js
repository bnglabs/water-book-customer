import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {Color} from '../../theme/const';

const ActivityIndicatorLoader = () => (
  <View style={[styles.container, styles.horizontal]}>
    <ActivityIndicator size="large" color={Color.primary} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});

export default ActivityIndicatorLoader;
