"use strict"

/*=========Задача №1========*/
// Отримати в константу елемент <body>

const bodyElement = document.body
console.log(bodyElement)

/*=========Задача №2========*/
/*
Написати функцію, яка додає в <body> список UL з певною кількістю LI (кількість має передаватись як параметр функції, також мати значення за замовченням)
*/

function createList(a) {
	const ulList = document.createElement('ul')
	for (let i = 1; i <= a; i++) {
		const liElement = document.createElement('li')
		liElement.textContent = "Пункт № " + i
		ulList.appendChild(liElement)
	}
	console.log(ulList)
	bodyElement.insertAdjacentElement("afterbegin", ulList)
}
createList(10)


/*=========Задача №3========*/
/*
Додати до елементу <body> класс loaded. Потім перевірити чи є клас loaded у елемента <body> і, якщо є, додати стиль кольору тесту зелений.
*/

bodyElement.classList.add('loaded')
if (bodyElement.classList.contains('loaded')) {
	bodyElement.style.color = `green`
} else {
	bodyElement.style.color = `red`
}


/*=========Задача №4========*/
/*
Дано в html: три елементи з класом item.
Треба отримати ці елементи в константу, кожному додати клас active, та перезаписати контент всередені кожного елемента на "Елемент №(тут порядковий номер елементу починаючи з 1)".
*/

const itemElement = document.querySelectorAll('.item')
console.log(itemElement)
itemElement.forEach((item, index) => {
	item.classList.add('active')
	item.textContent = `Елемент № ${++index}`
})



/*=========Задача №5========*/
/*
Дано в html: текст, далі кнопка з класом button.
Треба прокрутити скрол сторінки до кнопки.
*/

const button = document.querySelector('.button')
function scrollToButton(button) {
	button.scrollIntoView({
		block: "center",
		inline: "nearest",
		behavior: "smooth"
	})
}
scrollToButton(button)


/*=========Задача №6========*/
/*
Дано в html: посилання з класом link
Треба додати до посилання дата атрибут зі значенням 100. Поім отримати значення атрибуту, та, якщо значення меньше 200 пофарбувати колір тексту посилання в червоний
*/

const link = document.querySelector('.link')
link.dataset.color = 100
// link.setAttribute('data-color', '100')
let color = parseFloat(link.dataset.color)
if (color < 200) {
	link.style.color = 'red'
} else {
	link.style.color = 'yellow'
}
console.log(color)