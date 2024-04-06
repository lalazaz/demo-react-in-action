import React, {useEffect, useMemo, useState} from 'react';
import {useLocation, useParams} from 'react-router-dom';
import myImage from '../1.png'
import '../css/movie-details.css'

const MovieDetails = () => {
    const {movieId} = useParams();
    const location = useLocation();
    const movie = location.state.movie;

    // 模拟计算评分
    const [rating, setRating] = useState(null);
    useEffect(() => {
        const calculateRating = () => {
            return (Math.random() * 9 + 1).toFixed(1);
        };
        // 启动一个计时器
        const timeoutId = setTimeout(() => {
            const result = calculateRating();
            setRating(result);
        }, Math.random() * 1000 + 1000);
        return () => clearTimeout(timeoutId);
    }, [movie]);
    // 产生随机评论
    const [comment, setComment] = useState(null)
    useEffect(() => {
        let uuid = Math.random() * 10000;
        setComment(uuid);
    }, [movie.Description]);

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
                {rating != null ?
                    (<div className={"movie-details-rating"}>
                        <p><strong>评分:</strong>{rating}</p>
                    </div>)
                    :
                    (<p className={"movie-details-rating"}><strong>评分计算中...</strong></p>)
                }
            </div>
            <div className={"movie-description"}>
                <p><strong>描述:</strong> {movie.Description} - {comment} </p>
            </div>
        </div>
    );
};

export default MovieDetails;
