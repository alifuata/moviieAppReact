import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const genreApi = createApi({
    reducerPath: 'genreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.themoviedb.org/3/',
    }),
    endpoints: (builder) => ({
        getGenres: builder.query({
            query: () => ({
                url: 'genre/movie/list?language=en',
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${process.env.REACT_APP_MOVIEDB_API_TOKEN}`,
                },
            }),
        }),
        getGenresById: builder.query({
            query: (id) => ({
                url: `discover/movie?language=en-US&page=1&with_genres=${id}`,
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${process.env.REACT_APP_MOVIEDB_API_TOKEN}`,
                },
            }),
        }),
    }),
});
export const { useGetGenresQuery, useGetGenresByIdQuery } = genreApi;
