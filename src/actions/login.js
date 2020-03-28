import axios from 'axios';

import { CURRENT_USER_SET } from '../constant/actionTypes';

export const setCurrentUser = (user) => ({
  type: CURRENT_USER_SET,
  user,
});

const baseUrl = 'https://test-archimides.free.beeceptor.com';

const doLoginUser = (payload) => async (dispatch) => {
  const userUrl = payload.admin ? '/api/admin-login' : '/api/login';
  const { admin, ...userPayload } = payload;

  const { data } = await axios.post(`${baseUrl}${userUrl}`, userPayload);

  dispatch(setCurrentUser(data));
};

export default doLoginUser;
