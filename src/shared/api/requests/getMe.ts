import { axiosInstance } from '@/shared/api';
import { UserResponse } from '@/shared/api/model';
import { AxiosError } from 'axios';

export async function getMe(accessToken: string) {
  return axiosInstance<UserResponse>({
    method: 'GET',
    url: '/auth/me',
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    withCredentials: true,
  }).then(({ data }) => data);
}
