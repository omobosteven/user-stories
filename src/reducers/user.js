import { USER_SET_CURRENT } from '../constant/actionTypes';

const initialState = {
  isLoggedIn: false,
  isAdmin: false,
  user: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_SET_CURRENT:
      return {
        ...state,
        isLoggedIn: true,
        isAdmin: action.user.role === 'Admin',
        user: { ...action.user },
      };
    default: return state;
  }
};
