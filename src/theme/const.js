import {Dimensions} from 'react-native';

export const Color = {
  Background: '#fdfdfd',
  gold: '#AD8E5A',
  lightGold: '#D6CBBA',
  PlaceholderSecondary: '#ecebeb',
  Transparent: 'transparent',
  Black: '#282622',
  Tamarillo: '#921114',
  White: 'white',
  lightGrey: '#BFC7D3',
  secondary: '#8B8B8B',
  green: '#10B671',
  darkGrey: '#7C7D7E',
  borderColor: '#E5E9EB',
  screen_bg: '#F1F1F1',
  txtColor: '#514286',
  lightBlue: '#F5F9FC',
  primary: '#2A76E8',
  lightYellow: '#F7D785',
  skyBlueDark: '#BDD4F7',
  lightGrey2: '#F8F8F8',
};

export const iPhoneSize = {
  X: {
    height: 812, // screen height
    width: 375,
  },
  XsMax: {
    height: 896,
    width: 414,
  },
};

export const NAV_BAR_HEIGHT = 44;

export const Radius = {
  XL: 20,
  LG: 14,
  MD: 8,
  SM: 5,
};

export const Space = {
  XL: 30,
  LG: 20,
  MD: 15,
  SM: 10,
  XS: 5,
};

export const SCREEN = Dimensions.get('screen');

export const ImageSize = {
  Large: iPhoneSize.XsMax.width * 3,
  Medium: iPhoneSize.XsMax.width * 2,
};

export const TxtSize = {
  XXS: 8.5,
  XS: 10.5,
  SM: 13.5,
  MD: 15,
  LG: 18,
  XL: 24,
  XXL: 32,
};

export const Size = {
  SM: 26,
  MD: 36,
  LG: 45,
};

export const TxtWeight = {
  Bold: 'bold',
  Semi: '600',
  Light: '300',
  Medium: '500',
  Regular: '400',
};
