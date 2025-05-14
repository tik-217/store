import axios from 'axios';

export const logoutReq = () => {
  return axios({
    method: 'POST',
    url: '/api/logout',
  });
};
