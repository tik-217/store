import { useMutation } from '@tanstack/react-query';
import { LoginArgs } from '../../model';
import { loginReq } from '../loginReq';

export function useLogin() {
  return useMutation({
    mutationKey: ['login'],
    mutationFn: async (loginData: LoginArgs) =>
      loginReq(loginData).catch((err) => {
        console.log(err);
        throw new Error(err);
      }),
  });
}
