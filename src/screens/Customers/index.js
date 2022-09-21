import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native';
import {Color, Space} from '../../theme/const';
import {
  Header,
  SearchInput,
  ScheduleCard,
  FilterModal,
  DeliveryModal,
  PaymentModal,
} from '../../common';
import {SvgXml} from 'react-native-svg';
import {add_customer, plus} from '../../assets';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {useLazyGetCustomersQuery} from '../../services/customer';
import {useSelector} from 'react-redux';
import {useLazyGetVendorByNumberQuery, vendorApi} from '../../services/vendor';
import {getVendorInfo} from '../../constants';
import {useAddDeliveryMutation} from '../../services/delivery';

const Customers = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [filterModal, setFilterModal] = useState(false);
  const [resultsPerPage, setResultsPerPage] = useState(20);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showAddBottleModal, setShowAddBottleModal] = useState(false);
  const [vendorInfo, setVendorInfo] = useState({});
  const [chosenCustomerId, setChosenCustomerId] = useState('');

  useEffect(() => {
    if (isFocused) {
      getCustomers({
        resultsPerPage,
      });
    }
  }, [isFocused, resultsPerPage]);

  useEffect(() => {
    getVendor();
  }, []);

  const getVendor = async () => {
    const info = await getVendorInfo();
    setVendorInfo(info);
  };

  const [getCustomers, {isLoading, data: customers, isSuccess, refetch}] =
    useLazyGetCustomersQuery();

  const [addDelivery, {isLoading: loadingAddBottles}] =
    useAddDeliveryMutation();

  const handleAddDelivery = async obj => {
    const deliveryObj = obj;
    obj.vendor_id = vendorInfo._id;
    obj.customer_id = chosenCustomerId;

    const added = await addDelivery(deliveryObj);
    if (!added.error) {
      setShowAddBottleModal(false);
      alert('Delivery added');
    }
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Color.White}}>
      <Header
        title={'Customers'}
        onPressRightIcon={() => setFilterModal(true)}
        rightIcon={
          <TouchableOpacity onPress={() => navigation.navigate('AddCustomer')}>
            <SvgXml xml={add_customer} />
          </TouchableOpacity>
        }
      />

      <DeliveryModal
        visible={showAddBottleModal}
        loading={loadingAddBottles}
        onClose={() => setShowAddBottleModal(false)}
        onAddDel
        onAddDelivery={handleAddDelivery}
      />
      <PaymentModal
        visible={showPaymentModal}
        onClose={() => setShowPaymentModal(false)}
      />
      <FilterModal
        visible={filterModal}
        onClose={() => setFilterModal(false)}
      />
      <FlatList
        data={customers ? customers?.data[0]?.customer : []}
        onEndReachedThreshold={0.5}
        onEndReached={() => setResultsPerPage(resultsPerPage + 10)}
        ListHeaderComponent={
          <>
            <SearchInput
              placeholder={'Search Customer'}
              style={{marginTop: 20}}
            />
            {isLoading && <ActivityIndicator />}
          </>
        }
        renderItem={({item, index}) => {
          return (
            <ScheduleCard
              key={index}
              item={item}
              onPress={() =>
                navigation.navigate('CustomerDetails', {userId: item._id})
              }
              onPressAddBottle={() => {
                setShowAddBottleModal(true), setChosenCustomerId(item._id);
              }}
              onPressAddPayment={() => setShowPaymentModal(true)}
            />
          );
        }}
      />
    </SafeAreaView>
  );
};

export default Customers;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: Space.XL,
    marginVertical: Space.SM,
  },
  fabView: {
    position: 'absolute',
    bottom: 12,
    right: 12,
    backgroundColor: Color.primary,
    height: 46,
    width: 46,
    borderRadius: 23,
    justifyContent: 'center',
    alignItems: 'center',

    shadowColor: Color.primary,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 8,
  },
});
