import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {BASE_URL} from '../constants';
// Define a service using a base URL and expected endpoints
export const deliveryApi = createApi({
  reducerPath: 'delivery',
  baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
  endpoints: builder => ({
    addDelivery: builder.mutation({
      query: body => ({
        headers: {
          'Content-type': 'application/json',
        },
        url: 'delivery',
        method: 'POST',
        body,
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {useAddDeliveryMutation} = deliveryApi;
