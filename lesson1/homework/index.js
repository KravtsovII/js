// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write
let a; a = 'hello';
let b; b = 'owu';
let c; c = 'com';
let d; d = 1;
let i; i = 10;
let f; f = -999;
let g; g = 123;
let j; j = 3.14;
let h; h = 2.7;
let k; k = 16;
let m; m = 5 > 4;
let l; l = 5 ==='5';
console.log(a); console.log(b); console.log(c); console.log(d); console.log(i); console.log(f); console.log(g); console.log(j); console.log(h);
console.log(k); console.log(m); console.log(l);
alert(a); alert(b); alert(c); alert(d); alert(i); alert(f); alert(g); alert(j); alert(h); alert(k); alert(m); alert(l);
document.write(a); document.write(b); document.write(c); document.write(d); document.write(i); document.write(f); document.write(g); document.write(j);
document.write(h); document.write(k); document.write(m); document.write(l);

// - Переприсвоїти кожній змінній з завдання значення на довільне.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write
 a = 'hello_hello';
 b = 'guru';
 c = 'dom';
 d = 1111;
 i = 100;
 f = -9;
 g = 3;
 j = 'room';
 h = 8;
 k = 'fast';
 m = 5 ;
 l = 'doom';
console.log(a); console.log(b); console.log(c); console.log(d); console.log(i); console.log(f); console.log(g); console.log(j); console.log(h);
console.log(k); console.log(m); console.log(l);
alert(a); alert(b); alert(c); alert(d); alert(i); alert(f); alert(g); alert(j); alert(h); alert(k); alert(m); alert(l);
document.write(a); document.write(b); document.write(c); document.write(d); document.write(i); document.write(f); document.write(g); document.write(j);
document.write(h); document.write(k); document.write(m); document.write(l);
// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person. (Не об'єкт)
     let firstName; firstName = "Igor";
     let middleName; middleName = "Kravtsov";
     let lastName; lastName = "Igorovich";
     let person = firstName + middleName + lastName;
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
//     Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".
     let x = prompt("Please enter your firstName");
     let y = prompt("Please enter your lastName");
     let z = prompt("Please enter your age");
console.log(`Вітаю ${x} ${y} Тобі ${z} років`);
alert(`Вітаю ${x} ${y} Тобі ${z} років`);
// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
    let aa = 100;
    let bb = '100';
    let cc = true;
console.log(typeof (aa)); //number
console.log(typeof (bb)); //string
console.log(typeof (cc)); //boolean
// - Визначити відповідний оператор в виразах що б вийшов відповідний результат.
//     В однакових виразах не використовувати однакові оператори!!!
// 5 < 6 -> true
// 5 > 6 -> false
// 5 = 6 -> false
// 5 >= 6 -> false
// 10 = 10 -> true
// 10 === 10 -> true
// 10 > 10 -> false
// 10 < 10 -> false
// 10 <= 10 -> false
// 123 > '123' -> false
// 123 = '123' -> true

// - Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
let str = "20";
let aaa = 5;
document.write(str + aaa + "<br/>"); // 20 + 5 = 25 + string.
document.write(str - aaa + "<br/>"); // (20 - 5) = 15 + string.
document.write(str * "2" + "<br/>"); // (20*2) = 40  + string.
document.write(str / 2 + "<br/>");   // (20/2) = 10 + string.

