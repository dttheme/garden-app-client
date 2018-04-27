import appConfig from '../config/appConfig.js';
import { push } from 'react-router-redux';

//Fetch user info
export const FETCH_USER_INFO_REQUEST_TRIGGERED = 'FETCH_USER_INFO_REQUEST_TRIGGERED';
export const FETCH_USER_INFO_REQUEST_SUCCESS = 'FETCH_USER_INFO_REQUEST_SUCCESS';
export const FETCH_USER_INFO_REQUEST_FAILURE = 'FETCH_USER_INFO_REQUEST_FAILURE';


export function fetchUserInfo() {
  const promise = fetch(`${appConfig.USER_ENDPOINT}`, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: sessionStorage.getItem(appConfig.TOKEN_CONTENT_KEY)
        }
    });
  return {
    onRequest: FETCH_USER_INFO_REQUEST_TRIGGERED,
    onSuccess: FETCH_USER_INFO_REQUEST_SUCCESS,
    onFailure: FETCH_USER_INFO_REQUEST_FAILURE,
    promise,
  }
}

//Fetch user login
export const FETCH_USER_LOGIN_REQUEST_TRIGGERED = 'FETCH_USER_LOGIN_REQUEST_TRIGGERED';
export const FETCH_USER_LOGIN_REQUEST_SUCCESS = 'FETCH_USER_LOGIN_REQUEST_SUCCESS';
export const FETCH_USER_LOGIN_REQUEST_FAILURE = 'FETCH_USER_LOGIN_REQUEST_FAILURE'

const handleLoginResponse = (response, dispatch) => {
  sessionStorage.setItem(appConfig.TOKEN_CONTENT_KEY, response.token);
  dispatch({
    type: FETCH_USER_LOGIN_REQUEST_SUCCESS,
    response
  });
 dispatch(push('/dashboard'));
}

export function fetchUserLogin(username, password) {
  const promise = fetch(`${appConfig.USER_ENDPOINT}`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      password
    }),
  })
  return {
     onRequest: FETCH_USER_LOGIN_REQUEST_TRIGGERED,
     onSuccess: handleLoginResponse,
     onFailure: FETCH_USER_LOGIN_REQUEST_FAILURE,
     promise,
 };
}

//Create user
export const FETCH_USER_SIGNUP_REQUEST_TRIGGERED = 'FETCH_USER_SIGNUP_REQUEST_TRIGGERED';
export const FETCH_USER_SIGNUP_REQUEST_SUCCESS = 'FETCH_USER_SIGNUP_REQUEST_SUCCESS';
export const FETCH_USER_SIGNUP_REQUEST_FAILURE = 'FETCH_USER_SIGNUP_REQUEST_FAILURE';
export const CREATE_USER_REQUEST_SUCCESS = 'CREATE_USER_REQUEST_SUCCESS';

export function createUser(firstName, username, password) {
    const promise = fetch(`${appConfig.USER_CREATE}`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          firstName,
          username,
          password,
        }),
    });
    return {
        onRequest: FETCH_USER_SIGNUP_REQUEST_TRIGGERED,
        onSuccess: handleCreateUserResponse,
        onFailure: FETCH_USER_SIGNUP_REQUEST_FAILURE,
        promise,
    };
  }

  const handleCreateUserResponse = (response, dispatch) => {
    sessionStorage.setItem(appConfig.TOKEN_CONTENT_KEY, response.token);
    dispatch({
        type: CREATE_USER_REQUEST_SUCCESS,
        response,
    });
    dispatch(push('/dashboard'));
};
