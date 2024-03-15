import movieData from "../data/movieData.json"

const MovieList = () => {
    return (
        <div className={"movieList"}>
            <ul>
                {movieData.map((movie, index) => (
                    <div key={index}>
                        <h5>{movie.movieTitle}</h5>
                        <ul><strong>Movie Name:</strong> {movie.movieName}</ul>
                        <ul><strong>Description:</strong> {movie.movieDescription}</ul>
                        <ul><strong>Director:</strong> {movie.directorName}</ul>
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default MovieList;