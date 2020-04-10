import { removeTokenFromBrowserCookies } from '../utils/main';
import { USER_LOGOUT } from '../constant/actionTypes';

export const logOutCurrentUser = () => ({
  type: USER_LOGOUT,
});

const doLogOutUser = () => (dispatch) => {
  removeTokenFromBrowserCookies();
  dispatch(logOutCurrentUser());
};

export default doLogOutUser;
