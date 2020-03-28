import { CURRENT_USER_SET } from '../constant/actionTypes';

const initialState = {
  isLoggedIn: false,
  isAdmin: false,
  user: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CURRENT_USER_SET:
      return {
        ...state,
        isLoggedIn: true,
        isAdmin: action.user.userRoles[0] === 'Admin',
        user: { ...action.user },
      };
    default: return state;
  }
};
