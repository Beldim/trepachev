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
/* Работа с for для массивов */
/* 5 */
/* let arr = [1, 2, 3, 4, 5];
for (i = 0; i < arr.length; i++){
    console.log(arr[i]);
} */
/* 6 */
/* let result = 0
let arr = [1, 2, 3, 4, 5];
for (i = 0; i < arr.length; i++){
    result += arr[i];
    console.log(result);
} */
/* Работа с for-in */
/* 7 */
/* let obj = {green: 'зеленый', red: 'красный', blue: 'голубой'};
for (let key in obj){
    console.log(key + ':' + obj[key]);
} */
/* 8 */
/* let obj = {
    Коля:200,
    Вася:300,
    Петя:400
};
for (let key in obj){
    console.log(key + ' зарплата ' + obj[key] + ' долларов!');
} */
/* 9 */
/* let arr = [2, 5, 9, 15, 0, 4];
for (i = 0; i < arr.length; i++){
    if (arr[i] > 3 && arr[i] < 10){
        document.write(arr[i] + '<br>');
    }
} */
/* 10 */
/* let sum = 0;
let arr = [-2, 5, 9, -15, 0, 4];
for (i = 0; i < arr.length; i++){
    if (arr[i] >= 0){
        sum += arr[i];
        }
}
document.write(sum + '<br>'); */
/* 11 */
/* let arr = [1, 2, 5, 9, 4, 13, 4, 10];
for (i = 0; i < arr.length; i++) {
    if (arr[i] == 4) {
        console.log('Есть!');
        break;
    }
} */
/* 12 */
/* let arr = ['10', '20', '30', '50', '235', '3000'];
for (i = 0; i < arr.length; i++){
    if (arr[i][0] == 1 || arr[i][0] == 2 || arr[i][0] == 5){
    console.log(arr[i]);
    }
} */
/* 13 */
/* let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (i = 0; i < arr.length; i++){
    document.write('-' + arr[i]);
} */
/* 14 */
/* let arr = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
for (i=0; i<arr.length; i++){
    if (i < 5 ){
document.write(arr[i] + '<br>');
    } else {
        document.write('<i><b style="color: red; ">' + arr[i] + '<br>' + '</b></i>');
    } 
} */
/* 15 */
/* let arr = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
for (i=0; i<arr.length; i++){
    let day = arr[5];
    if (arr[i] == day){
        document.write('<i>' + arr[i] + '<br>' + '</i>');
    } else {
        document.write(arr[i]+ '<br>');
    }
} */
/* 16 */
/* let num = 0;
for (n = 1000; n > 50; n/=2){
    num++;
    document.write(n + '<br>');
}
document.write('Количество интераций ' + num + '<br>'); */
/* Работа со степенью и корнем */
/* 3 */
/* let st = Math.pow(2, 10);
console.log(st); */
/* 4 */
/* console.log(Math.sqrt(245)); */
/* 5 */
/* let a = 0;
let arr = [4, 2, 5, 19, 13, 0, 10];
for (i=0; i<arr.length; i++){
   a += Math.pow(arr[i], 3);
}
console.log(a); */
/* Работа с функциями округления */
/* 6 */
/* console.log(Math.sqrt(379));
console.log(Math.round(Math.sqrt(379)));
console.log((Math.sqrt(379)).toFixed(1));
console.log((Math.sqrt(379)).toFixed(2)); */
/* 7 */
/* let obj={};
obj['floor'] = Math.floor(Math.sqrt(587));
obj['ceil'] = Math.ceil(Math.sqrt(587));
console.log(obj); */
/* 8 */
/* console.log(Math.min(4, -2, 5, 19, -130, 0, 10));
console.log(Math.max(4, -2, 5, 19, -130, 0, 10)); */
/* 9 */
/* console.log(Math.round(Math.random()*100)); */
/* 10 */
/* let arr=[];
for (i=0; i<10; i++){
    arr[i]=Math.round(Math.random()*100);
}
console.log(arr); */
/* 11 */
/* let a=3;
let b=5;
console.log(Math.abs(a-b)); */
/* 12 */
/* let a=6;
let b=1;
let c=a-b;
console.log(Math.abs(c)); */
/* 13 */
/* let b=0;
let arr=[12, 15, 20, 25, 59, 79];
for (i=0; i<arr.length; i++){
    b+=arr[i];
}
console.log(b/arr.length); */
/* 14 */
/* let fact = 6;
let b = 1;
for (i=1; i<=fact; i++){
b *= i;
}
console.log(b); */
/* Задачи на функции работы со строками в JavaScript */
/* 1 */
/* let str = 'js';
console.log(str.toUpperCase()); */
/* 2 */
/* let str = "JS";
console.log(str.toLowerCase()); */
/* 3 */
/* let str = 'я учу javascript!';
console.log(str.length); */
/* 4 */
/* let str = 'я учу javascript!';
console.log(str.substr(2, 15));
console.log(str.substring(2, 17));
console.log(str.slice(2, 17)); */
/* 5 */
/* let str = 'я учу javascript!';
console.log(str.slice(2, 6)); */
/* 6 */
/* let str = 'я учу javascript!';
let n =10;
if (str.length > n) {
    result = str.slice(0, n)+'...';
} else {
    result = str;
}
console.log(result); */
/* 7 */
/* let str = 'Я-учу-javascript!';
console.log(str.replace(/-/g, '!')); */
/* 8 */
/* let str = 'я учу javascript!';
arr = str.split(' ');
a = arr[0];
b = arr[1];
c = arr[2];
console.log(a);
console.log(b);
console.log(c); */
/* 9 */
/* let str = 'я учу javascript!';
arr = str.split('');
for (i=0; i<arr.length; i++){
    console.log(arr[i]);
} */
/* 10 */
/* let date = '2025-12-31';
arr = date.split('-');
date = arr[0]+'.'+arr[1]+'.'+arr[2];
console.log(date); */
/* 11 */
/* let arr = ['я', 'учу', 'javascript', '!'];
console.log(arr.join('+')); */
/* 12 */
/* let str = 'я учу javascript!';
let a = (str.slice(0, 1)).toUpperCase();
let b = str.slice(1, str.length);
console.log(a+b); */
/* 13 */
/* let con = '';
let str = 'я учу javascript!';
let arr = str.split(' ');
for (i=0; i<arr.length; i++){
    con += (arr[i].slice(0, 1)).toUpperCase()+arr[i].slice(1, arr[i].length)+' ';
};
console.log(con); */
/* 14 */
/* let str = 'var_test_text';
let con = '';
let arr = str.split('_');
for (i=0; i<arr.length; i++){
    con += (arr[i].slice(0, 1)).toUpperCase()+arr[i].slice(1, arr[i].length);
};
console.log(con); */
/* Задачи на функции работы с массивами в JavaScript */
/* 1 */
/* let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr = arr1.concat(arr2);
console.log(arr); */
/* 2 */
/* let arr = [1, 2, 3];
console.log(arr.reverse()); */
/* 3 */
/* let arr = [1, 2, 3];
arr.push(4, 5, 6);
console.log(arr); */
/* 4 */
/* let arr = [1, 2, 3];
arr.unshift(4, 5, 6);
console.log(arr); */
/* 5 */
/* let arr = ['js', 'css', 'jq'];
let elem = arr.shift();
console.log(elem); */
/* 6 */
/* let arr = ['js', 'css', 'jq'];
let elem = arr.pop();
console.log(elem); */
/* 7 */
/* let arr = [1, 2, 3, 4, 5];
let elem = arr.slice(0, 3);
console.log(elem); */
/* 8 */
/* let arr = [1, 2, 3, 4, 5];
let elem = arr.slice(2, 4);
console.log(elem); */
/* 9 */
/* let arr = [1, 2, 3, 4, 5];
arr.splice(1, 2);
console.log(arr); */
/* 10 */
/* let arr = [1, 2, 3, 4, 5];
let del = arr.splice(1, 3);
console.log(del); */
/* 11 */
/* let arr = [1, 2, 3, 4, 5];
arr.splice(3, 0, 'a', 'b', 'c');
console.log(arr); */
/* 12 */
/* let arr = [1, 2, 3, 4, 5];
arr.splice(1, 0, 'a', 'b');
arr.splice(6, 0, 'c');
arr.splice(9, 0, 'e');
console.log(arr); */
/* 13 */
/* let arr = [3, 4, 1, 2, 7];
console.log(arr.sort()); */
/* 14 */
/* let obj = {js:'test', jq: 'hello', css: 'world'};
console.log(Object.keys(obj)); */
/* Практика на комбинации стандартных функций JavaScript */
/* 1 */
/* let str = 'javascript';
let arr = str.split('');
arr[0] = arr[0].toUpperCase();
console.log(arr.join('')); */
/* let str = 'javascript';
str = str[0].toUpperCase() + str.substr(1);
console.log(str); */
/* 2 */
/* let str = '123456';
let arr = str.split('');
arr = arr.reverse();
str = arr.join('');
console.log(str); */
/* 3 */
/* let str = 'http://yandex.ru';
if (str.substr(0, 7) == 'http://'){
    console.log('Данная строка содержит в начале http://');
} else {
    console.log('Данная строка не содержит в начале http://');
} */
/* 4 */
/* let str = 'http://yandex.html';
if (str.substr(-5, 5) == '.html'){
    console.log('Данная строка содержит в конце .html');
} else {
    console.log('Данная строка не содержит в конце .html');
} */
/* Приемы работы с флагами на JavaScript */
/* 1 */
/* let arr = ['1', '2', '5', '3', '5'];
flag = false;
for (i = 0; i < arr.length; i++){
    if (arr[i] == 5){
        flag = true;
        break;        
    } else {
        flag = false;
    }
}
if (flag === true){
    console.log('Да');
} */
/* 2 */
/* let flag = false;
let num = 31;
for (i = 2; i < num; i++){
    if (num % i != 0) {
        flag = true;
    } else {
        flag = false;
    }
}
    console.log(flag); */
/* 3 */
/* let arr = ['1', '2', '3', '5', '5', '8', '5', '7'];
let flag = false;
for (i = 0; i < arr.length; i++){
if (arr[i] == arr[i+1]){
    flag = true;
    break;
   } else {
    flag = false;
    }
}
if (flag === true){
    console.log('Да!');
} else {
    console.log('Нет!');
} */