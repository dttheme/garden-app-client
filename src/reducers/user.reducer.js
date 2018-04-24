import * as actionTypes from '../actions/index.actions';

const initialState = {
  isLoggedIn: false,
  id: null,
  username: null,
  firstName: null,
}

export default function user(state=initialState, action) {
  //Sign up request
  switch (action.type) {
    case actionTypes.FETCH_USER_SIGNUP_REQUEST_SUCCESS: {
// TODO: return a success message when user is created
      return {
        ...state,
        id: action.response.id,
      };
    }
    //Fetch user info
    case actionTypes.FETCH_USER_INFO_REQUEST_SUCCESS: {
      return {
        ...state,
        id: action.response._id,
        username: action.response.username,
        firstName: action.response.firstName,
        isLoggedIn: true,
      };
    }
    default: {
      return state;
    }
  }
}
