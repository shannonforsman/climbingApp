import { combineReducers } from 'redux';
import AreasListReducer from './data/areas/reducer_areaList';
import ActiveArea from './data/active-area/reducer_activeArea';


const rootReducer = combineReducers({
  areaList: AreasListReducer,
  areaActive: ActiveArea
});

export default rootReducer;
