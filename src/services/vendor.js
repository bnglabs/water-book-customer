import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {BASE_URL} from '../constants';
// Define a service using a base URL and expected endpoints
export const vendorApi = createApi({
  reducerPath: 'vendor',
  baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
  endpoints: builder => ({
    getVendorByNumber: builder.query({
      query: ({number}) => ({
        headers: {
          'Content-type': 'application/json',
        },
        url: `vendor/getVendorByNumber/${number}`,
        method: 'GET',
        cache : 'force-cache' 
      }),
    }),
      loginVendor: builder.mutation({
      query: body => ({
        headers: {
          'Content-type': 'application/json',
        },
        url: 'auth/login',
        method: 'POST',
        body,
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useLazyGetVendorByNumberQuery,
  useGetVendorByNumberQuery,
  useLoginVendorMutation,
} = vendorApi;
