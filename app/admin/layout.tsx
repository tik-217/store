import { ReactNode } from 'react';
import { AdminProvider } from '@/shared/providers/AdminProvider';

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <AdminProvider>{children}</AdminProvider>
    </>
  );
}
