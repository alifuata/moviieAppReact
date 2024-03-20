import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { da } from '@faker-js/faker';

// Define a service using a base URL and expected endpoints
export const usersApi = createApi({
    reducerPath: 'usersApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3001/',
    }),
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: () => 'users',
        }),
        addUser: builder.mutation({
            query: (body) => ({
                url: 'users',
                method: 'POST',
                body,
            }),
        }),
        // TODO Mutation
    }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetUsersQuery, useLazyGetUsersQuery, useAddUserMutation } =
    usersApi;
