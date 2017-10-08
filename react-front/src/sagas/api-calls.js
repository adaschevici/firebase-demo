import axios from 'axios';

export function fetchUserId() {
  console.log('Dispatching get_user_UUID');
  return axios.get('http://localhost:8080/join');
}

