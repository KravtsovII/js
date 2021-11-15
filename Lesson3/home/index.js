// --створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

let text = ['one', 'two', 'three', 'for', 'five'];
let num = [1, 2, 3, 4, 5];
let all = [false, 'two', 1996, true, 'okten'];
console.log(text);
console.log(num);
console.log(all);

// - Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
let array = [];
array[0] = 1;
array[1] = 2;
array[2] = 3;
array[3] = 4;
console.log(array);
document.write(array);

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
for (let i = 0; i < 10; i++) {
    document.write(`<div> text </div>`);
}
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for (let i = 0; i < 10; i++) {
    document.write(`<div>${i} - text index </div>`);
}
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let j =0;
while(j<20){
    document.write(`<div> <h1> text while </h1> </div>`);
    j++;
}
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let g =0;
while(g<20){
    document.write(`<div>${g} <h1> text </h1></div>`);
    g++;
}
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let zum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (i = 0; i < zum.length; i++) {
    console.log(zum[i])
}
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
let zim = ['one', 'two', 'three', 'four', 'five', "six", 'seven', 'eight', 'nine', 'ten'];
for (i = 0; i < zim.length; i++) {
    console.log(zim[i])
}
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
let Boolean = [false, 'two', 1996, true, 'okten', 23, 45, 'vasia', {}, [], 'hi'];
for (i = 0; i < Boolean.length; i++) {
    if (typeof Boolean[i] === 'boolean') {
        console.log(Boolean[i]);
    }
}
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let allArray = [false, 'two', 1996, true, 'okten',23,45,'vasia',{},[],'hi'];
for (i = 0; i < allArray.length; i++) {
    console.log(allArray[i])
}
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
let Number = [false, 'two', 1996, true, 'okten', 23, 45, 'vasia', {}, [], 'hi'];
for (i = 0; i < Number.length; i++) {
    if (typeof Number[i] === 'number') {
        console.log(Number[i]);
    }
}
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
let String = [false, 'two', 1996, true, 'okten', 23, 45, 'vasia', {}, [], 'hi'];
for (i = 0; i < String.length; i++) {
    if (typeof String[i] === 'string') {
        console.log(String[i]);
    }
}
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
// Вивести в консоль всі його елементи в циклі.
let emptyArray = [];
emptyArray[0] = 'Happy';
emptyArray[1] = 'New';
emptyArray[2] = 2022;
emptyArray[3] = 'Chto';
emptyArray[4] = 'Gde';
emptyArray[5] = 'Kuda';
emptyArray[6] = 'Sinho Faza Tron';
emptyArray[7] = true;
emptyArray[8] = 2019;
emptyArray[9] = false;
for (let i = 0; i < emptyArray.length; i++) {
    console.log(emptyArray[i]);
}

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 10; i++) {
    console.log('поточний крок циклу : ' + i + ' ');
    document.write('поточний крок циклу : ' + i + ' ');
}

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 100; i++) {
    console.log('поточний крок циклу : ' + i + ' ');
    document.write('поточний крок циклу : ' + i + ' ');
}

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 100; i+=2) {
    console.log('поточний крок циклу : ' + i + ' ');
    document.write('поточний крок циклу : ' + i + ' ');
}

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for (let i = 0; i < 100; i++) {
    if(i % 2 === 0){
        console.log('поточний крок циклу : ' + i + ' ');
        document.write('поточний крок циклу : ' + i + ' ');
    }
}
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

for (let i = 0; i < 100; i++) {
    if(i % 2 === 1){
        console.log('поточний крок циклу : ' + i + ' ');
        document.write('поточний крок циклу : ' + i + ' ');
    }
}






