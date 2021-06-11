'use strict'

// Напиши скрипт который, при наборе текста в инпуте 
// input#name-input (событие input), подставляет его текущее 
// значение в span#name-output. 
// Если инпут пустой, в спане должна отображаться строка 
// 'незнакомец'.



const refs = {
    input:document.querySelector('input#name-input'),
    output:document.querySelector('span#name-output'),
}

refs.input.addEventListener('input', onInputUserName);

function onInputUserName(event) {
    
    refs.output.textContent = event.currentTarget.value;
    refs.output.textContent.length === 0 ? refs.output.textContent ='незнакомец' : refs.output.textContent
}