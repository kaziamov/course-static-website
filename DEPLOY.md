# 🚀 Быстрый старт для деплоя

## Шаг 1: Подготовка GitHub репозитория

1. Создайте новый репозиторий на GitHub
2. Клонируйте этот проект или создайте новый

## Шаг 2: Настройка Disqus (опционально)

1. Зарегистрируйтесь на [Disqus](https://disqus.com/)
2. Создайте новый сайт
3. Получите ваш shortname

## Шаг 3: Настройка GitHub Pages

1. В настройках репозитория перейдите в **Settings → Pages**
2. В разделе **Source** выберите **"GitHub Actions"**

## Шаг 4: Добавление секретов

1. Перейдите в **Settings → Secrets and variables → Actions**
2. Нажмите **"New repository secret"**
3. Добавьте следующие секреты:

### DISQUS_SHORTNAME
- Name: `DISQUS_SHORTNAME`
- Secret: `ваш-disqus-shortname` (или `demo` если пока нет)

### SITE_URL
- Name: `SITE_URL`
- Secret: `https://ваш-username.github.io/название-репозитория`

## Шаг 5: Деплой

```bash
# Инициализируйте git (если еще не сделано)
git init

# Добавьте все файлы
git add .

# Сделайте коммит
git commit -m "🎉 Initial deployment of course site"

# Добавьте удаленный репозиторий
git remote add origin https://github.com/ваш-username/название-репозитория.git

# Создайте основную ветку
git branch -M main

# Загрузите код
git push -u origin main
```

## Результат

После пуша:
1. GitHub Actions автоматически соберет сайт
2. Сайт будет доступен по адресу: `https://ваш-username.github.io/название-репозитория`
3. Процесс деплоя можно отследить в разделе **Actions**

## Добавление курсов

1. Создайте папку в `content/courses/название-курса/`
2. Добавьте файл `course.md` с описанием
3. Добавьте уроки: `lesson-1.md`, `lesson-2.md` и т.д.
4. Закоммитьте и запуште изменения
5. Сайт автоматически обновится!

## Поддержка

Если что-то не работает:
1. Проверьте раздел **Actions** в GitHub
2. Убедитесь, что секреты добавлены правильно
3. Проверьте, что GitHub Pages настроен на "GitHub Actions"

---

**Готово! Ваш сайт с курсами готов к использованию! 🎓**
