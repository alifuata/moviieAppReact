import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { counterSlice } from './features/counterSlice';
import { usersApi } from './api/usersApi';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { genreApi } from './api/genresApi';
import { movieSlice } from './features/movieSlice';

const persistConfig = {
    key: 'root',
    storage,
    // whitelist: ['counter'],
};

const rootReducer = combineReducers({
    [counterSlice.reducerPath]: counterSlice.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [genreApi.reducerPath]: genreApi.reducer,
    [movieSlice.reducerPath]: movieSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(usersApi.middleware, genreApi.middleware),
});

export const persistor = persistStore(store);
