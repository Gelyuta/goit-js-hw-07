'use strict'

// Напиши скрипт, который бы при потере фокуса на инпуте, 
// проверял его содержимое на правильное количество символов.

// Сколько символов должно быть в инпуте, указывается в его 
// атрибуте data-length.

// Если введено подходящее количество, то border инпута 
// становится зеленым, если неправильное - красным.

// Для добавления стилей, используй CSS-классы valid и invalid.


const inputEl = document.querySelector('input#validation-input')
// console.log(inputEl)

inputEl.addEventListener('blur', onInputBlur)

function onInputBlur(event) {
    inputEl.textContent  = event.currentTarget.value;
    
    if (inputEl.textContent.length !== Number(inputEl.getAttribute('data-length'))) {
        
        inputEl.classList.add('invalid');
        inputEl.classList.remove('valid')
    }
    
    else
    { inputEl.classList.add('valid') 
    inputEl.classList.remove('invalid')
};
    
}
