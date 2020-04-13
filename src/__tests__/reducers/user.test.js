import userReducer from '../../reducers/user';
import { USER_SET_CURRENT, USER_LOGOUT } from '../../constant/actionTypes';
import userMockData from '../../fixtures/userMockData';
import rootReducer from '../../reducers';

describe('User Reducer', () => {
  it('should return the initial state', () => {
    expect(userReducer(undefined, {})).toEqual({
      isLoggedIn: false,
      isAdmin: false,
      user: {},
    });
  });

  it('should set the current user when passed USER_SET_CURRENT', () => {
    const state = {};
    const user = userMockData.userLogin;

    const action = {
      type: USER_SET_CURRENT,
      user
    };
    const newState = userReducer(state, action);

    expect(newState.isLoggedIn).toEqual(true);
    expect(newState.isAdmin).toEqual(false);
  });

  it('should set the current admin when passed USER_SET_CURRENT', () => {
    const state = {};
    const user = userMockData.adminLogin;

    const action = {
      type: USER_SET_CURRENT,
      user
    };
    const newState = userReducer(state, action);

    expect(newState.isLoggedIn).toEqual(true);
    expect(newState.isAdmin).toEqual(true);
  });

  it('should unset user when passed USER_LOGOUT', () => {
    const state = {
      isLoggedIn: true,
      isAdmin: true,
      user: {
        role: 'Admin'
      },
    };

    const action = {
      type: USER_LOGOUT,
    };
    const newState = rootReducer(state, action);

    expect(newState.userState.isLoggedIn).toEqual(false);
    expect(newState.userState.isAdmin).toEqual(false);
  });
});
