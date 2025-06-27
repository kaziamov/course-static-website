---
title: "Переменные и типы данных"
order: 2
---

# Переменные и типы данных

В JavaScript переменные используются для хранения данных. Давайте изучим, как с ними работать.

## Объявление переменных

В современном JavaScript есть три способа объявления переменных:

### let

```javascript
let name = "Иван";
let age = 25;
```

### const

```javascript
const PI = 3.14159;
const colors = ["красный", "зеленый", "синий"];
```

### var (устаревший способ)

```javascript
var oldVariable = "Не рекомендуется использовать";
```

## Типы данных

JavaScript имеет несколько основных типов данных:

### Примитивные типы

1. **Number** - числа
```javascript
let integer = 42;
let float = 3.14;
```

2. **String** - строки
```javascript
let message = "Привет, мир!";
let template = `Меня зовут ${name}`;
```

3. **Boolean** - логические значения
```javascript
let isActive = true;
let isCompleted = false;
```

4. **Undefined** - неопределенное значение
```javascript
let undefinedVar;
console.log(undefinedVar); // undefined
```

5. **Null** - отсутствие значения
```javascript
let emptyValue = null;
```

### Сложные типы

1. **Object** - объекты
```javascript
let person = {
    name: "Анна",
    age: 30,
    city: "Москва"
};
```

2. **Array** - массивы
```javascript
let fruits = ["яблоко", "банан", "апельсин"];
```

## Проверка типов

Используйте оператор `typeof` для проверки типа переменной:

```javascript
console.log(typeof 42);        // "number"
console.log(typeof "Hello");   // "string"
console.log(typeof true);      // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null);      // "object" (это особенность JS)
console.log(typeof {});        // "object"
console.log(typeof []);        // "object"
```

## Видео о типах данных

Подробнее о типах данных в этом видео:

[youtube](dQw4w9WgXcQ)

## Практическое задание

Попробуйте создать переменные разных типов и вывести их в консоль:

```javascript
// Ваш код здесь
let myName = "Ваше имя";
let myAge = 0; // Ваш возраст
let isStudent = true; // true или false

console.log("Имя:", myName);
console.log("Возраст:", myAge);
console.log("Студент:", isStudent);
```

В следующем уроке мы изучим функции!
