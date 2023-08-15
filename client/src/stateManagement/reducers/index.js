import {combineReducers} from 'redux'
import popularMovieThunkReducer from './popularMovieReducer'

export default combineReducers({
    popularMovieThunkState: popularMovieThunkReducer,
})