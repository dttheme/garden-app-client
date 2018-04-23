import * as actionTypes from '../actions/index.actions';

const initialState = {
  garden: {},
}


export default function garden(state = initialState, action) {
  switch (action.type) {
    case actionTypes.FETCH_GARDEN_REQUEST_SUCCESS: {
      return {
        ...state,
        isFetchingGarden: initialState.isFetchingGarden
      };
    }
    default: {
      return state;
    }
  }
}
