/* Работа с переменными */
/* 1 */
/* let a = 3;
console.log (a); */
/* 2 */
/* let a = 10;
let b = 2;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b); */
/* 3 */
/* let c=15;
let d=2;
let result=c+d;
console.log(result); */
/* 4 */
/* let a=10;
let b=2;
let c=5;
console.log(a+b+c); */
/* 5 */
/* let a=17;
let b=10;
let c = a - b;
let d = 7;
let result = c + d;
console.log(result); */
/* Работа со строками */
/* 6 */
/* let str = "Привет, Мир!";
console.log(str); */
/* 7 */
/* let str1 = "Привет, ";
let str2 = "Мир!";
console.log(str1+str2); */
/* 8 */
/* let name = "Дмитрий";
console.log(`Привет, ${name}!`); */
/* 9 */
/* let age = 30;
console.log(`Мне ${age} лет!`); */
/* Функция prompt */
/* 10 */
/* let a = prompt('Ваше имя?', 'John');
console.log(`Ваше имя, ${a}`); */
/* 11 */
/* let a = prompt('Введите число для возведения в квадрат', '');
let b = a * a;
console.log(b); */
/* Обращение к символам строки */
/* 12 */
/* let str = 'abcde';
console.log(str[0]);
console.log(str[2]);
console.log(str[4]); */
/* 13 */
/* let num = '12345';
console.log(num[0]*num[1]*num[2]*num[3]*num[4]); */
/* Практика */
/* 14 */
/* let minutes = 60;
let hour = minutes * 60;
let day = hour * 24;
let month = day * 31;
console.log(`В часе ${hour} секунд`);
console.log(`В сутках ${day} секунд`);
console.log(`В месяце ${month} секунд`); */
/* 15 */
/* let second = '05';
let minutes = '40';
let hour = '14';
console.log(`${hour}:${minutes}:${second}`); */
/* 16 */
/* let a = 25;
let b = a * a;
console.log(b); */
/* Работа с присваиванием и декрементами */
/* 17 */
/* let num = 47;
num += 7;
num -= 18;
num *= 10;
num /= 15;
console.log(num); */
/* 18 */
/* let num = 10;
num++;
num++;
num--;
console.log(num); */
/* Работа с массивами */
/* 1 */
/* let arr = ['a', 'b', 'c'];
console.log(arr); */
/* 2 */
/* let arr = ['a', 'b', 'c'];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]); */
/* 3 */
/* let arr = ['a', 'b', 'c', 'd'];
console.log(arr[0] + arr[1], arr[2] + arr[3]); */
/* 4 */
/* let arr = [2, 5, 3, 9];
let result = arr[0] * arr[1] + arr[2] * arr[3];
console.log(result); */
/* Объекты (ассоциативные массивы) */
/* 5 */
/* let obj = {a: 1, b: 2, c: 3};
console.log(obj['c']);
console.log(obj.c); */
/* 6 */
/* let obj = {Коля: '1000', Вася: '500', Петя: '200'};
console.log(obj['Петя']);
console.log(obj['Коля']); */
/* 7 */
/* let week = {
    1: 'Понедельник', 
    2: 'Вторник',
    3: 'Среда',
    4: 'Четверг',
    5: 'Пятница',
    6: 'Суббота',
    7: 'Воскресенье',
}; */
/* 8 */
/* let day = week['4'];
console.log(day);  */
/* Многомерные массивы */
/* 9 */
/* let arr = [ [1, 2, 3], [4, 5, 6], [7,8,9] ];
console.log(arr[1][0]); */
/* 10 */
/* let obj = {js:['jQuery', 'Angular'], php: 'hello', css: 'world'};
console.log(obj.js[0]); */
/* 11 */
/* let arr = {
    ru:['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    en:['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
};
console.log(arr.ru[0]);
console.log(arr.en[2]); */
/* 12 */
/* let lang = 'ru';
let day = 4;
console.log(arr[lang][day]); */
/* Работа с if-else */
/* 1 */
/* let a = 0;
if (a == 0) {
    console.log('Верно!')
}; */
/* 2 */
/* let a = 1;
if (a > 0) {
    console.log('Верно!')
} else {
    console.log('Неверно!')
} */
/* 3 */
/* let a = -3;
if (a < 0) {
    console.log('Верно!')
} else {
    console.log('Неверно!')
} */
/* 4 */
/* let a = 0;
if (a >= 0) {
    console.log('Верно!')
} else {
    console.log('Неверно!')
} */
/* 5 */
/* let a = 0;
if (a <= 0) {
    console.log('Верно!')
} else {
    console.log('Неверно!')
} */
/* 6 */
/* let a = 1;
if (a != 0) {
    console.log('Верно!')
} else {
    console.log('Неверно!')
}  */
/* 7 */
/* let a = 'test';
if (a == 'test') {
    console.log('Верно!')
} else {
    console.log('Неверно!')
} */
/* 8 */
/* let a = 1;
if (a === 1) {
    console.log('Верно!')
} else {
    console.log('Неверно!')
} */
/* Работа с логическими переменными */
/* 9 */
/* let test = true;
if (test == false) {
    console.log('Верно!')
} else {
    console.log('Неверно!')
}  */
/* 10 */
/* let test = false;
if (test !== true) {
    console.log('Верно!')
} else {
    console.log('Неверно!')
} */
/* Работа с && (и) и || (или) */
/* 11 */
/* let a = 2;
if (a > 0 && a < 5) {
    console.log('Верно');
} else {
    console.log('Неверно');
} */
/* 12 */
/* let a = 0;
if (a == 0 || a == 2) {
    a += 7;
} else {
    a /= 10;
}
console.log(a); */
/* 13 */
/* let a = 3;
let b = 5;
if (a <= 1 && b >= 3) {
    console.log(a + b)
} else {
    console.log(a - b)
} */
/* 14 */
/* let a = 1;
let b = 5;
if ((a > 2 && a < 11) || (b >= 6 && b < 14)) {
    console.log('Верно')
} else {
    console.log('Неверно')
} */
/* На switch-case */
/* 15 */
/* let num = 4;
let result;
switch (num) {
    case 1:
    result = 'Зима';
    break;
    case 2:
    result = 'Весна';
    break;
    case 3:
    result = 'Лето';
    break;
    case 4:
    result = 'Осень';
    break;
}
console.log(result); */
/* 16 */
/* let day = 17;
let dek
if (day < 8) {
    dek = 'Первая декада!';
} 
if (day >= 8 && day < 15) {
    dek = 'Вторая декада!';
}
if (day >= 15 && day < 21) {
    dek = 'Третья декада!';
}
if (day >= 21 && day < 31) {
    dek = 'Четвертая декада';
}
console.log(dek); */
/* 17 */
/* let month = 3;
if ((month > 0 && month <= 2) || month == 12) {
    console.log('Зима');
}
if (month > 2 && month <= 5) {
    console.log('Весна');
}
if (month > 5 && month <= 8) {
    console.log('Лето');
}
if (month > 8 && month <= 11) {
    console.log('Осень');
} */
/* 18 */
/* let str = 'abcde';
if (str[0]=='a') {
    console.log('Да');
} else {
    console.log('Нет');
} */
/* 19 */
/* let str = '12345';
if (str[0] == 1 || str[0] == 2 || str[0] == 3 ) {
    console.log('Да');     
} else {
console.log('Нет');
} */
/* 20 */
/* let str = '356';
console.log((+str[0])+(+str[1])+(+str[2])); */
/* 21 */
/* let str = '123420';
if (((+str[0]) + (+str[1]) + (+str[2])) == ((+str[3]) + (+str[4]) + (+str[5]))) {
    console.log('Да');
} else {
    console.log('Нет');
} */
/* Циклы while и for */
/* 1 */
/* let i = 1;
while (i <= 100) {
    document.write(i + '<br>');
    i++;
};
for (a = 1; a <= 100; a++) {
    document.write(a + '<br>');
} */
/* 2 */
/* let i = 11
while (i <= 33) {
    document.write(i + '<br>');
    i++;
};
for (a = 11; a <= 33; a++) {
    document.write(a + '<br>');
} */
/* 3 */
/* for (i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
        document.write(i + '<br>');
    }
} */
/* 4 */
/* let a = 0;
for (i = 1; i <= 100; i++){
    a += i;
    document.write(a+'<br>')
} */

