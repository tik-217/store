import { Store } from 'lucide-react';

export const menuItems = [
  {
    title: 'Товары',
    url: '/admin/goods',
    icon: Store,
    isActive: true,
    items: [
      {
        title: 'Все товары',
        url: '/admin/goods',
      },
      {
        title: 'Создать',
        url: '/admin/create',
      },
      {
        title: 'Обновить',
        url: '/admin/update',
      },
    ],
  },
];
