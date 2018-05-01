import * as actionTypes from '../actions/index.actions';

const initialState = {
  plants: [],
  currentPlant: null
}


export default function garden(state = initialState, action) {
  switch (action.type) {
    case actionTypes.FETCH_GARDEN_REQUEST_SUCCESS: {
      return {
        ...state,
        plants: action.response
      };
    }
    case actionTypes.DELETE_PLANT_REQUEST_SUCCESS: {
      const plants = state.plants.slice();
      const index = plants.findIndex(x => x._id === action.response._id);
      plants.splice(index, 1)
      return {
        ...state,
        plants: plants
      };
    }
    case actionTypes.FETCH_PLANT_REQUEST_SUCCESS: {
      return {
        ...state,
        currentPlant: action.response
      };
    }
    default: {
      return state;
    }
  }
}
