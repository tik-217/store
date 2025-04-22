import { axiosInstance } from '@/shared/api';
import { LoginArgs } from '../model';
import { LoginResponse } from '@/features/AdminForm/model/type';

export async function loginReq(loginData: LoginArgs) {
  return axiosInstance<LoginResponse>({
    method: 'POST',
    url: '/auth/login',
    data: loginData,
  }).then(({ data }) => data);
}
