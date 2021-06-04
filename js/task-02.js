'use strict'

// Напиши скрипт, который для каждого элемента 
// массива ingredients  создаст отдельный li,
// после чего вставит все li за одну операцию 
// в список ul.ingredients. 
// Для создания DOM-узлов используй document.createElement()

const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];


const itemEl = document.createElement('li');
itemEl.textContent = 'Картошка'
// console.log(itemEl)


const itemEl2 = document.createElement('li');
itemEl2.textContent = 'Грибы'
// console.log(itemEl2)

const itemEl3 = document.createElement('li');
itemEl3.textContent = 'Чеснок'
// console.log(itemEl3)

const itemEl4 = document.createElement('li');
itemEl4.textContent = 'Помидоры'
// console.log(itemEl4)

const itemEl5 = document.createElement('li');
itemEl5.textContent = 'Зелень'
// console.log(itemEl5)

const itemEl6 = document.createElement('li');
itemEl6.textContent = 'Приправы'
// console.log(itemEl6)


const ingredientsEl = document.querySelector('#ingredients');
ingredientsEl.append(itemEl, itemEl2, itemEl3, itemEl4, itemEl5, itemEl6)
console.log(ingredientsEl)

