export const divSelect = document.querySelector("#select")
export const main = document.querySelector(".js-list")
export const inputFilter = document.querySelector("#input-search")
export const divInput = document.querySelector('#input')
export const selectSort = document.querySelector('#sort')
export const btnRandom = document.querySelector('.js-btn-random')

//Creating the buttons
export const divButtons = document.createElement('div')
export const btnPrevious = document.createElement('button')
export const btnNext = document.createElement('button')
export const btnBack = document.createElement('button')

export const btnPrevSpan = document.createElement('span')
export const btnBackSpan = document.createElement('span')
export const btnNextSpan = document.createElement('span')

divButtons.className = 'list__buttons'
btnPrevious.className = 'btn'
btnPrevious.classList.add('btn--nav')
btnBack.className = 'btn'
btnBack.classList.add('btn--nav')
btnNext.className = 'btn'
btnNext.classList.add('btn--nav')