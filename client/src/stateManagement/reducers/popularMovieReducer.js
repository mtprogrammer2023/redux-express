import {
  FETCH_POPULARMOVIE_FAIELD,
  FETCH_POPULARMOVIE_SUCC,
  FETCH_POPULARMOVIE_START,
} from "../actions/actionTypes";

const initialState = {
  items: [],
  isLoading: true,
  message: "",
};

function popularMovieThunkReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_POPULARMOVIE_START:
      return { items: [], message: "", isLoading: true };
    case FETCH_POPULARMOVIE_SUCC:
      return { items: action.payload, message: "", isLoading: false };
    case FETCH_POPULARMOVIE_FAIELD:
      return { items: [], message: action.payload, isLoading: false };
    default:
      return state;
  }
}

export default popularMovieThunkReducer;
