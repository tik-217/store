'use client';

import { FormEvent } from 'react';
import { AlertCircle } from 'lucide-react';
import { LoginForm } from '@/shared/shadcn/components/login-form';
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from '@/shared/shadcn/components/ui/alert';
import { useLogin } from '../api';

export const AdminForm = () => {
  const { mutate: login, isError } = useLogin();

  function onSubmit(e: FormEvent<HTMLDivElement>) {
    e.preventDefault();

    const form = new FormData(e.target as HTMLFormElement);

    const username = form.get('username') as string;
    const password = form.get('password') as string;

    login({ username, password });
  }

  return (
    <div className={'max-w-[500px] w-full justify-center'}>
      <div className={'mb-[20px]'}>
        {isError && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Ошибка</AlertTitle>
            <AlertDescription>Неправильный лоигн или пароль</AlertDescription>
          </Alert>
        )}
      </div>
      <LoginForm
        onSubmit={(e) => onSubmit(e)}
        onError={(err) => console.log(err)}
      />
    </div>
  );
};
