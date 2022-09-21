import {configureStore} from '@reduxjs/toolkit';
import authReducer from './auth';
import {authApi} from '../services/auth';
import {setupListeners} from '@reduxjs/toolkit/dist/query';
import {customerApi} from '../services/customer';
import {vendorApi} from '../services/vendor';
import { deliveryApi } from '../services/delivery';
export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [customerApi.reducerPath]: customerApi.reducer,
    [vendorApi.reducerPath]: vendorApi.reducer,
    [deliveryApi.reducerPath]: deliveryApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      vendorApi.middleware,
      customerApi.middleware,
      deliveryApi.middleware
    ),
});

setupListeners(store.dispatch);
