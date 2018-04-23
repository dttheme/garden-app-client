import getEnv from './environments';

const MAIN_APP_AUTHORITY = getEnv().MAIN_APP_AUTHORITY;

export default {
  // ////////////////////////// API ENDPOINTS ///////////////////////////////

  /**
   * Path used to fetch basic informations about user and log user in
   */
  USER_ENDPOINT: `${MAIN_APP_AUTHORITY}/users/info`,

  /**
   * Path used to fetch garden
   */
  GARDEN_ENDPOINT: `${MAIN_APP_AUTHORITY}/garden`,

};
