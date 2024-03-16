import movieData from "../data/movieData.json"

const MovieList = () => {
    /* return (
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
 
     )*/
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