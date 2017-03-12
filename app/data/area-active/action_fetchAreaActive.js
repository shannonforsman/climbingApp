import axios from 'axios';

export const ACTIVE_AREA = 'ACTIVE_AREA';

const ROOT_URL = 'https://limitless-citadel-5215.herokuapp.com/climbing-markers';

export function fetchActiveArea(id) {
  return {
    type: ACTIVE_AREA,
    payload: id
  };
}
