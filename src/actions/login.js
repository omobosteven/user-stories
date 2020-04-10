import { apiBaseurl, saveTokenToBrowserCookies } from '../utils/main';

import { USER_SET_CURRENT } from '../constant/actionTypes';

export const setCurrentUser = (user) => ({
  type: USER_SET_CURRENT,
  user,
});

const doLoginUser = (payload) => async (dispatch) => {
  const { data } = await apiBaseurl.post('/signin', payload);

  saveTokenToBrowserCookies(data.token);
  delete data.token;
  dispatch(setCurrentUser(data));
};

export default doLoginUser;
