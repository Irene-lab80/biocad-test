# 🧬 Инструмент для визуализации выравнивания аминокислотных последовательностей 🧪
[ТЗ](https://github.com/biocad/career/blob/master/tests/bio-structure.md)
## ✨ Особенности

- 🔍 Валидация ввода (только стандартные аминокислотные символы)
- 🎨 Цветовая схема аминокислот согласно биохимическим свойствам
- 🔦 Подсветка различий между последовательностями
- 🔎 Поддержка поиска по странице (Ctrl+F/Cmd+F)
- 📱 Адаптивный дизайн
- 📋 Копирование выделенных последовательностей

## 🚀 Быстрый старт

```bash
# 1. Клонировать репозиторий
git clone https://github.com/your-username/biocad-test.git
cd biocad-test

# 2. Установить зависимости
npm install

# 3. Запустить приложение
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000) в браузере.

## 🧪 Как пользоваться

1. Введите две аминокислотные последовательности в поля ввода
2. Нажмите кнопку "Align Sequences"
3. Наслаждайтесь результатом:
   - 🟢 Верхняя строка: все аминокислоты с цветовой маркировкой
   - 🔴 Нижняя строка: только различия с верхней строкой

## 🧬 Пример последовательности
```
VLSPADKTNVKAAWGKVGAHAGEYGAEALERMFLSFPTTKTYFPHFDLSHGSAQVKGHGKKVADALTNAVAHVDDMPNALSALSDLHAHKLRVDPVNFKLLSHCLLVTLAAHLPAEFTPAVHASLDKFLASVSTVLTSKYR
```

## 📝 Требования к вводу
- Только символы: `A, R, N, D, C, E, Q, G, H, I, L, K, M, F, P, S, T, W, Y, V, -`
- Последовательности должны быть одинаковой длины

## 🏗️ Структура проекта
```
src/
├── app/          # Инициализация приложения
├── pages/        # Страницы
│   └── alignment # Главная страница
├── features/     # Функциональность
│   └── sequence-alignment # Логика выравнивания
├── shared/       # Общие компоненты
│   ├── ui        # UI компоненты
│   └── config    # Конфигурации
```

## 🌍 Демо
Посмотрите работающее приложение:  
🔗 [Демо на GitHub Pages](https://your-username.github.io/biocad-sequence-aligner)
