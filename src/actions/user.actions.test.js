import configureStore from 'redux-mock-store';
import apiMiddleware from '../redux/middleware/api-middleware';
import asyncMiddleware from 'redux-thunk';
import * as actions from './index.actions';

const middlewares = [
  asyncMiddleware,
  apiMiddleware
];
const mockStore = configureStore( middlewares );


describe('User actions', () => {

  describe('Fetch user info if a token is stored in session storage', () => {
    it('Should return a users info', () => {
      const store = mockStore({});
      const token = '12345';
      const response = {
      };
      sessionStorage.setItem('token', '12345');
      fetch.mockResponseOnce(JSON.stringify(response));
      return store.dispatch(actions.fetchUserInfo())
      .then(() => {
        const storedActions = store.getActions();
      })
      expect(storedActions[0]).toEqual({ type: actions.FETCH_USER_INFO_REQUEST_TRIGGERED });
      expect(storedActions[1]).toEqual({ type: actions.FETCH_USER_INFO_REQUEST_SUCCESS, response});
    })
  })

  describe('Login user', () => {
    it('Should login an existing user', () => {
      const store = mockStore({});
      const user = {
        userEmail: 'test@test.com',
        userPassword: 'test'
      };
      const token = 'token';
      const response = {

      };
      const callback = jest.fn();
      fetch.mockResponseOnce(JSON.stringify(response));

      return store.dispatch(actions.fetchUserLogin(user, callback))
      .then(() => {
        const storedActions = store.getActions();
      })
      expect(storedActions[0]).toEqual({ type: actions.FETCH_USER_LOGIN_REQUEST_TRIGGERED });

    })
  })

  describe('User sign up', () => {
    it('should sign up a user with new info', () => {
      const store = mockStore({});
      const newUser = {
        email: 'user@test.com',
        password: 'testtest'
      };
      const response = {
        message: 'Success',
      };

      fetch.mockResponseOnce(JSON.stringify(response))

      return store.dispatch(actions.createUser(newUser))
      .then(() => {
        const dispatchedActions = store.getActions()
         })
         expect(dispatchedActions[0]).toEqual({ type: actions.FETCH_USER_SIGNUP_REQUEST_TRIGGERED });
        expect(dispatchedActions[1]).toEqual({ type: actions.FETCH_USER_SIGNUP_REQUEST_SUCCESS, response});
    })
  })

})
