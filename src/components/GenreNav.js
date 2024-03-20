import React from 'react';
import { Button, CircularProgress } from '@nextui-org/react';
import { Link } from 'react-router-dom';

const GenreNav = ({ genres }) => {
    if (!genres) return <CircularProgress />;

    return (
        <nav className="flex justify-between">
            {genres.map((genre) => (
                <Button
                    as={Link}
                    to={`/genre/${genre.id}`}
                    key={genre.id}
                    color={'secondary'}
                >
                    {genre.name}
                </Button>
            ))}
        </nav>
    );
};

export default GenreNav;
