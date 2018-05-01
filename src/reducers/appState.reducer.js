import * as actionTypes from '../actions/index.actions';


const initialState = {
  isCreatingUser: false,
  isFetchingUserInfo: false,
  isFetchingGarden: false,
  isFetchingPlant: false,
  isCreatingPlant: false,
  isDeletingPlant: false
}


export default function appState(state = initialState, action) {
  switch (action.type) {
    //Fetch user info
    case actionTypes.FETCH_USER_INFO_REQUEST_TRIGGERED: {
      return {
        ...state,
        isFetchingUserInfo: true,
      };
    }
    case actionTypes.FETCH_USER_INFO_REQUEST_SUCCESS: 
    case actionTypes.FETCH_USER_INFO_REQUEST_FAILURE: {
      return {
        ...state,
        isFetchingUserInfo: initialState.isFetchingUserInfo
      };
    }

    //Fetch all the plants
    case actionTypes.FETCH_GARDEN_REQUEST_TRIGGERED: {
      return {
        ...state,
        isFetchingGarden: true
      };
    }
    case actionTypes.FETCH_GARDEN_REQUEST_SUCCESS:
    case actionTypes.FETCH_GARDEN_REQUEST_FAILURE: {
      return {
        ...state,
        isFetchingGarden: initialState.isFetchingGarden
      };
    }

    //Fetch single plant
    case actionTypes.FETCH_PLANT_REQUEST_TRIGGERED: {
      return {
        ...state,
        isFetchingPlant: true
      };
    }
    case actionTypes.FETCH_PLANT_REQUEST_SUCCESS:
    case actionTypes.FETCH_PLANT_REQUEST_FAILURE: {
      return {
        ...state,
        isFetchingPlant: initialState.isFetchingPlant
      };
    }

    //Create plant
    case actionTypes.CREATE_PLANT_REQUEST_TRIGGERED: {
      return {
        ...state,
        isCreatingPlant: true
      }
    }
    case actionTypes.CREATE_PLANT_REQUEST_SUCCESS: {
      //TODO: create message for successful plant creation
      return {
        ...state,
        isCreatingPlant: initialState.isCreatingPlant
      }
    }
    case actionTypes.CREATE_PLANT_REQUEST_FAILURE: {
      return {
        ...state,
        isCreatingPlant: initialState.isCreatingPlant
      };
    }

    //Delete plant
    case actionTypes.DELETE_PLANT_REQUEST_TRIGGERED: {
      return {
          ...state,
          isDeletingPlant: true
        }
    }
    case actionTypes.DELETE_PLANT_REQUEST_SUCCESS:
    case actionTypes.DELETE_PLANT_REQUEST_FAILURE: {
      return {
        ...state,
        isDeletingPlant: initialState.isDeletingPlant
      };
    }
    default: {
      return state;
    }
  }
}
