import * as actions from '../actions/index.actions';


const initialState = {
  isCreatingUser: false,
  isFetchingUserInfo: false,
  isLoggingOut: false,
  isFetchingGarden: false,
  isFetchingPlant: false,
  isCreatingPlant: false,
  isDeletingPlant: false,
  message: null
}

// TODO: What should I be testing from my appState reducer?


describe('appState actions', () => {
  describe('', () => {
    it('', () => {
      const expectedAction = {
            type: ''
        }
    expect( actions.showAllEntries() ).toEqual( expectedAction );
    })
    })
  })
