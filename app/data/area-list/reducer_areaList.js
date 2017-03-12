import { FETCH_AREAS } from './action_fetchAreaList';

const INITIAL_STATE = { all: [] };

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_AREAS:
      return { ...state, all: action.payload.data };
    default:
      return state;
  }
}
