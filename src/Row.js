import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer'
import axiosConfig from './axiosConfig';
import './Row.css';

const base_url = 'https://image.tmdb.org/t/p/original';

const Row = ({ title, requestUrl, isLargeRow }) => {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState('');

    useEffect(() => {
        const getMovies = async () => {
            const response = await axiosConfig.get(requestUrl);
            setMovies(response.data.results);
            return response;
        }

        getMovies();
    }, [requestUrl]);

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          autoplay: 1,
        },
      };

      const onClickMoviehandler = (movie) => {
          if(trailerUrl) {
              setTrailerUrl('');
          } else {
              movieTrailer(movie?.name || movie?.title || movie?.original_title || "")
              .then(res => {
                const videoId = new URLSearchParams(new URL(res).search).get('v');
                setTrailerUrl(videoId)
              }).catch(err => {
                  console.log(err);
              })
          }
      } 

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
                        onClick={() => onClickMoviehandler(movie)}
                    />
                ))}
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
    );
}

export default Row;