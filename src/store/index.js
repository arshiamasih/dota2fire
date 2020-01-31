import { combineReducers } from 'redux';
import teamReducer from './reducer';

const reducers = combineReducers({
  teams: teamReducer,
});

export default reducers;