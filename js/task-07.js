'use strict'

// Напиши скрипт, который реагирует на изменение значения 
// input#font-size-control (событие input) и изменяет 
// инлайн-стиль span#text обновляя свойство font-size. 
// В результате при перетаскивании ползунка будет меняться 
// размер текста.

const refs = {
inputEl : document.querySelector('input'),
spanEl : document.querySelector('span'),
}

console.log(refs)

refs.inputEl.addEventListener('input', onFontSizeChange)

function onFontSizeChange(event) {
    refs.spanEl.style.fontSize = `${event.currentTarget.value}px`
}
