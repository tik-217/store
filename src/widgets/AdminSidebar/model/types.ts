import type { LucideIcon } from 'lucide-react';

export interface NavMainProps {
  items: {
    title: string;
    icon?: LucideIcon;
    isActive?: boolean;
    items?: {
      title: string;
      url: string;
    }[];
  }[];
}
