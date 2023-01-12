///create a new component to display the recommended movies

// Path: react-movie-app\src\components\RecommendedMovieDisplay.js
// import { useState, useEffect } from "react";
// import MovieDisplay from "./MovieDisplay";
//

import Movie from "./Movie";
const RecommendedMoviesDisplay = ({recommendedMovies}) => {
    console.log("data =", recommendedMovies)
    //function to return loaded JSX
    const loaded = () => {
      return (
        <>
        <h1>Recommended Movies</h1>
        <div className="recommendedMoviesContainer">
              { recommendedMovies.Search.map((element, index) => { 
                  return (
                    <Movie element={element} key={index} />)
                }
              )
            }
        </div>
        </>
      );
    };
  
    //function to return loading JSX
    const loading = () => {
      return <h1>No Movie to Display</h1>;
    };
  
    //Ternary operator will determine which functions JSX we will return
    return recommendedMovies ? loaded() : loading();
    
  };
  
  export default RecommendedMoviesDisplay;