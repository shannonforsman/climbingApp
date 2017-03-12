import { FETCH_AREAS } from './action_fetchAreaList';

const INITIAL_STATE = { areaList: [] };

export default function(state = INITIAL_STATE, action) {

  switch (action.type) {
    case FETCH_AREAS:
      return { ...state, areaList: action.payload.data };
    default:
      return state;
  }
}
