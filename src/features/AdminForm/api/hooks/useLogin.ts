'use client';

import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { LoginArgs } from '../../model';
import { loginReq } from '../loginReq';

export function useLogin() {
  const router = useRouter();

  return useMutation({
    mutationKey: ['login'],
    mutationFn: async (loginData: LoginArgs) =>
      loginReq(loginData).catch((err) => {
        console.log(err);
        throw new Error(err);
      }),
    onSuccess: ({ data }) => {
      try {
        localStorage.setItem('dj-access', data.accessToken);

        router.push('/admin/goods');
      } catch (error) {
        console.log(error);
      }
    },
  });
}
