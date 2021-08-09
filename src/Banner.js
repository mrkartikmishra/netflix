import React, { useState, useEffect } from 'react';
import axiosConfig from './axiosConfig';
import requestUrls from './api-request-urls';

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

    console.log("movie==>>", movie);

    return(
        <header>

        </header>
    );
}

export default Banner;