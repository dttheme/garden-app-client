import * as actions from '../actions/index.actions';
import userReducer from './user.reducer';

describe('user reducers', () => {

  it('creates an account with a unique id', () => {
    const fakeUser = {
      id: '123',
    }
    const initialState = {
      id: null,
      message: null
    };
    const expectedState = {
      id: '123',
      message: {
          isError: false,
          message: "You have successfully created an account!",
      }
    };
    const reducedState = userReducer(initialState, {type: actions.FETCH_USER_SIGNUP_REQUEST_SUCCESS, response: fakeUser})
    expect(reducedState).toEqual(expectedState)
  })

  it('sets isLoggedIn to true', () => {
    const fakeUser = {
      id: '123',
      username: 'j@e.com',
      firstName: 'Joe',
      isLoggedIn: true,
    }
    const initialState = {
      id: null,
      username: null,
      firstName: null,
      isLoggedIn: false,
    };
    const expectedState = {
      id: '123',
      username: 'j@e.com',
      firstName: 'Joe',
      isLoggedIn: true,
    };
    const reducedState = userReducer(initialState, {type: actions.FETCH_USER_LOGIN_REQUEST_SUCCESS, response: fakeUser})
    expect(reducedState).toEqual(expectedState)
  })

  it('fetches user information', () => {
    const fakeUser = {
      id: '123',
      username: 'j@e.com',
      firstName: 'Joe',
      isLoggedIn: true,
    }
    const initialState = {
      id: null,
      username: null,
      firstName: null,
    };
    const expectedState = {
      id: '123',
      username: 'j@e.com',
      firstName: 'Joe',
      isLoggedIn: true,
    };
    const reducedState = userReducer(initialState, {type: actions.FETCH_USER_INFO_REQUEST_SUCCESS, response: fakeUser})
    expect(reducedState).toEqual(expectedState)
  })

  it('logs user out', () => {
    const initialState = {
      id: '123',
      username: 'j@e.com',
      firstName: 'Joe',
      isLoggedIn: true,
      message: null
    };
    const expectedState = {
      isLoggedIn: false,
      id: null,
      username: null,
      firstName: null,
      message: {
        isError: false,
        message: "You have been logged out!",
      }
    };
    const reducedState = userReducer(initialState, {type: actions.LOGOUT_USER})
    expect(reducedState).toEqual(expectedState)
  })

})
