'use client';

import { AdminForm } from '@/features/AdminForm';

export const AdminLogin = () => {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <AdminForm />
      </div>
    </div>
  );
};
