import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  useWindowDimensions,
  TouchableOpacity,
} from 'react-native';
import {Color, Space, TxtWeight} from '../../theme/const';
import {Txt, Header, FilterModal} from '../../common';
import {TabView, SceneMap} from 'react-native-tab-view';
import PendingPayments from './PendingPayments';
import ReceivedPayments from './ReceivedPayments';

const FirstRoute = () => <PendingPayments />;
const SecondRoute = () => <ReceivedPayments />;

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

const Payments = () => {
  const [filterModal, setFilterModal] = useState(false);
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Pending'},
    {key: 'second', title: 'Received'},
  ]);
  const TabBar = props => {
    const inputRange = props.navigationState.routes.map((x, i) => i);
    return (
      <View style={styles.tabBar}>
        {props.navigationState.routes.map((route, i) => {
          const opacity = props.position.interpolate({
            inputRange,
            outputRange: inputRange.map(inputIndex =>
              inputIndex === i ? 1 : 0.5,
            ),
          });
          return (
            <TouchableOpacity
              onPress={() => setIndex(i)}
              key={i}
              style={[
                styles.tabItem,
                i === index && {backgroundColor: Color.primary},
                i === 1
                  ? {borderTopRightRadius: 16, borderBottomRightRadius: 16}
                  : {borderTopLeftRadius: 16, borderBottomLeftRadius: 16},
              ]}>
              <Txt
                color={i === index ? Color.White : Color.Black}
                size={16}
                weight={i === index && TxtWeight.Medium}>
                {route.title}
              </Txt>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Color.White}}>
      <Header
        title={'Payments'}
        onPressRightIcon={() => setFilterModal(true)}
      />
      <FilterModal
        visible={filterModal}
        onClose={() => setFilterModal(false)}
      />
      <View style={{flex: 1, marginHorizontal: Space.XL}}>
        <TabView
          navigationState={{index, routes}}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{width: layout.width}}
          renderTabBar={TabBar}
        />
      </View>
    </SafeAreaView>
  );
};

export default Payments;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: Space.XL,
    marginVertical: Space.MD,
  },
  tabBar: {
    flexDirection: 'row',
    backgroundColor: Color.lightGrey2,
    borderRadius: 16,
    marginTop: Space.MD,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 12,
  },
});
