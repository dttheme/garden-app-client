import configureStore from 'redux-mock-store';
import apiMiddleware from '../redux/middleware/api-middleware';
import asyncMiddleware from 'redux-thunk';
import * as actions from './index.actions';

const middlewares = [
  asyncMiddleware,
  apiMiddleware
];
const mockStore = configureStore( middlewares );

describe('Garden actions', () => {
  afterEach(() => {
    sessionStorage.clear();
      fetch.resetMocks();
  })

    describe('Fetch garden', () => {
      it('should return all of the plants for a logged in user', () => {
        const store = mockStore({});
        const token = '12345';
        const response = [
          {
            plantName: 'Lettuce',
            plantDate: '10/03/18',
            numberPlanted: 3,
            plantLocation: 'Front porch',
            waterFrequency: 'once a day'
          },
          {
            plantName: 'Peppers',
            plantDate: '10/17/18',
            numberPlanted: 2,
            plantLocation: 'Backyard',
            waterFrequency: 'once a week'
          }
        ];

        sessionStorage.setItem('token', '12345');
        fetch.mockResponseOnce(JSON.stringify(response));

        return store.dispatch(actions.fetchGarden())
        .then(() => {
          const storedActions = store.getActions();
          expect(storedActions[0]).toEqual({ type: actions.FETCH_GARDEN_REQUEST_TRIGGERED });
          expect(storedActions[1]).toEqual({ type: actions.FETCH_GARDEN_REQUEST_SUCCESS, response});
        })
       })
    })

    describe('Fetch plant', () => {
      it('should return the requested plant for a logged in user', () => {
        const store = mockStore({});
        const token = '12345';
        const response = {};
        sessionStorage.setItem('token', '12345');
        fetch.mockResponseOnce(JSON.stringify(response));

        return store.dispatch(actions.fetchPlant())
        .then(() => {
          const storedActions = store.getActions();
          expect(storedActions[0]).toEqual({ type: actions.FETCH_PLANT_REQUEST_TRIGGERED });
          expect(storedActions[1]).toEqual({ type: actions.FETCH_PLANT_REQUEST_SUCCESS, response});
        })
      })
    })

    describe('Create plant', () => {
      it('should create a new plant for a logged in user', () => {
        const store = mockStore({});
        const token = '12345';
        const response = {};
        sessionStorage.setItem('token', '12345');
        fetch.mockResponseOnce(JSON.stringify(response));

        return store.dispatch(actions.createPlant())
        .then(() => {
          const storedActions = store.getActions();
          expect(storedActions[0]).toEqual({ type: actions.CREATE_PLANT_REQUEST_TRIGGERED });
          expect(storedActions[1]).toEqual({ type: actions.CREATE_PLANT_REQUEST_SUCCESS, response});
        })
      })
    })

    describe('Delete plant', () => {
      it('should remove a plant', () => {
        it('should create a new plant for a logged in user', () => {
          const store = mockStore({});
          const token = '12345';
          const response = {};
          sessionStorage.setItem('token', '12345');
          fetch.mockResponseOnce(JSON.stringify(response));

          return store.dispatch(actions.createPlant())
          .then(() => {
            const storedActions = store.getActions();
            expect(storedActions[0]).toEqual({ type: actions.DELETE_PLANT_REQUEST_TRIGGERED });
            expect(storedActions[1]).toEqual({ type: actions.DELETE_PLANT_REQUEST_SUCCESS, response});
          })
      })
    })

})
})
