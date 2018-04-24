import * as actionTypes from '../actions/index.actions';


const initialState = {
  isCreatingUser: false,
  isFetchingUserInfo: false,
  hasUserInfo: false,
  isFetchingGarden: false,
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
    case actionTypes.FETCH_USER_INFO_REQUEST_SUCCESS: {
      return {
        ...state,
        hasUserInfo: true,
        isFetchingUserInfo: initialState.isFetchingUserInfo
      };
    }
    case actionTypes.FETCH_USER_INFO_REQUEST_FAILURE: {
      return {
        ...state,
        isFetchingUserInfo: initialState.isFetchingUserInfo
      };
    }

    //Fetch garden
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
