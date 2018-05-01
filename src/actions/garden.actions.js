import appConfig from '../config/appConfig.js';
import { push } from 'react-router-redux';

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
      onSuccess: handleFetchGardenResponse,
      onFailure: FETCH_GARDEN_REQUEST_FAILURE,
      promise,
  };
}

const handleFetchGardenResponse = (response, dispatch) => {
  dispatch({
      type: FETCH_GARDEN_REQUEST_SUCCESS,
      response,
  });
  dispatch(push(`/garden`));
}

//Fetch plant
export const FETCH_PLANT_REQUEST_TRIGGERED ='FETCH_PLANT_REQUEST_TRIGGERED';
export const FETCH_PLANT_REQUEST_SUCCESS = 'FETCH_PLANT_REQUEST_SUCCESS';
export const FETCH_PLANT_REQUEST_FAILURE = 'FETCH_PLANT_REQUEST_FAILURE';

export function fetchPlant(id) {
  console.log(id);
  const promise = fetch(`${appConfig.GARDEN_ENDPOINT}/${id}`, {
      headers: {
          'Content-Type': 'application/json',
          Authorization: sessionStorage.getItem(appConfig.TOKEN_CONTENT_KEY)
      }
  });
  return {
      onRequest: FETCH_PLANT_REQUEST_TRIGGERED,
      onSuccess: FETCH_PLANT_REQUEST_SUCCESS,
      onFailure: FETCH_PLANT_REQUEST_FAILURE,
      promise,
  };
}


//Create plant
export const CREATE_PLANT_REQUEST_TRIGGERED = 'CREATE_PLANT_REQUEST_TRIGGERED';
export const CREATE_PLANT_REQUEST_SUCCESS = 'CREATE_PLANT_REQUEST_SUCCESS';
export const CREATE_PLANT_REQUEST_FAILURE = 'CREATE_PLANT_REQUEST_FAILURE';

export function createPlant(plantName, plantDate, numberPlanted, plantLocation, waterFrequency) {
  const promise = fetch(`${appConfig.GARDEN_ENDPOINT}`, {
      headers: {
          'Content-Type': 'application/json',
          Authorization: sessionStorage.getItem(appConfig.TOKEN_CONTENT_KEY)
      },
      method: 'POST',
      body: JSON.stringify({
        plantName,
        plantDate,
        numberPlanted,
        plantLocation,
        waterFrequency
      }),
  });
  return {
      onRequest: CREATE_PLANT_REQUEST_TRIGGERED,
      onSuccess: handleCreatePlantResponse,
      onFailure: CREATE_PLANT_REQUEST_FAILURE,
      promise,
  };
}

const handleCreatePlantResponse = (response, dispatch) => {
  dispatch({
      type: CREATE_PLANT_REQUEST_SUCCESS,
      response,
  });
  dispatch(push(`/plant/${response._id}`));
}

//Delete plants
export const DELETE_PLANT_REQUEST_TRIGGERED = 'DELETE_PLANT_REQUEST_TRIGGERED';
export const DELETE_PLANT_REQUEST_SUCCESS = 'DELETE_PLANT_REQUEST_SUCCESST';
export const DELETE_PLANT_REQUEST_FAILURE = 'DELETE_PLANT_REQUEST_FAILURE';

export function deletePlant(id) {
  const promise = fetch(`${appConfig.GARDEN_ENDPOINT}/${id}`, {
      headers: {
          'Content-Type': 'application/json',
          Authorization: sessionStorage.getItem(appConfig.TOKEN_CONTENT_KEY)
      },
      method: 'DELETE',
  });
  return {
      onRequest: DELETE_PLANT_REQUEST_TRIGGERED,
      onSuccess: DELETE_PLANT_REQUEST_SUCCESS,
      onFailure: DELETE_PLANT_REQUEST_FAILURE,
      promise
  };
}
