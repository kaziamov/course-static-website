# Статический сайт для курсов

Статический сайт на Next.js, который генерируется из Markdown файлов с поддержкой YouTube видео и Disqus комментариев.

## 🚀 Быстрый деплой

Для быстрого деплоя на GitHub Pages смотрите **[DEPLOY.md](DEPLOY.md)**

## 📚 Создание курсов

Инструкция по созданию курсов в **[COURSE_GUIDE.md](COURSE_GUIDE.md)**

## Возможности

- 📚 Автоматическая генерация курсов из Markdown файлов
- 🎥 Поддержка встроенных YouTube видео
- 💬 Интеграция с Disqus для комментариев
- 🚀 Статическая генерация для быстрой загрузки
- 📱 Адаптивный дизайн
- 🎨 Красивый интерфейс на Tailwind CSS

## Быстрый старт

1. **Установите зависимости:**
```bash
npm install
```

2. **Настройте Disqus:**
   - Создайте аккаунт на [Disqus](https://disqus.com/)
   - Получите ваш shortname
   - Обновите `.env.local`:
   ```
   NEXT_PUBLIC_DISQUS_SHORTNAME=ваш-disqus-shortname
   NEXT_PUBLIC_SITE_URL=https://ваш-домен.com
   ```

3. **Запустите локально:**
```bash
npm run dev
```

4. **Соберите для продакшена:**
```bash
npm run build
```

## Структура курсов

Курсы хранятся в папке `content/courses/`. Каждый курс должен иметь следующую структуру:

```
content/
  courses/
    название-курса/
      course.md      # Описание курса
      lesson-1.md    # Урок 1
      lesson-2.md    # Урок 2
      ...
```

### Пример course.md:

```markdown
---
title: "Название курса"
description: "Описание курса"
---

# Содержание курса

Подробное описание курса...
```

### Пример lesson-X.md:

```markdown
---
title: "Название урока"
order: 1
---

# Содержание урока

Текст урока с поддержкой **жирного текста**, *курсива*, `кода`.

## Встраивание YouTube видео

Используйте специальный синтаксис:

[youtube](VIDEO_ID)

Где VIDEO_ID - это ID видео из URL YouTube.
```

## Деплой на GitHub Pages

### Автоматический деплой с GitHub Actions

1. **Создайте репозиторий на GitHub**
2. **Настройте GitHub Pages:**
   - Перейдите в Settings → Pages
   - Source: "GitHub Actions"
3. **Добавьте секреты в GitHub:**
   - Settings → Secrets and variables → Actions
   - Добавьте:
     - `DISQUS_SHORTNAME` - ваш shortname от Disqus
     - `SITE_URL` - URL вашего сайта (например: https://username.github.io/repository-name)

4. **Загрузите код:**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/username/repository-name.git
git push -u origin main
```

Сайт автоматически развернется на GitHub Pages после пуша!

## Деплой на Netlify/Vercel

1. Подключите ваш GitHub репозиторий
2. Настройте команды сборки:
   - Build command: `npm run build`
   - Publish directory: `out`

## Настройка

### Изменение внешнего вида

Отредактируйте файлы в папке `src/components/` и `src/app/globals.css`.

### Добавление новых возможностей

- Компоненты находятся в `src/components/`
- Логика работы с Markdown в `src/lib/markdown.ts`
- Страницы в `src/app/`

## Поддержка

Если у вас есть вопросы или предложения, создайте issue в GitHub репозитории.

## Лицензия

MIT License
