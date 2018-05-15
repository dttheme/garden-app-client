import * as actions from '../actions/index.actions';
import gardenReducer from './garden.reducer';

describe('garden reducers', () => {

  it('creates an plant with a unique id', () => {
    const fakePlant = {
      id: '123',
      plantName: 'Lettuce'
    }
    const initialState = {
      currentPlant: null,
      message: null
    };
    const expectedState = {
      currentPlant: {
        id: '123',
        plantName: 'Lettuce'
      },
      message: {
          isError: false,
          message: "You have successfully created a new plant!",
      }
    };
    const reducedState = gardenReducer(initialState, {type: actions.FETCH_PLANT_REQUEST_SUCCESS, response: fakePlant})
    expect(reducedState).toEqual(expectedState)
  })

  it('fetches all plants', () => {
    const fakeGarden = [
      {
        id: '123',
        plantName: 'Lettuce'
      },
      {
        id: '456',
        plantName: 'Jalepeno'
      }
    ];
    const initialState = {
      plants: []
    };
    const expectedState = {
      plants: fakeGarden
    };
    const reducedState = gardenReducer(initialState, {type: actions.FETCH_GARDEN_REQUEST_SUCCESS, response: fakeGarden})
    expect(reducedState).toEqual(expectedState)
  })

  it('deletes specific plant', () => {
    const fakeGarden = [
      {
        _id: '123',
        plantName: 'Lettuce'
      },
      {
        _id: '456',
        plantName: 'Jalepeno'
      }
    ];
    const initialState = {
      plants: fakeGarden
    };
    const expectedState = {
      plants: [fakeGarden[1]]
    };
    const reducedState = gardenReducer(initialState, {type: actions.DELETE_PLANT_REQUEST_SUCCESS, response: fakeGarden[0]})
    expect(reducedState).toEqual(expectedState)
  })
})
