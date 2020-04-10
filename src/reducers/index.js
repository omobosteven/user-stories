import { combineReducers } from 'redux';
import user from './user';
import story from './story';

export default combineReducers({
  userState: user,
  storyState: story,
});
