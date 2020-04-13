import { toast } from 'react-toastify';
import { apiBaseurl, saveTokenToBrowserCookies } from '../utils/main';

import { USER_SET_CURRENT } from '../constant/actionTypes';

export const setCurrentUser = (user) => ({
  type: USER_SET_CURRENT,
  user,
});

const doLoginUser = (payload) => async (dispatch) => {
  try {
    const { data } = await apiBaseurl.post('/signin', payload);

    saveTokenToBrowserCookies(data.token);
    delete data.token;
    dispatch(setCurrentUser(data));
  } catch (error) {
    const errorData = {
      message: error.response ? error.response.data : error.message
    };
    toast.error(errorData.message, {
      toastId: 'login',
      position: toast.POSITION.TOP_CENTER
    });
  }
};

export default doLoginUser;
