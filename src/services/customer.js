import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {BASE_URL} from '../constants';
// Define a service using a base URL and expected endpoints
export const customerApi = createApi({
  reducerPath: 'customer',
  baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
  endpoints: builder => ({
    addCustomer: builder.mutation({
      query: user => ({
        headers: {
          'Content-type': 'application/json',
        },
        url: 'user/register',
        method: 'POST',
        body: user,
      }),
    }),
    getCustomers: builder.query({
      query: ({resultsPerPage}) => ({
        headers: {
          'Content-type': 'application/json',
        },
        url: `customer?current_page=${1}&result_per_page=${resultsPerPage}`,
        method: 'GET',
      }),
    }),
    getCustomerById: builder.query({
      query: ({userId}) => ({
        headers: {
          'Content-type': 'application/json',
        },
        url: `customer/${userId}`,
        method: 'GET',
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useAddCustomerMutation,
  useGetCustomersQuery,
  useLazyGetCustomerByIdQuery,
  useLazyGetCustomersQuery,
} = customerApi;
