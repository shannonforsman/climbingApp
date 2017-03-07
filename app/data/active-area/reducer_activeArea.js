export default function(state = null, action) {
  switch(action.type) {
    case 'AREA_SELECTED':
      return action.payload
  }
  return state;
}
