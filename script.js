
// Task 1
// Створити змінну zero яка приймати значення з prompt. Потрібно перевірити значення змінної
/* 
1. Коли ввели додатнє число або символ "+" тоді в консолі виводити "Ви ввели додатнє число"
2. Коли ввели від'ємне число або символ "-" тоді в консолі виводити "Ви ввели від'ємне число"
3. Коли ввели число 0 або слово "zero" тоді в консолі виводити "Ви ввели число нуль"
4. Коли скасували дію тоді в консолі виводити "Ви скасували умову"
5. Коли ввели текст тоді в консолі виводити "Ви ввели текст"
6. Коли нічого не ввели тоді в консолі виводити "Ви нічого не ввели"
*/
/*
let zero = prompt("Введіть число або символ");
if (zero > 0 || zero == "+") {
  console.log("Ви ввели додатнє число");
} else if (zero == null) {
  console.log("Ви скасували умову");
} else if (zero == "") {
  console.log("Ви нічого не ввели");
} else if (zero < 0 || zero == "-") {
  console.log("Ви ввели від`ємне число");
} else if (zero == 0 || zero == "zero") {
  console.log("Ви ввели число нуль");
} else  {qq
  console.log("Ви ввели текст");
}
*/

// Task 2

/*  Написати тест на довільну тему з 10-ти питань. Якщо користувач відповідає вірно додаємо бал. Якщо відповідає не вірно тоді нічого не робимо.
 В кінці виводимо статистику про кількість правильних відповідей з можливих 10. І повідомлення для користувача про рівень знань відносно набраних балів.
 */

// let count = 0;
// console.log("Count =", count);
// let ask = prompt("1.У якому році почалась Перша світова війна?");
// if (ask == 1914 || ask == '1914р.'|| ask == '1914р') {
//   console.log("Відповідь вірна");
//   count++;
// }
// else   {console.log('Відповідь невірна');}

// console.log("Count =", count);

// let ask2 = prompt("2.У якому році закінчилась Перша світова війна?");
// if (ask2 == 1918 || ask2 == '1918р.'|| ask2 == '1918р' ) {
//   console.log("Відповідь вірна");
//   count++;
// }
// else   {console.log('Відповідь невірна');}

// console.log("Count =", count);

// let ask3 = prompt("3.Коли було проголошено день незалежності України?");
// if (ask3 == "24 серпня 1991 року" || ask3 == "24 серпня 1991р." || ask3 == "24.08.1991") {
//   console.log("Відповідь вірна");
//   count++;
// }
// else   {console.log('Відповідь невірна');}
// console.log("Count =", count);

// let ask4 = prompt("4.Коли було проголошено Акт Злуки УНР і ЗУНР?");
// if (ask4 == "22 січня 1919 року" || ask4 == "22 січня 1919р." || ask4 == "22.01.1919") {
//   console.log("Відповідь вірна");
//   count++;
// }
// else   {console.log('Відповідь невірна');}
// console.log("Count =", count);


// let ask5 = prompt("6.Яке товариство було засноване у Львові у 1968 році?");
// if ( ask5.toLowerCase() === 'просвіта'|| ask5.toLowerCase() === 'prosvita' ) {
//   console.log("Відповідь вірна");
//   count++;
// }
// else   {console.log('Відповідь невірна');}
// console.log("Count =", count);




// let ask6 = prompt("6.У якому році християнство впроваджено як основну релігію Київської Русі?");
// if (ask6 == 988 || ask6 == '988р.' || ask6 == '988р' ) {
//   console.log("Відповідь вірна");
//   count++;
// }
// else   {console.log('Відповідь невірна');}
// console.log("Count =", count);


// let ask7 = prompt("7.Хто був главою Гетьманської Ради під час Хмельницької війни?");
// if (  ask7.toLowerCase() === 'хмельницький'|| ask7.toLowerCase() === 'богдан хмельницький' || ask7.toLowerCase() ==='Khmelnytskyi' ) {
//   console.log("Відповідь вірна");
//   count++;
// }
// else  {console.log('Відповідь невірна');}
// console.log("Count =", count);


// let ask8 = prompt("8.Яка подія відбулася в Україні в 1986 році?");
// if ( ask8.toLowerCase() === 'чорнобильська катастрофа' || ask8.toLowerCase() === 'чорнобильська аварія' ) {
//   console.log("Відповідь вірна");
//   count++;
// }
// else   {console.log('Відповідь невірна');}
// console.log("Count =", count);



// let ask9 = prompt("9.Який рік вважається початком Другої світової війни?");
// if (ask9 == 1939 || ask9 === '1939р.'|| ask9 === '1939р' ){
//   console.log("Відповідь вірна");
//   count++;
// }
// else   {console.log('Відповідь невірна');}
// console.log("Count =", count);




// let ask10 = prompt("10.Хто був першим президентом незалежної України?");
// if ( ask10.toLowerCase() === 'леонід кравчук'|| ask10.toLowerCase() === 'кравчук' ) {
//   console.log("Відповідь вірна");
//   count++;
// }
// else   {console.log('Відповідь невірна');}
// console.log("Total Count =", count);


// if (count >= 0 && count <= 2) {
//     console.log('дуже погано')
// }
// if (count >2  && count <= 4) {
//   console.log('погано')
// }
// if (count >4  && count <= 7) {
//   console.log('добре')
// }
// if (count >7  && count <= 9) {
//   console.log('дуже добре')
// }
// if ( count == 10) {
//   console.log('відмінно')
// }




// Task 3

/*Якщо користувач вводить «Ім’я», то питати пароль, якщо натиснув скасувати(escape) - виводити «Вхід скасований», якщо вводить щось інше - «Я вас не знаю».

Пароль перевіряти так. Якщо введений пароль «ЛОГОС», то виводити «Ласкаво просимо!», Інакше - «Пароль невірний», при скасуванні - «Вхід скасований». */



// let firstname = prompt("Введіть своє ім`я");

// if (firstname == "Христина") {
//   console.log((password = prompt("Введіть свій пароль")));

//   if (password == "ЛОГОС") {
//     console.log("Ласкаво просимо!");
//   } else if (password == null) {
//     console.log("Вхід скасований");
//   } else if (password == "") {
//     console.log("Не ввели пароль");
//   } else {
//     console.log("Пароль невірний");
//   }
  
// } else if (firstname == "") {
//   console.log("Введіть ім`я");
// } else if (firstname == null) {
//   console.log("Вхід скасований");
// } else {
//   console.log("Я вас не знаю");
// }



// Task 4
/*Написати програму яка видає користувачу ввести число. Після введення числа вистрибує алерт з оголошенням пори року до якої відноситься число (номер місяця) що ввів користувач.
Якщо число не входить в діапазон від 1 до 12 тоді неможливо. */

// let number = prompt("Введіть число від 1 до 12");
// if (number >= 1 || number <= 2 || number == 12) {
//   alert("зима");
// } else if (number >= 3 || number <= 5) {
//   alert("весна");
// } else if (number >= 6 || number <= 8) {
//   alert("літо");
// } else if (number >= 9 || number <= 11) {
//   alert("осінь");
// } else alert("Неможливо визначити пору року");
