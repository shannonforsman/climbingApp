import axios from 'axios';

export const FETCH_AREAS = 'FETCH_AREAS';

const ROOT_URL = 'https://limitless-citadel-5215.herokuapp.com/climbing-markers';

export function fetchAreaList() {
  const request = axios.get(ROOT_URL);

  return {
    type: FETCH_AREAS,
    payload: request
  };
}
