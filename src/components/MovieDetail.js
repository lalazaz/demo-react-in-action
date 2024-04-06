import React from 'react';
import {useLocation, useParams} from 'react-router-dom';
import myImage from '../1.png'
import '../css/movie-details.css'

const MovieDetails = ({}) => {
    // 这个useParams从url中找
    const {movieId} = useParams();
    const location = useLocation();
    // 直接从列表中拿数据
    const movie = location.state.movie;
//    const movie = movies.find(movie => movie.MovieID === parseInt(movieId));

    if (!movie) return <div>电影未找到</div>;

    return (
        <div className={"movie-details-container"}>
            <div className={"movie-details-header"}>
                <img src={myImage}
                     className={"movie-details-picture"} alt="Description of the image"/>
                <div className={"movie-details-detail"}>
                    <h1>{movie.Title}</h1>
                    <p><strong>类型:</strong> {movie.Genre}</p>
                    <p><strong>上映年份:</strong> {movie.ReleaseYear}</p>
                    <p><strong>导演:</strong> {movie.Director}</p>
                </div>
                <div className={"movie-details-rating"}>
                    <p><strong>评分:</strong>9.5</p>
                </div>
            </div>
            <div className={"movie-description"}>
                <p><strong>描述:</strong> {movie.Description}</p>
            </div>
        </div>
    );
};

export default MovieDetails;
