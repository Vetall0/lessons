"use strict"
/*=========Задача №1========*/


let someVar = 0;
++someVar;
if (someVar) {
	console.log(someVar);
}

// Створюємо змінну someVar та присвоюємо їй значення 0
// Додаємо одиницю до заданного значення someVar (інкремент)
// Якщо значення someVar істина (true), то виводимо в консоль поточне значення someVar
// Якщо значення someVar хибне (false), то в консоль нічого не виводимо


/*=========Задача №2========*/


for (let i = 1; i <= 10; i++) {
	let item = `Пункт №${i}`
	console.log(item)
}

// Створюємо змінну i та присвоюємо їй значення 1
// Вказуємо умову виконання циклу - поки і не буде меньше чи рівне 10
// В кінці кожного циклу добавляємо 1 до поточного значення змінної і (інкремент)
// Створюємо змінну item в яку записуємо поточні значення
// Результат (item) виводимо в циклі задану кількість разів (вказану в умові)

// P.S. Змінну item можна було б не створювати, а результат зразу виводити в console.log
//      тоді дві строчки в циклі замінились би однією: console.log(`Пункт №${i}`), але так наглядніше


/*=========Задача №3========*/


if (2 * 20 <= 10 || 30 / 2 < 5 && 10 <= "10" || 20 === "20") {
	console.log('000');
}

// В консоль не потрапить нічого:
// Крок №1
//	falce || falce && true || false
// Крок №2
//	falce || falce || false
// Крок №3
//	falce
// Якби, наприклад, в останньому порівнянні строку "20" змінити на число 20, то в консоль вивелось би "000"
// або, змінити знак строгого порівняння "===" на звичайне "==" порівняння, тоді, також, в консоль виведеться "000"


/*=========Задача №4========*/


let varOne = 10
let varTwo = 0
function calcDiv(a, b) {
	let divNum = a / b
	if (divNum === Infinity) {
		console.log("Результат ділення: ", "Помилка (нескінченність)")
	} else if (divNum) {
		console.log("Результат ділення: ", divNum)
	} else if (divNum === 0) {
		console.log("Результат ділення: ", divNum)
	} else {
		console.log("Результат ділення: ", "Помилка (не можливо поділити)")
	}
}
calcDiv(varOne, varTwo)



/*=========Задача №5========*/


let someArray = [5, 25.2, "Vetall", 10, false]
for (let i = 0; i < someArray.length; i++) {
	if (someArray[i] === 10) {
		console.log(`В ячейці ${i} знаходиться число ${someArray[i]}`)
	}
}