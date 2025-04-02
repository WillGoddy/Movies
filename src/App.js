import React, { useState } from "react";
import MovieList from "./MovieList";
import Filter from "./Filter";
import moviesData from "./moviesData";
import "./App.css";

function App() {
  const [movies, setMovies] = useState(moviesData);
  const [searchTitle, setSearchTitle] = useState("");
  const [searchNote, setSearchNote] = useState(0);

  // Fonction pour ajouter un nouveau film
  const addMovie = () => {
    const newMovie = {
      title: "Avatar",
      description: "Un film sur Pandora.",
      posterURL: "https://image.url/avatar.jpg",
      note: 8,
    };
    setMovies([...movies, newMovie]); // Ajouter le film à la liste
  };

  // Filtrage des films
  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(searchTitle.toLowerCase()) &&
      movie.note >= searchNote
  );

  return (
    <div>
      <h1>🎬 Ma Collection de Films</h1>
      <button onClick={addMovie}>➕ Ajouter un film</button>
      <Filter setSearchTitle={setSearchTitle} setSearchNote={setSearchNote} />
      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default App;
