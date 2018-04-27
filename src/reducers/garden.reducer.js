import * as actionTypes from '../actions/index.actions';

const initialState = {
  plants: [],
}


export default function garden(state = initialState, action) {
  switch (action.type) {
    case actionTypes.FETCH_GARDEN_REQUEST_SUCCESS: {
      return {
        ...state,
        plants: action.response
      };
    }
    default: {
      return state;
    }
  }
}
