import React, { useState, useEffect } from 'react';
import axiosConfig from './axiosConfig';
import './Row.css';

const base_url = 'https://image.tmdb.org/t/p/original';

const Row = ({ title, requestUrl, isLargeRow }) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const getMovies = async () => {
            const response = await axiosConfig.get(requestUrl);
            setMovies(response.data.results);
            return response;
        }

        getMovies();
    }, [requestUrl]);

    return(
        <div className="row">
            <h2>{title}</h2>
            <div className="row__thumbnails">
                {movies.map((movie) => (
                    <img 
                        key={movie.id}
                        className={`row__thumbnail ${isLargeRow && 'row__thumbnail__large'}`}
                        src={isLargeRow ? base_url + movie.poster_path : base_url + movie.backdrop_path} 
                        alt={movie.name}
                    />
                ))}
            </div>
        </div>
    );
}

export default Row;