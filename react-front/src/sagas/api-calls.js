import axios from 'axios';

export function fetchUserId() {
  console.log('Dispatching get_user_UUID');
  return axios.get('http://localhost:8080/join');
}

export function postUserClap(userId) {
  console.log('Dispatching user_clap');
  const payload = {
    userId,
  };
  return axios.post('http://localhost:8080/clap', payload);
}
