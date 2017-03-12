const INITIAL_STATE = { activeArea: {} };

export default function(state = INITIAL_STATE, action) {
  console.log('state reducer', state)
  switch(action.type) {
    case 'AREA_SELECTED':
      return action.payload
  }
  return state;
}
