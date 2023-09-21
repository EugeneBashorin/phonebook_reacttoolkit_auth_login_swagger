import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getTokenFromLocalStorage } from './utility';

export const usersApi = createApi({
    reducerPath: 'user',
    baseQuery: fetchBaseQuery({ 
    baseUrl: 'https://connections-api.herokuapp.com' }),
    tagTypes: ['User'],

    endpoints: (builder) => ({

      getUsers: builder.query({
        query: () => ({
          url: `/contacts`,
          method: 'GET',
          providesTags: ['User'],
          headers: {
            Authorization: `Bearer ${getTokenFromLocalStorage()}`,
        },
        }),
        providesTags: ['User'],
      }),

      addUsers: builder.mutation({
        query: (values) => ({
            url: `/contacts`,
            method: 'POST',

            headers: {
              Authorization: `Bearer ${getTokenFromLocalStorage()}`,
              },
            body: values,
        }),
        invalidatesTags: ['User'],
      }),

      deleteUser: builder.mutation({
        query: (id) => ({
            url: `/contacts/${id}`,
            method:'DELETE',

            headers: {
              Authorization: `Bearer ${getTokenFromLocalStorage()}`,
              },
        }),
        invalidatesTags: ['User'],
      }),

      editUser: builder.mutation({
        query: (value) => ({
            url: `/contacts/${value.id}`,
            method:'PATCH',

            headers: {
              Authorization: `Bearer ${getTokenFromLocalStorage()}`,
              },
            body: {name: value.name, number: value.number},
        }),
        invalidatesTags: ['User'],
      }),

    }),
  });

export const { 
    useGetUsersQuery, 
    useAddUsersMutation, 
    useDeleteUserMutation,
    useEditUserMutation, 
} = usersApi;