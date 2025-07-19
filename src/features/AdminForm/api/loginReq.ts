import axios from 'axios';
import { LoginResponse } from '@/features/AdminForm/model/type';
import { LoginArgs } from '../model';

export async function loginReq(loginData: LoginArgs) {
  return axios<{ success: boolean; data: LoginResponse }>({
    method: 'POST',
    url: '/api/login',
    headers: {
      'Content-Type': 'application/json',
    },
    data: { ...loginData, expiresInMins: 10 },
  }).then(({ data }) => data);
}
