import * as actions from '../actions/index.actions';
import appStateReducer from './appState.reducer';


// QUESTION: Should I be testing success/failure actions?


describe('appState reducers', () => {

    it('sets isFetchingUserInfo to true', () => {
      const initialState = {
        isFetchingUserInfo: false,
      };
      const expectedState = {
        isFetchingUserInfo: true,
      };
      const reducedState = appStateReducer(initialState, {type: actions.FETCH_USER_INFO_REQUEST_TRIGGERED})
      expect(reducedState).toEqual(expectedState)
    })

    it('sets isFetchingGarden to true', () => {
      const initialState = {
        isFetchingGarden: false,
      };
      const expectedState = {
        isFetchingGarden: true,
      };
      const reducedState = appStateReducer(initialState, {type: actions.FETCH_GARDEN_REQUEST_TRIGGERED})
      expect(reducedState).toEqual(expectedState)
    })

    it('sets isFetchingPlant to true', () => {
      const initialState = {
        isFetchingPlant: false,
      };
      const expectedState = {
        isFetchingPlant: true,
      };
      const reducedState = appStateReducer(initialState, {type: actions.FETCH_PLANT_REQUEST_TRIGGERED})
      expect(reducedState).toEqual(expectedState)
    })

    it('shows message when user logged out', () => {
      const initialState = {
        message: null
      };
      const expectedState = {
        message: {
          isError: false,
          message: "You have been logged out!"
        }
      };
      const reducedState = appStateReducer(initialState, {type: actions.LOGOUT_USER})
      expect(reducedState).toEqual(expectedState)
    })

    it('sets isCreatingPlant to true', () => {
      const initialState = {
        isCreatingPlant: false,
      };
      const expectedState = {
        isCreatingPlant: true,
      };
      const reducedState = appStateReducer(initialState, {type: actions.CREATE_PLANT_REQUEST_TRIGGERED})
      expect(reducedState).toEqual(expectedState)
    })

    it('sets isDeletingPlant to true', () => {
      const initialState = {
        isDeletingPlant: false,
      };
      const expectedState = {
        isDeletingPlant: true,
      };
      const reducedState = appStateReducer(initialState, {type: actions.DELETE_PLANT_REQUEST_TRIGGERED})
      expect(reducedState).toEqual(expectedState)
    })
  })
