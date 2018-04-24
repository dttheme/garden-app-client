import appConfig from '../config/appConfig.js';

//Fetch all plants
export const FETCH_GARDEN_REQUEST_TRIGGERED = 'FETCH_GARDEN_REQUEST_TRIGGERED';
export const FETCH_GARDEN_REQUEST_SUCCESS = 'FETCH_GARDEN_REQUEST_SUCCESS';
export const FETCH_GARDEN_REQUEST_FAILURE = 'FETCH_GARDEN_REQUEST_FAILURE';

export function fetchGarden() {
  const promise = fetch(`${appConfig.GARDEN_ENDPOINT}`, {
      headers: {
          'Content-Type': 'application/json',
          Authorization: sessionStorage.getItem(appConfig.TOKEN_CONTENT_KEY)
      }
  });
  return {
      onRequest: FETCH_GARDEN_REQUEST_TRIGGERED,
      onSuccess: FETCH_GARDEN_REQUEST_SUCCESS,
      onFailure: FETCH_GARDEN_REQUEST_FAILURE,
      promise,
  };
}

//Fetch plant
export const FETCH_PLANT_REQUEST_TRIGGERED ='FETCH_PLANT_REQUEST_TRIGGERED';
export const FETCH_PLANT_REQUEST_SUCCESS = 'FETCH_PLANT_REQUEST_SUCCESS';
export const FETCH_PLANT_REQUEST_FAILURE = 'FETCH_PLANT_REQUEST_FAILURE';



//Create plant
export const CREATE_PLANT_REQUEST_TRIGGERED = 'CREATE_PLANT_REQUEST_TRIGGERED';
export const CREATE_PLANT_REQUEST_SUCCESS = 'CREATE_PLANT_REQUEST_SUCCESS';
export const CREATE_PLANT_REQUEST_FAILURE = 'CREATE_PLANT_REQUEST_FAILURE';

export function createPlant() {
  const promise = fetch(`${appConfig.GARDEN_ENDPOINT}`, {
      headers: {
          'Content-Type': 'application/json',
          Authorization: sessionStorage.getItem(appConfig.TOKEN_CONTENT_KEY)
      },
      method: 'POST',
      body: JSON.stringify({
        //TODO add properties from plant form
      }),
  });
  return {
      onRequest: CREATE_PLANT_REQUEST_TRIGGERED,
      onSuccess: CREATE_PLANT_REQUEST_SUCCESS,
      onFailure: CREATE_PLANT_REQUEST_FAILURE,
      promise,
  };
}

//Delete plants
export const DELETE_PLANT_REQUEST_TRIGGERED = 'DELETE_PLANT_REQUEST_TRIGGERED';
export const DELETE_PLANT_REQUEST_SUCCESS = 'DELETE_PLANT_REQUEST_SUCCESST';
export const DELETE_PLANT_REQUEST_FAILURE = 'DELETE_PLANT_REQUEST_FAILURE';
//
// export function createPlant() {
//   const promise = fetch(`${appConfig.GARDEN_ENDPOINT}`, {
//       headers: {
//           'Content-Type': 'application/json',
//           Authorization: sessionStorage.getItem(appConfig.TOKEN_CONTENT_KEY)
//       },
//       method: 'POST',
//       body: JSON.stringify({
//         //TODO add properties from plant form
//       }),
//   });
//   return {
//       onRequest: CREATE_PLANT_REQUEST_TRIGGERED,
//       onSuccess: CREATE_PLANT_REQUEST_SUCCESS,
//       onFailure: CREATE_PLANT_REQUEST_FAILURE,
//       promise,
//   };
// }
