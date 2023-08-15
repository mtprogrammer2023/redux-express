import {
    FETCH_POPULARMOVIE_FAIELD,
    FETCH_POPULARMOVIE_START,
    FETCH_POPULARMOVIE_SUCC,
  } from "./actionTypes";

  export function getAllPopularMovie(dispatch) {
    const apiUrl = "http://localhost:9000/api";
  
    dispatch(fetchPopularMovieStart()); // 1 - call fetchPopularMovieStart function with dispatch
    fetch(apiUrl)
      .then((response) => response.json())
      .then((response) => {
        dispatch(fetchPopularMovieSucc(response));
      })
      .catch((error) => {
        dispatch(fetchPopularMovieFailed(error));
      });
  }
  
  export const fetchPopularMovieStart = () => ({
    type: FETCH_POPULARMOVIE_START,
  });
  
  export const fetchPopularMovieSucc = (data) => ({
    type: FETCH_POPULARMOVIE_SUCC,
    payload: data,
  });
  
  export const fetchPopularMovieFailed = (errorMessage) => ({
    type: FETCH_POPULARMOVIE_FAIELD,
    payload: errorMessage,
  });