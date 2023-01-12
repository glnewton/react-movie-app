import { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import MovieDisplay from "./components/MovieDisplay";
import RecommendedMoviesDisplay from "./components/RecommendedMoviesDisplay";

export default function App() {
  const OMDB_API_KEY = process.env.REACT_APP_OMDB_API_KEY;

  const [movie, setMovie] = useState(null);
  const [recommendedMovies, setRecommendedMovies] = useState(null);

  const getMovie = async (searchTerm) => {
    try {
      // make fetch request and store response
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${OMDB_API_KEY}&t=${searchTerm}`
      );
      // Parse JSON response into a javascript object
      const data = await response.json();
      //set the Movie state to the movie
      setMovie(data);
    } 
    catch (error) {
      console.error(error);
    }
  };
  const getRecommendedMovies = async (searchTerm) => {
    try {
      // make fetch request and store response
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${searchTerm}`
      );
      // Parse JSON response into a javascript object
      const data2 = await response.json();
      console.log(data2)
      //set the Movie state to the movie
      setRecommendedMovies(data2);
    } 
    catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getMovie("Clueless");
  }, []);
  // console.log("data =", movie)
  // console.log("data2 =", recommendedMovies)
  return (
    <div className="App">
      <Form moviesearch={getMovie} recommendedMoviesSearch={getRecommendedMovies}/>
      <MovieDisplay movie={movie}/>
      <RecommendedMoviesDisplay recommendedMovies={recommendedMovies}/>
    </div>
  );
}
