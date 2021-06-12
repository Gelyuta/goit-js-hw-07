'use strict'

// Напиши скрипт для создания галлереи изображений
// по массиву данных.

// Используй массив объектов images для создания тегов img 
// вложенных в li. 
// Для создания разметки используй шаблонные строки и 
// insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами 
// или гридами через css-классы.

const images = [
    {
      url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'White and Black Long Fur Cat',
    },
    {
      url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
      url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Group of Horses Running',
    },
  ];

//   1 вариант 

// const galleryEl = document.querySelector('#gallery');
// galleryEl.classList.add("gallery")
// console.log(galleryEl)


//  const elements = images.map(image => {
//      const imgEl = document.createElement('img');
// imgEl.classList.add("gallery__img")
//      imgEl.src = image.url;
//      imgEl.alt = image.alt;

//     const itemEl = document.createElement('li');
//     itemEl.classList.add('gallery__items');
//     itemEl.appendChild(imgEl)

//     return itemEl

//  });

//  galleryEl.append(...elements)



// *******************************************************************

  // 2 вариант 
 
const galleryEl = document.querySelector('#gallery');
galleryEl.classList.add("gallery")


const makeImages = images => {
return images.map(image => {
    
    const imgEl = document.createElement('img');
    imgEl.classList.add("gallery__img")
    imgEl.src = image.url;
    imgEl.alt = image.alt;

    const itemEl = document.createElement('li');
    itemEl.classList.add('gallery__items');
    itemEl.appendChild(imgEl)

    return itemEl
});
}

const elements = makeImages(images);
 galleryEl.append(...elements)

 galleryEl.classList.add("gallery")

