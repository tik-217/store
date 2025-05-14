'use client';

import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  useSidebar,
} from '@/shared/shadcn';
import { NavMainProps } from '../model';
import { useLogout } from '@/features/Logout';

export function NavMain({ items }: NavMainProps) {
  const { setOpenMobile } = useSidebar();

  const { mutate: logoutReq } = useLogout();

  async function handleLogout() {
    logoutReq();
  }

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Магазин</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => (
          <Collapsible
            key={item.title}
            asChild
            defaultOpen={item.isActive}
            className="group/collapsible"
          >
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton tooltip={item.title}>
                  {item.icon && <item.icon />}
                  <span>{item.title}</span>
                  <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub>
                  {item.items?.map((subItem) => (
                    <SidebarMenuSubItem key={subItem.title}>
                      <SidebarMenuSubButton asChild>
                        <Link
                          href={subItem.url}
                          onClick={() => setOpenMobile(false)}
                        >
                          <span>{subItem.title}</span>
                        </Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
        ))}
        <SidebarMenuButton onClick={() => handleLogout()}>
          Выйти из аккаунта
        </SidebarMenuButton>
      </SidebarMenu>
    </SidebarGroup>
  );
}
