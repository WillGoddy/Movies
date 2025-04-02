import React from "react";

function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <img src={movie.posterURL} alt={movie.title} width="150" />
      <h3>{movie.title}</h3>
      <p>{movie.description}</p>
      <p>Note : {movie.note} ⭐</p>
    </div>
  );
}

export default MovieCard;
