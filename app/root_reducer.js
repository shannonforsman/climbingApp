import { combineReducers } from 'redux';
import AreaListReducer from './data/area-list/reducer_areaList';
import ActiveArea from './data/area-active/reducer_areaActive';


const rootReducer = combineReducers({
  areaList: AreaListReducer,
  areaActive: ActiveArea
});

export default rootReducer;
