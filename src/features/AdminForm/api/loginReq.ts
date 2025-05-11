import { LoginArgs } from '../model';
import { LoginResponse } from '@/features/AdminForm/model/type';
import axios from 'axios';

export async function loginReq(loginData: LoginArgs) {
  return axios<{ success: boolean; data: LoginResponse }>({
    method: 'POST',
    url: '/api/login',
    headers: {
      'Content-Type': 'application/json',
    },
    data: loginData,
  }).then(({ data }) => data);
}
