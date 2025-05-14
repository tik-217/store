import { logoutReq } from '@/features/Logout/api/logoutReq';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

export const useLogout = () => {
  const router = useRouter();

  return useMutation({
    mutationKey: ['logout'],
    mutationFn: async () =>
      logoutReq().catch((err) => {
        console.log(err);
        throw new Error(err);
      }),
    onSuccess: () => {
      router.push('/');
      localStorage.removeItem('dj-access');
    },
  });
};
