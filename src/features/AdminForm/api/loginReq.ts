import { axiosInstance } from '@/shared/api/axios';
import { LoginArgs } from '../model';

export async function loginReq(loginData: LoginArgs) {
  return axiosInstance({
    method: 'POST',
    url: '/auth/login',
    data: loginData,
  }).then(({ data }) => data);
}
