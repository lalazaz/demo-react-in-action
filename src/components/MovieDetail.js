import React from 'react';
import {useLocation, useParams} from 'react-router-dom';

const MovieDetails = ({}) => {
    // 这个useParams从url中找
    const {movieId} = useParams();
    const location = useLocation();
    // 直接从列表中拿数据
    const movie = location.state.movie;
//    const movie = movies.find(movie => movie.MovieID === parseInt(movieId));

    if (!movie) return <div>电影未找到</div>;

    return (
        <div>
            <h1>{movie.Title}</h1>
            <p><strong>类型:</strong> {movie.Genre}</p>
            <p><strong>上映年份:</strong> {movie.ReleaseYear}</p>
            <p><strong>导演:</strong> {movie.Director}</p>
            <p><strong>描述:</strong> {movie.Description}</p>
        </div>
    );
};

export default MovieDetails;
