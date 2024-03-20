import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetGenresByIdQuery } from '../redux/api/genresApi';
import GenreSorted from '../components/GenreSorted';
const GenrePage = () => {
    const params = useParams();
    const movies = useGetGenresByIdQuery(params.genreId);
    return <GenreSorted movies={movies.data?.results}></GenreSorted>;
};

export default GenrePage;
