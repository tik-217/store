# 🛒 Store – React + TypeScript E-commerce App

## 📋 Описание

Этот проект представляет собой frontend-приложение интернет-магазина, созданное на основе **React** и **Next.js** с использованием **TypeScript**. Он построен с применением современных инструментов фронтенда, таких как **Redux Toolkit**, **React Query**, **TailwindCSS**, и других. Цель – предоставить масштабируемую архитектуру для высокопроизводительного приложения.

## 🛠 Стек технологий

**Основной стек:**

- ⚛️ **React** (v19)
- 🌐 **Next.js** (v15)
- 💬 **TypeScript**
- 📦 **Redux Toolkit** (v2.6.1)
- 🔍 **@tanstack/react-query** (v5.72.2)
- 🎨 **TailwindCSS**
- ✅ **Zod** — валидация схем
- 📡 **Axios** — HTTP-запросы
- 🆔 **UUID**
- 🧩 **Radix UI** — доступные UI-компоненты

**Инструменты разработки:**

- 📏 **ESLint**
- 🧼 **Prettier**
- ⚙️ **PostCSS**

## ⚙ Установка и запуск проекта

### 1. Клонирование репозитория

```bash
git clone https://github.com/tik-217/store.git
cd store
```

2. Установка зависимостей
bash
Копировать
Редактировать
npm install

4. Запуск проекта

```bash
npm run dev
```
Приложение будет доступно по адресу: http://localhost:3000

🧱 Архитектура и структура данных
Проект построен на основе подхода FSD (Feature-Sliced Design) — архитектурной методологии для frontend-проектов, ориентированной на масштабируемость, читаемость и отделение ответственности.

📦 Основные слои
```bash
src/
├── app/           # Инициализация приложения (providers, настройки, глобальные стили)
├── shared/        # Переиспользуемые сущности и утилиты (UI, libs, config, helpers)
├── entities/      # Базовые бизнес-сущности (User, Product и т.п.)
├── features/      # Завершённые пользовательские фичи (Cart, Auth, Filters и т.п.)
├── widgets/       # Составные виджеты/секции из нескольких фич и сущностей
├── pages/         # Страницы Next.js (только маршруты и layout)
```

📚 Принципы FSD
Слои ответственности: каждый слой отвечает за свою область (например, features/ содержит фичи, а entities/ — сущности, доступные для других модулей).

Feature-first: фокус на разделении по бизнес-логике, а не по типу файлов (в отличие от "components/pages/utils").

Public API: каждый модуль экспортирует только необходимое (например, через index.ts), что уменьшает связанность и упрощает рефакторинг.

🌐 Работа с API
API-слой реализован с помощью:

Axios — клиент для REST-запросов

React Query — для кэширования и управления запросами

Zod — для валидации входящих и исходящих данных

API-интерфейсы хранятся в:

```bash
shared/api/            # Базовая настройка axios
shared/api/clients/    # Конкретные endpoints
entities/*/api/        # API сущностей (например, products/api/)
features/*/api/        # API фич (например, cart/api/)
```

Пример структуры features/cart/api:
```ts
// features/cart/api/addItem.ts
import { apiInstance } from '@/shared/api';
import { CartItem } from '../model/types';

export const addItemToCart = (item: CartItem) => {
  return apiInstance.post('/cart', item);
};
```

🧪 Валидация данных
Для валидации клиентских и серверных данных используется Zod, что позволяет:

Централизованно описывать модели (schemas/)

Генерировать типы автоматически (z.infer)

Проверять корректность данных до попадания в бизнес-логику

🚀 Основные команды
```bash
npm run dev       # Режим разработки
npm run build     # Production-сборка
npm run start     # Запуск production-сервера
npm run lint      # Анализ кода через ESLint
npm run format    # Форматирование кода Prettier
```

🤝 Вклад
Хочешь помочь проекту? Отлично! Создавай issues и отправляй pull requests — любые улучшения приветствуются.

📄 Лицензия
Проект распространяется под лицензией MIT. Подробности в файле LICENSE.

Контакты:
Автор: tik-217
Email: tigran.gabulyan.2001@mail.ru
