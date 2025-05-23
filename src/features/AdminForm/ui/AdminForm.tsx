'use client';

import { FormEvent } from 'react';
import { LoginForm } from '@/shared/shadcn';
import { useLogin } from '../api';
import { ErrorModal } from './ErrorModal';

export const AdminForm = () => {
  const { mutate: login, isError, isPending } = useLogin();

  function onSubmit(e: FormEvent<HTMLDivElement>) {
    e.preventDefault();

    const form = new FormData(e.target as HTMLFormElement);

    const username = form.get('username') as string;
    const password = form.get('password') as string;

    login({ username, password });
  }

  return (
    <div className={'max-w-[500px] w-full justify-center'}>
      {isError && <ErrorModal />}

      <LoginForm
        onSubmit={(e) => onSubmit(e)}
        onError={(err) => console.log(err)}
        isLoading={isPending}
      />
    </div>
  );
};
