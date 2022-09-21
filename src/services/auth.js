import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {BASE_URL} from '../constants';
// Define a service using a base URL and expected endpoints
export const authApi = createApi({
  reducerPath: 'auth',
  baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
  endpoints: builder => ({
    signUp: builder.mutation({
      query: user => ({
        headers: {
          'Content-type': 'application/json',
        },
        url: 'authentication/signup',
        method: 'POST',
        body: user,
      }),
    }),

    login: builder.mutation({
      query: user => ({
        headers: {
          'Content-type': 'application/json',
        },
        url: 'authentication/login',
        method: 'POST',
        body: user,
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {useSignUpMutation, useLoginMutation} = authApi;
