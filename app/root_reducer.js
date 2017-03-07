import { combineReducers } from 'redux';
import AreasReducer from './data/areas/reducer_areas';
import ActiveArea from './data/active-area/reducer_activeArea';


const rootReducer = combineReducers({
  areas: AreasReducer,
  activeArea: ActiveArea
});

export default rootReducer;
