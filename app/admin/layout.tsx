import { ReactNode } from 'react';
import { AdminProvider } from '@/shared/providers/AdminProvider';
import { AdminSidebar } from '@/widgets/AdminSidebar';

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
