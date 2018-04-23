import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';
import appStateReducer from './appState.reducer';
import gardenReducer from './garden.reducer';
import userReducer from './user.reducer';


const rootReducer = combineReducers({
  appState: appStateReducer,
  garden: gardenReducer,
  user: userReducer,
  routing: routerReducer,
  form: reduxFormReducer,
});

export default rootReducer;
