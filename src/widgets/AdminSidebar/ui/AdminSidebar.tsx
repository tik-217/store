'use client';

import { ReactNode } from 'react';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarProvider,
  SidebarTrigger,
} from '@/shared/shadcn';
import { menuItems } from '../model';
import { NavMain } from './NavMain';

export const AdminSidebar = ({ children }: { children: ReactNode }) => {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader />
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent>
              <NavMain items={menuItems} />
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter />
      </Sidebar>
      <main className={'w-full'}>
        <div className={'py-[20px] pl-[10px]'}>
          <SidebarTrigger />
        </div>
        {children}
      </main>
    </SidebarProvider>
  );
};
