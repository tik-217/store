# 🛒 Store – React + TypeScript E-commerce App

## 📋 Описание

Приложение предназначено для демонстрации полноценного интерфейса интернет-магазина с корзиной, фильтрацией и динамической загрузкой товаров. Построено с учётом масштабируемости, повторного использования компонентов и строгой архитектурной структуры.

## 🔗 Демо

Посмотреть онлайн: https://store-delta-jet.vercel.app/

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

### 2. Установка зависимостей

```bash
npm install
```

### 3. Запуск проекта

```bash
npm run dev
```

Приложение будет доступно по адресу: http://localhost:3000

## 🧱 Архитектура и структура данных

Проект построен на основе подхода FSD (Feature-Sliced Design) — архитектурной методологии для frontend-проектов, ориентированной на масштабируемость, читаемость и отделение ответственности.
Для соблюдения принципов Feature-Sliced Design (FSD) используется инструмент Steiger, который автоматически проверяет структуру проекта и сообщает об отклонениях от стандарта.

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

Ключевые принципы:

- 🧩 **Разделение ответственности:** каждый слой решает свою задачу (UI, бизнес-логика, API и т.д.)
- 🚀 **Feature-first:** логика и UI сгруппированы вокруг фич, а не по типу файлов
- 🔒 **Public API:** каждый модуль экспортирует только то, что нужно, через `index.ts`

## 🌐 Работа с API

Проект использует:

- **Axios** — базовый HTTP-клиент (находится в `shared/api`)
- **React Query** — для работы с запросами, кэширования и оптимистичных обновлений
- **Zod** — типобезопасная валидация входящих данных

API делится по слоям — например:

- `features/cart/api/` — только запросы, связанные с корзиной
- `entities/product/api/` — доступ к товарам

## 🧪 Валидация данных

Для валидации клиентских и серверных данных используется Zod, что позволяет:

- Централизованно описывать модели (schemas/)
- Генерировать типы автоматически (z.infer)
- Проверять корректность данных до попадания в бизнес-логику

## 🧩 Использование shadcn/ui

В проекте активно применяется shadcn/ui — современная UI-библиотека на базе Radix UI и TailwindCSS. Она используется для создания:

- Форм (Form, Input, Select, Switch)
- Диалогов и попапов (Dialog, Tooltip, Popover)
- Кнопок и модальных окон
- Табов, алертов, скелетонов и других компонентов

Преимущества:

- Полная типизация
- Отличная доступность (accessibility)
- Гибкая кастомизация через Tailwind
- Быстрая разработка без жёсткой привязки к UI-фреймворку

📁 Все компоненты UI размещаются в shared/ui/ и переиспользуются по слоям.

## 🚀 Основные команды

```bash
npm run dev       # Запуск проекта в режиме разработки (с Turbopack)
npm run build     # Сборка проекта для продакшена
npm run start     # Запуск production-сервера
npm run lint      # Анализ кода через ESLint
npm run fsd       # Валидация FSD-структуры с помощью Steiger
```

## 🤝 Вклад

Хочешь помочь проекту? Отлично! Создавай issues и отправляй pull requests — любые улучшения приветствуются.

## 📄 Лицензия

Проект распространяется под лицензией MIT. Подробности в файле LICENSE.

Контакты:
Автор: tik-217
Email: tigran.gabulyan.2001@mail.ru
