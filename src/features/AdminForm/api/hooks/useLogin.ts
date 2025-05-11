'use client';

import { useMutation } from '@tanstack/react-query';
import { LoginArgs } from '../../model';
import { loginReq } from '../loginReq';
import { useRouter } from 'next/navigation';

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
        localStorage.setItem('access-token', data.accessToken);

        router.push('/admin');
      } catch (error) {
        console.log(error);
      }
    },
  });
}
