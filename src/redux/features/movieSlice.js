import { createSlice } from '@reduxjs/toolkit';

export const movieSlice = createSlice({
    name: 'movie',
    initialState: {
        movies: [],
    },
    reducers: {
        addfav: (state, action) => {
            state.movies.push(action.payload);
        },
        removefav: (state, action) => {
            let index = state.movies.indexOf(action.payload);
            state.movies.splice(index, 1);
        },
    },
    selectors: { favMovieState: (sliceState) => sliceState.movies },
});

export const { addfav, removefav } = movieSlice.actions;
export const { favMovieState } = movieSlice.selectors;
