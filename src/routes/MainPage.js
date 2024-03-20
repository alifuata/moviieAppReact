import React, { useEffect } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { useGetGenresQuery } from '../redux/api/genresApi';
import GenreNav from '../components/GenreNav';

const MainPage = () => {
    const { data } = useGetGenresQuery();

    console.log('data', data);

    return (
        <div>
            Main Page
            <GenreNav genres={data?.genres} />
            {/*<nav>*/}
            {/*    <NavLink to={'/movie/id1'}>Movie 1</NavLink>*/}
            {/*    <NavLink to={'/movie/id2'}>Movie 2</NavLink>*/}
            {/*</nav>*/}
            <div className={'movie-list-by-genre'}>
                <Outlet />
            </div>
        </div>
    );
};

export default MainPage;
