import React from 'react';
import { Button, CircularProgress } from '@nextui-org/react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardHeader, Image } from '@nextui-org/react';
import { IoHeart } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { addfav, favMovieState, removefav } from '../redux/features/movieSlice';
const GenreSorted = ({ movies }) => {
    const dispatch = useDispatch();
    const favMovieState_ = useSelector(favMovieState);

    console.log('moviesafa:', movies);
    if (!movies) return <CircularProgress />;

    return (
        <div className="grid grid-cols-6">
            {movies.map((movie) => (
                <Card className="py-4 max-w-[350px]">
                    <CardHeader className="pb-10 pt-2 px-4 flex-col items-start">
                        <h3 className="uppercase font-bold text-large">
                            {movie.title}
                        </h3>
                        <Image
                            alt="Card background"
                            className="object-cover rounded-xl"
                            src={`https://image.tmdb.org/t/p/w500//${movie.poster_path}`}
                            width={270}
                        />
                    </CardHeader>
                    <CardBody className="overflow-visible py-2">
                        <IoHeart
                            className={
                                favMovieState_.includes(movie.id)
                                    ? 'text-red-500'
                                    : ''
                            }
                            onClick={() => {
                                dispatch(
                                    favMovieState_.includes(movie.id)
                                        ? removefav(movie.id)
                                        : addfav(movie.id)
                                );
                            }}
                        />
                        <p className="font-bold text-small">
                            {movie.release_date}
                        </p>
                    </CardBody>
                </Card>
            ))}
        </div>
    );
};

export default GenreSorted;
