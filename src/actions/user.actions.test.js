import {
  fetchUserInfo,
  FETCH_USER_INFO_REQUEST_SUCCESS,
  fetchUserLogin,
  FETCH_USER_LOGIN_REQUEST_SUCCESS,
  userLogout,
  LOGOUT_USER,
  createUser,
  FETCH_USER_SIGNUP_REQUEST_SUCCESS
} from './index.actions';

describe('Fetch user info', () => {
  it('Should return a users info', () => {
    const userId = '1234';
    const action = fetchUserInfo(userId);
    expect(action.type).toEqual(FETCH_USER_INFO_REQUEST_SUCCESS);
  })
})

describe('Login user', () => {
  it('Should log user in', () => {
    const user = {
      userEmail: 'test@test.com',
      userPassword: 'test'
    };

  })
})
