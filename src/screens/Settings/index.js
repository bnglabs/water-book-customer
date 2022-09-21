import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import {Color, Space, TxtWeight} from '../../theme/const';
import {Txt, Header, ScheduleDay} from '../../common';
import {SvgXml} from 'react-native-svg';
import {
  userIcon,
  phoneIcon_svg,
  mail_icon,
  languages_icon,
  terms_icon,
  logout_icon,
  profile_pic,
} from '../../assets';
import ToggleSwitch from 'toggle-switch-react-native';

const Settings = () => {
  const [language, setLanguage] = useState(false);
  const data = [
    {
      title: 'Name',
      datail: 'Waqas Rizvi',
      icon: userIcon,
    },
    {
      title: 'Number',
      datail: '03214567898',
      icon: phoneIcon_svg,
    },
    {
      title: 'Email',
      datail: 'waqas@gmail.com',
      icon: mail_icon,
    },
    {
      title: 'Change Language',
      datail: 'switch',
      icon: languages_icon,
    },
    {
      title: 'Terms & Conditions',
      datail: '',
      icon: terms_icon,
    },
    {
      title: 'Subscription',
      datail: 'Basic',
      icon: terms_icon,
    },
  ];
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Color.White}}>
      <Header title={'Settings'} rightIcon={<TouchableOpacity />} />
      <ScrollView style={{flex: 1}}>
        <View style={{marginHorizontal: Space.XL, marginVertical: Space.MD}}>
          <Image source={profile_pic} style={styles.picture} />

          {data.map((e, i) => {
            return (
              <View style={[styles.profileDetailsView]}>
                <View style={styles.content}>
                  <Txt ml={8}>{e.title}</Txt>
                </View>
                {e.datail === 'switch' ? (
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Txt weight={TxtWeight.Medium} mr={7}>
                      Eng
                    </Txt>
                    <ToggleSwitch
                      isOn={language}
                      onColor={Color.skyBlueDark}
                      offColor={Color.primary}
                      size="small"
                      thumbOnStyle={{backgroundColor: '#2A76E8'}}
                      thumbOffStyle={{backgroundColor: Color.lightGrey2}}
                      // disabled
                      onToggle={() => setLanguage(!language)}
                    />
                    <Txt weight={TxtWeight.Medium} ml={7}>
                      اردو
                    </Txt>
                  </View>
                ) : (
                  <Txt weight={TxtWeight.Medium}>{e.datail}</Txt>
                )}
              </View>
            );
          })}
          <TouchableOpacity style={styles.content}>
            <SvgXml xml={logout_icon} />
            <Txt ml={8}>Logout</Txt>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: Space.XL,
    marginVertical: Space.MD,
  },
  picture: {
    width: 80,
    height: 80,
    borderRadius: 125,
  },
  profileDetailsView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: Color.borderColor,
    borderBottomWidth: 1,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
  },
});
