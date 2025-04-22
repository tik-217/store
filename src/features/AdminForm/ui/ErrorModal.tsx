import { AlertCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/shared/shadcn';

export const ErrorModal = () => {
  return (
    <div className={'mb-[20px]'}>
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Ошибка</AlertTitle>
        <AlertDescription>Неправильный логин или пароль</AlertDescription>
      </Alert>
    </div>
  );
};
