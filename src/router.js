import { createBrowserRouter } from 'react-router-dom';
import MainPage from './routes/MainPage';
import MoviePage from './routes/MoviePage';
import GenrePage from './routes/GenrePage';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainPage />,
        children: [
            {
                path: '/genre/:genreId',
                element: <GenrePage />,
            },
        ],
    },
    {
        path: '/movie/:movieId',
        element: <MoviePage />,
    },
]);
