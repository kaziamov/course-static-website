---
title: "Функции в JavaScript"
order: 3
---

# Функции в JavaScript

Функции - это одна из основных концепций в JavaScript. Они позволяют группировать код и переиспользовать его.

## Объявление функций

### Function Declaration

```javascript
function sayHello(name) {
    return `Привет, ${name}!`;
}

console.log(sayHello("Мир")); // Привет, Мир!
```

### Function Expression

```javascript
const sayHello = function(name) {
    return `Привет, ${name}!`;
};
```

### Arrow Functions (ES6+)

```javascript
const sayHello = (name) => {
    return `Привет, ${name}!`;
};

// Короткая запись для простых функций
const sayHello = name => `Привет, ${name}!`;
```

## Параметры и аргументы

### Параметры по умолчанию

```javascript
function greet(name = "Гость") {
    return `Привет, ${name}!`;
}

console.log(greet());        // Привет, Гость!
console.log(greet("Анна"));  // Привет, Анна!
```

### Rest параметры

```javascript
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4)); // 10
```

## Область видимости

```javascript
let globalVar = "Глобальная переменная";

function outerFunction() {
    let outerVar = "Внешняя переменная";
    
    function innerFunction() {
        let innerVar = "Внутренняя переменная";
        console.log(globalVar); // Доступна
        console.log(outerVar);  // Доступна
        console.log(innerVar);  // Доступна
    }
    
    innerFunction();
    // console.log(innerVar); // Ошибка! Не доступна
}
```

## Функции высшего порядка

Функции могут принимать другие функции как аргументы:

```javascript
function applyOperation(a, b, operation) {
    return operation(a, b);
}

const add = (x, y) => x + y;
const multiply = (x, y) => x * y;

console.log(applyOperation(5, 3, add));      // 8
console.log(applyOperation(5, 3, multiply)); // 15
```

## Видео о функциях

Подробнее о функциях в этом видео:

[youtube](dQw4w9WgXcQ)

## Практические задания

### Задание 1: Калькулятор

Создайте функции для основных математических операций:

```javascript
function add(a, b) {
    // Ваш код здесь
}

function subtract(a, b) {
    // Ваш код здесь
}

function multiply(a, b) {
    // Ваш код здесь
}

function divide(a, b) {
    // Ваш код здесь
    // Не забудьте проверить деление на ноль!
}

// Тестирование
console.log(add(5, 3));      // 8
console.log(subtract(5, 3)); // 2
console.log(multiply(5, 3)); // 15
console.log(divide(6, 3));   // 2
```

### Задание 2: Фильтрация массива

Создайте функцию, которая фильтрует массив чисел:

```javascript
function filterEvenNumbers(numbers) {
    // Верните только четные числа
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(filterEvenNumbers(numbers)); // [2, 4, 6, 8, 10]
```

## Заключение

Функции - это мощный инструмент в JavaScript. Они помогают:
- Организовать код
- Избежать повторений
- Создавать переиспользуемые компоненты
- Упростить отладку

В следующем уроке мы изучим объекты и массивы!
