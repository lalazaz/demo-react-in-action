import movieData from "../data/movieData.json"

const MovieList = () => {
    return (
        <div className={"movieList"}>
            <table>
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Movie Name</th>
                    <th>Description</th>
                    <th>Director</th>
                </tr>
                </thead>
                <tbody>
                {movieData.map((movie, index) => (
                    <tr key={index}>
                        <td>{movie.movieTitle}</td>
                        <td>{movie.movieName}</td>
                        <td>{movie.movieDescription}</td>
                        <td>{movie.directorName}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default MovieList;