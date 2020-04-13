import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import { apiBaseurl } from '../../utils/main';

import { USER_SET_CURRENT, USER_LOGOUT } from '../../constant/actionTypes';
import userMockData from '../../fixtures/userMockData';
import doLoginUser from '../../actions/login';
import doLogOutUser from '../../actions/logOut';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const mock = new MockAdapter(apiBaseurl);

describe('Login Action', () => {
  it('creates USER_SET_CURRENT when login action is successful', async (done) => {
    const { loginResponse, loginData, userLogin } = userMockData;
    const loginUrl = '/signin';
    const store = mockStore({});

    mock
      .onPost(loginUrl)
      .reply(
        200,
        {
          ...loginResponse
        }
      );

    const expectedAction = [{
      type: USER_SET_CURRENT,
      user: userLogin
    }];

    await store.dispatch(doLoginUser(loginData));
    expect(store.getActions()).toEqual(expectedAction);

    done();
  });

  it('creates USER_LOGOUT when logout action is successful', (done) => {
    const store = mockStore({});
    const expectedAction = [{
      type: USER_LOGOUT
    }];

    store.dispatch(doLogOutUser());
    expect(store.getActions()).toEqual(expectedAction);
    done();
  });
});
