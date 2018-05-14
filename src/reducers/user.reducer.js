import * as actionTypes from '../actions/index.actions';

const initialState = {
  isLoggedIn: false,
  id: null,
  username: null,
  firstName: null,
  message: null
}

// TODO: Combine FETCH_USER_LOGIN_REQUEST_SUCCESS and FETCH_USER_INFO_REQUEST_SUCCESS

export default function user(state=initialState, action) {
  //Sign up request
  switch (action.type) {
    case actionTypes.FETCH_USER_SIGNUP_REQUEST_SUCCESS: {
      return {
        ...state,
        id: action.response.id,
        message: {
            isError: false,
            message: "You have successfully created an account!",
        }
      };
    }
    case actionTypes.FETCH_USER_LOGIN_REQUEST_SUCCESS:
    case actionTypes.FETCH_USER_INFO_REQUEST_SUCCESS: {
      return {
        ...state,
        id: action.response.id,
        username: action.response.username,
        firstName: action.response.firstName,
        isLoggedIn: true,
      };
    }
    case actionTypes.LOGOUT_USER: {
      return {
        ...state,
        ...initialState,
        message: {
            isError: false,
            message: "You have been logged out!",
        }
      }
    }
    default: {
      return state;
    }
  }
}
