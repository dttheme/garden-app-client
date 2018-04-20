import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';
import appStateReducer from './appState.reducer';
import userReducer from './user.reducer';


const rootReducer = combineReducers({
  state: appStateReducer,
  routing: routerReducer,
  form: reduxFormReducer,
  user: userReducer
});

export default rootReducer;
