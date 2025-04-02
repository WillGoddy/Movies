import React from "react";

function MovieList({ movies }) {
  return (
    <div className="movie-card">
      {movies.map((movie, index) => (
        <div key={index}>
          <h2>{movie.title}</h2>
          <p>{movie.description}</p>
          <img src={movie.posterURL} alt={movie.title} />
          <p>Note: {movie.note}</p>
        </div>
      ))}
    </div>
  );
}

export default MovieList;
