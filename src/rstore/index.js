import { combineReducers } from 'redux';
import teamReducer from './reducer';

const reducers = combineReducers({
  teamsTest: teamReducer,
});

export default reducers;