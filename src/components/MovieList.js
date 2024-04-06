import {Link, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import fetchMovies from "../services/MovieInfoService";

function MovieList() {

    const navigate = useNavigate();
    const [movies, setMovies] = useState([]);
    const backToApp = () => {
        navigate('/')
    }

    useEffect(() => {
        const getMovies = async () => {
            try {
                const movieData = await fetchMovies()
                setMovies(movieData);
            } catch (error) {
                console.log("出错了，" + error);
            }
        };
        getMovies();
    }, []);
    return (
        <div>
            <h3>电影列表</h3>
            <button onClick={backToApp}>back to app</button>
            <br/>
            <ul>
                {movies.map(movie => (
                    <li key={movie.MovieID} className={"movie-list-item"}>
                        <Link to={`/page/${movie.MovieID}`} state={{movie}}>{movie.Title}</Link>
                    </li>
                    /*<div key={movie.MovieID} style={{marginBottom: '20px'}}>
                        <h2>{movie.Title}</h2>
                        <p><strong>Genre:</strong> {movie.Genre}</p>
                        <p><strong>Release Year:</strong> {movie.ReleaseYear}</p>
                        <p><strong>Director:</strong> {movie.Director}</p>
                        <p><strong>Description:</strong> {movie.Description}</p>
                    </div>*/
                ))}
            </ul>
        </div>
    )
}

export default MovieList;