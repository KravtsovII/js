// 1. Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor). Скласти результат цих чисел в змінній result.

let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
result = a[0] + a[1] + a[2] + a[3] + a[4] + a[5] + a[6] + a[7] + a[8] + a[9];
console.log(result);

// 2. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр
// 3. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори
// 4. Створити маис об'єктів book з наступними полями  - назва, кількість сторінок, жанр, автори. Вивести кожну книгу як окремий об'єкт

let book = {
    name_book: 'Harry Potter',
    number_ofPages: 600,
    genre: 'fantasy',
   };
console.log(book);
let book1 = {
    name_book: 'Picnic on the roadside',
    number_ofPages: 400,
    genre: 'science fiction',
    author: ['Boris Strugatsky', 'Arkady Strugatsky']
    };
console.log(book1);
let book2 = ['Lord of the Rings', 740, 'fantasy', 'J.R.R.Tolkien'
    ];
console.log(book2);
// 5. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
// Значення площі зберігати в змінній s.

 let   height = 23;
 let   width = 10;
 let s = height * width;
console.log(s);
// 6. Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
// результат помістіть у змінну v.
 let  heightC = 10;
 let dC = 4;
 let v = 3.14 * (dC/2) * heightC;
console.log(v);
// 7. У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
// Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow (число, ступінь) або оператор зведення в ступінь **).
 let n = 3;
 let m = 4;
 let k = (Math.sqrt(n*n + m*m));
console.log(k);
