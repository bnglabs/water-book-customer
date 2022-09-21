import {getValueFromStorage} from '../helpers/asyncStorage';

export const BASE_URL = 'https://water-book-a8c75.el.r.appspot.com/api/';

export const getVendorInfo = async () => {
  const userInfo = await getValueFromStorage('user');

  return JSON.parse(userInfo);
};
