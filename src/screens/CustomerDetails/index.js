import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import {Color, Space, TxtWeight} from '../../theme/const';
import {Header, Txt, Btn, DeliveryModal, PaymentModal} from '../../common';
import {SvgXml} from 'react-native-svg';
import {
  phone_icon,
  whatsapp_icon,
  edit_icon,
  bottle_icon,
  wallet_icon,
  up_arrow,
  down_arrow,
  down_arrow_black,
  up_arrow_black,
} from '../../assets';
import {useNavigation} from '@react-navigation/native';
import {useLazyGetCustomerByIdQuery} from '../../services/customer';

const StatusView = () => {
  return (
    <View style={styles.statusView}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Txt size={18}>21 - 27 July</Txt>
        <Txt size={18}>40</Txt>
      </View>
      {[1, 2, 3, 4, 5, 6, 7].map((e, i) => {
        return (
          <View key={i}>
            <View
              style={{
                marginTop: 10,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={styles.round}>
                  <Txt color={Color.primary}>{21 + i}</Txt>
                </View>
                <Txt ml={10} size={18}>
                  Monday
                </Txt>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <SvgXml xml={up_arrow} />
                  <Txt size={18} ml={3}>
                    5
                  </Txt>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginLeft: 15,
                  }}>
                  <SvgXml xml={down_arrow} />
                  <Txt size={18} ml={3}>
                    5
                  </Txt>
                </View>
              </View>
            </View>
            {i !== 6 && (
              <View style={{flexDirection: 'row'}}>
                <View style={styles.line} />
              </View>
            )}
          </View>
        );
      })}
    </View>
  );
};

