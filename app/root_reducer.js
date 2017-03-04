import { combineReducers } from 'redux';
import AreasReducer from './data/areas/reducer_areas';


const rootReducer = combineReducers({
  areas: AreasReducer
});

export default rootReducer;
