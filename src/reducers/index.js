import { combineReducers } from 'redux';
import PostReducer from './reducer_post';
import FavoriteReducer from './reducer_favorite';

const rootReducer = combineReducers({
  post: PostReducer,
  favorite: FavoriteReducer
});

export default rootReducer;