const CustomerDetails = ({route}) => {
  const [deliveryModal, setDeliveryModal] = useState(false);
  const [paymentModal, setPaymentModal] = useState(false);

  const data = [
    {
      title: 'Bottle Sent',
      icon: bottle_icon,
      quantity: 40,
    },
    {
      title: 'Bottle Missed',
      icon: bottle_icon,
      quantity: 2,
    },
    {
      title: 'Receivable Amount',
      icon: wallet_icon,
      quantity: 40,
    },
    {
      title: 'Amount Received',
      icon: wallet_icon,
      quantity: 40,
    },
  ];
  const [tabsData, setTabsData] = useState([
    {
      icon: bottle_icon,
      title: '21 - 27 July',
      quantity: 40,
      status: 'bottle',
      detail: false,
    },
    {
      icon: wallet_icon,
      title: 'Payment Received',
      quantity: 2000,
      status: 'rec',
      detail: false,
    },
    {
      icon: bottle_icon,
      title: '21 - 27 July',
      quantity: 40,
      status: 'bottle',
      detail: false,
    },
    {
      icon: wallet_icon,
      title: 'Payment Due',
      quantity: 2000,
      status: 'due',
      detail: false,
    },
  ]);
  const handleDetails = i => {
    let testData = [...tabsData];
    testData[i].detail = !testData[i].detail;
    setTabsData(testData);
  };

  useEffect(() => {
    getCustomerDetail({
      userId: route.params.userId,
    });
  }, [route]);

  const [
    getCustomerDetail,
    {isLoading, isError, data: customer, isSuccess, refetch},
  ] = useLazyGetCustomerByIdQuery();

  console.log('customer detail--->',  customer);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Color.White}}>
      <Header title={'Bilal Raza'} back />
      <DeliveryModal
        visible={deliveryModal}
        onClose={() => setDeliveryModal(false)}
      />
      <PaymentModal
        visible={paymentModal}
        onClose={() => setPaymentModal(false)}
      />
      <ScrollView style={{flex: 1}}>
        <View style={{marginHorizontal: Space.XL}}>
          <View style={styles.headerView}>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity>
                <Image source={phone_icon} style={styles.icon} />
              </TouchableOpacity>
              <TouchableOpacity style={{marginHorizontal: 12}}>
                <Image source={whatsapp_icon} style={styles.icon} />
              </TouchableOpacity>
            </View>
            <TouchableOpacity>
              <Image source={edit_icon} style={styles.icon} />
            </TouchableOpacity>
          </View>
          <View style={styles.alignment}>
            {data.map((e, i) => {
              return (
                <View key={i} style={styles.boxView}>
                  <TouchableOpacity style={{marginBottom: 5}}>
                    <Image source={e.icon} style={styles.icon} />
                  </TouchableOpacity>
                  <View style={styles.boxContentAlignment}>
                    <Txt weight={TxtWeight.Regular} center size={18}>
                      {e.title}
                    </Txt>
                  </View>
                  <Txt center weight={TxtWeight.Bold} size={18}>
                    {e.quantity}
                  </Txt>
                </View>
              );
            })}
          </View>
          <Txt weight={TxtWeight.Bold} size={20} mb={10} mt={10}>
            Recent Activity
          </Txt>
          <View>
            {tabsData.map((e, i) => {
              return (
                <View
                  key={i}
                  style={[
                    styles.tabsView,
                    e.status === 'rec' && {borderColor: Color.green},
                    e.status === 'due' && {borderColor: 'red'},
                  ]}>
                  <TouchableOpacity
                    key={i}
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                    onPress={() => handleDetails(i)}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Image
                        source={e.icon}
                        style={[
                          styles.icon,
                          {height: 30, width: 30},
                          e.status === 'rec' && {tintColor: Color.green},
                          e.status === 'due' && {tintColor: 'red'},
                        ]}
                      />
                      <Txt size={18} ml={8}>
                        {e.title}
                      </Txt>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Txt size={18} weight={TxtWeight.Bold}>
                        {e.quantity}
                      </Txt>
                      {e.status === 'bottle' && (
                        <View style={{marginLeft: 7}}>
                          {e.detail ? (
                            <SvgXml xml={up_arrow_black} fill={'#fff'} />
                          ) : (
                            <SvgXml xml={down_arrow_black} fill={'#fff'} />
                          )}
                        </View>
                      )}
                    </View>
                  </TouchableOpacity>
                  {e.status === 'due' && (
                    <View
                      style={{
                        alignItems: 'center',
                        marginTop: 12,
                      }}>
                      <Btn style={styles.invoiceBtn}>Send Invoice</Btn>
                    </View>
                  )}
                  {e.detail && e.status === 'bottle' && <StatusView />}
                </View>
              );
            })}
          </View>
        </View>
      </ScrollView>
      <View style={{flexDirection: 'row'}}>
        <Btn
          style={styles.btn}
          txtSize={14}
          onPress={() => setDeliveryModal(true)}>
          Add Bottles
        </Btn>
        <Btn
          style={[
            styles.btn,
            {
              backgroundColor: 'white',
              borderColor: Color.primary,
              borderWidth: 1,
            },
          ]}
          txtColor={Color.primary}
          txtSize={14}>
          Send Invoice
        </Btn>
        <Btn
          style={styles.btn}
          txtSize={14}
          onPress={() => setPaymentModal(true)}>
          Add Payment
        </Btn>
      </View>
    </SafeAreaView>
  );
};

export default CustomerDetails;

const styles = StyleSheet.create({
  headerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: Space.LG,
  },
  icon: {
    tintColor: Color.primary,
    height: 22,
    width: 22,
  },
  alignment: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  boxView: {
    backgroundColor: Color.lightGrey2,
    // height: 100,
    width: '47%',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: Color.primary,
    justifyContent: 'center',
    marginVertical: Space.SM,
    padding: 13,
  },
  boxContentAlignment: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // marginHorizontal: 10,
  },
  tabsView: {
    borderWidth: 1,
    borderColor: Color.primary,
    minHeight: 65,
    padding: 15,
    borderRadius: 6,
    marginVertical: Space.SM,
    backgroundColor: Color.lightGrey2,
  },
  invoiceBtn: {
    height: 41,
    width: 120,
    backgroundColor: 'red',
  },
  statusView: {
    marginTop: 10,
    backgroundColor: Color.White,
    padding: 15,
    borderWidth: 1,
    borderColor: Color.primary,
    borderRadius: 6,
  },
  round: {
    borderWidth: 1,
    borderColor: Color.primary,
    width: 36,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 18,
  },
  line: {
    borderRightWidth: 1,
    borderRightColor: Color.primary,
    height: 30,
    width: '7.5%',
    marginTop: 10,
  },
  btn: {
    marginHorizontal: 0,
    width: '33.33%',
    borderRadius: 0,
  },
});
