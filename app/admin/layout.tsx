import { ReactNode } from 'react';
import { AdminSidebar } from '@/widgets/AdminSidebar';
import { AdminProvider } from '@/shared/providers/AdminProvider';

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <AdminProvider>
      <AdminSidebar>
        <div className={'flex w-full justify-center px-[20px]'}>
          <div className={'w-full max-w-[1000px]'}>{children}</div>
        </div>
      </AdminSidebar>
    </AdminProvider>
  );
}
