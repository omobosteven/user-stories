import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import user from './user';
import story from './story';
import { USER_LOGOUT } from '../constant/actionTypes';

const appReducer = combineReducers({
  userState: user,
  storyState: story,
});

const rootReducer = (state, action) => {
  if (action.type === USER_LOGOUT) {
    storage.removeItem('persist:root');
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
