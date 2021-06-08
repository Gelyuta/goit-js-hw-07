'use strict'

// Счетчик состоит из спана и кнопок, которые должны
// увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится 
// текущее значение счетчика.

// Создай функции increment и decrement для увеличения и 
// уменьшения значения счетчика

// Добавь слушатели кликов на кнопки, вызовы функций и 
// обновление интерфейса

let counterValue = 0;

const buttonDecrement = document.querySelector('button[data-action="decrement"]');
buttonDecrement.addEventListener('click', onTargetButtonDecrement)
console.log(buttonDecrement)


const buttonIncrement = document.querySelector('button[data-action="increment"]')
buttonIncrement.addEventListener('click', onTargetButtonIncrement)
console.log(buttonIncrement)

const valueEl = document.querySelector('#value')

function onTargetButtonDecrement () {
    
    counterValue -=1;
    return valueEl.textContent = counterValue;
    }


function onTargetButtonIncrement (){
  
    counterValue +=1;
    return valueEl.textContent = counterValue;
}




