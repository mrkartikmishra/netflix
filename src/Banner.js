import React, { useState, useEffect } from 'react';
import axiosConfig from './axiosConfig';
import requestUrls from './api-request-urls';
import './Banner.css';

const Banner = () => {
    const [movie, setMovie] = useState({});

    useEffect(() => {
        const getMovie = async () => {
            const response = await axiosConfig.get(requestUrls.fetchNetflixOriginals);
            const randomMovie = response.data.results[Math.floor(Math.random() * response.data.results.length - 1)];
            setMovie(randomMovie);

            return response;
        }

        getMovie();

    }, []);

    function truncateStr(str, n) {
        return str?.length > n ? str.substr(0, n-1) + '...' : str;
    }

    console.log("movie==>>", movie);

    console.log(`("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`);

    return(
        <header className="banner"
            style={{
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`
            }}
        >
            <div className="banner__container">
                <h1 className="banner__container__title">{movie?.title || movie?.name || movie?.original_name}</h1>
                <div className="banner__container__buttons">
                    <button className="banner__container__button">
                        Play
                    </button>
                    <button className="banner__container__button">
                        My List
                    </button>
                </div>
                <h1 className="banner__container__overview">{truncateStr(movie?.overview, 150)}</h1>
            </div>
            <div className="banner__fade" />
        </header>
    );
}

export default Banner;