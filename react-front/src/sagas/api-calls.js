import axios from 'axios';

import env from '../.env';

export function fetchUserId() {
  console.log('Dispatching get_user_UUID');
  return axios.get(`${env.API_URL}/join`);
}

export function postUserClap(userId) {
  console.log('Dispatching user_clap');
  const payload = {
    userId,
  };
  return axios.post(`${env.API_URL}/clap`, payload);
}
