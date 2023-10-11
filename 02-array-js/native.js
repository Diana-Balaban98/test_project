// Массив
// Массив - структура данных, которая хранит в себе упорядоченные коллекции различных значений. 


// Какого типа данных массив?
// object


// Способы создания массива?
// используя квадратные скобки:
// const usersArray = [];
// // используя конструктор Array():
const fruitsArray = new Array(7);
console.log(fruitsArray);


// Длина массива
//  С помощью свойства length.
//  Оно автоматически обновляет изменения массива.
//  Возвращает общее количество элементов, содержащихся в массиве.
//  Последний индекс всегда меньше длины массива на единицу.

// const newArr = [1, 2, 3, 4, 5];
// console.log(newArr.length); // 5


// Как "достучаться" до элемента массива?
// Мы можем получить элемент, указав его номер индекса в квадратных скобках.
// const newArr1 = ["Яблоко", "Апельсин", "Дыня"];
// console.log(newArr1[1]); // "Апельсин"
// // // Также используя метод at(). Удобный, так как принимает отрицательные индексы. 
// const newArr2 = ["Яблоко", "Апельсин", "Дыня"];
// console.log(newArr2.at(-1));
// console.log(newArr2[newArr2.length - 1]);
// "Яблоко"


// Как изменить массив?
// Используя квадратные скобки, где указан индекс элемента, который нужно добавить или заменить содержимое массива:
// const newArr3 = [1, 2, 3, 4, 5];
// newArr3[5] = 6;
// newArr3[0] = "1";
// console.log(newArr3); // [ '1', 2, 3, 4, 5, 6 ]
// // // Используя сеттер свойства length массив можно обрезать:
// const newArr4 = [1, 2, 3, 4, 5];
// newArr4.length = 3;
// console.log(newArr4); // [ 1, 2, 3 ]
// // С помощью специальных методов массива: .push(), .pop(), .shift(), .unshift() и т.д.


// Что может храниться в массиве?
// В массиве могут храниться элементы любого типа.
const newArr5 = ["fruit", 15, true, null, undefined, {name: "John"}, function() {console.log("Hi")}];
// const [counter, setCounter] = useState(0)


// Как перебрать массив?
// С помощью цикла for по цифровым индексам. 
// const newArr6 = [1, 2, 3];
// for (let i = 0; i < newArr6.length; i++) {
//     console.log(newArr6[i]); // 1
//                            // 2 
//                            // 3 
// }

// С помощью цикла for...of. Не предоставляет доступа к текущему элементу, только к его значению.
const newArr7 = ["pen", "bug", "pencil", "book"];

// for (let key of newArr7) {
//     console.log(key); // pen
//                         //bug
//                         //pencil
//                         // book
// }

// С помощью цикла for...in. Не следует использовать этот цикл для перебора массивов.
const newArr8 = ["pen", "bug", "pencil", "book"];

for (let key in newArr8) {
    console.log(`index: ${key}, value: ${newArr8[key]}`);
}     



// delete в массивах
// Оператор delete удаляет элементы массива.
const newArr9 = ["a", "b", "c"];
delete newArr9[0];
console.log(newArr9.length); // 3
console.log(newArr9); // [ <1 empty item>, 'b', 'c' ]
newArr9[0]; // undefined


// Array.isArray()?
// Array.isArray() проверяет является ли arr массивом. 
// Возвращает true, если массив, иначе false.
console.log(Array.isArray([])); // true
console.log(Array.isArray(0)); // false 
console.log(Array.isArray('str')); // false


// Массив - ссылочный тип данных.
const newArr10 = [];
const newArr11 = newArr10
console.log(newArr11 === newArr10);

const newArr12 = []
console.log(newArr12 === newArr10);

// concat()
// Объединяет два или более массивов и возвращает новый массив. 
const newArray = ['a', 'b', 'c'];
// let newArray1 = newArray.concat('d', ['e', 'i']);
// console.log(newArray1); // [ 'a', 'b', 'c', 'd', 'e', 'i' ]

// const newArray2 = [...newArray, ...newArray1] // копия с помощью spraed-оператора
// console.log(newArray2);


// Мутабельные методы (т.е меняют исходный массив) - pop, push, shift, unshift, sort, fill, reverse, splice.

// pop() / .push()
// Метод .push() добавляет элемент в конец массива.
// Возвращает значение количества элементов в массиве, соответствующее длине массива.
const newArray3 = [1, 2];
console.log(newArray3.push(3, 4)); // 4
console.log(newArray3); // [ 1, 2, 3, 4 ]

// Метод .pop() удаляет последний элемент в массиве, т.е изменяет длину массива.
// Возвращает значение удаленного последнего элемента массива.
const newArray4 = [2, 3, 1];
console.log(newArray4.pop()); // 1
console.log(newArray4); // [ 2, 3 ]


// shift() / .unshift()
// Метод .unshift() добавляет элемент в начало массива.
// Возвращает значение, соответствующее длине массива.
const newArray5 = [2, 3];
console.log(newArray5.unshift(1)); // 3
console.log(newArray5); // [ 1, 2, 3 ]

// Метод .shift() удаляет первый элемент в массиве, т.е изменяет длину массива.
// Возвращает значение удаленного первого элемента массива.
const newArray6 = [2, 3, 1];
console.log(newArray6.shift()); // 2
console.log(newArray6); // [ 3, 1]

// splice()
// Метод .splice() - универсальный метод для работы с массивами: добавляет, удаляет, заменяет элементы.
// Синтаксис: arr.splice(откуда удаляем, сколько эл. удаляем, вставить элемент, вставить элемент...)

// 1 вариант
const newDataArray = [1, 2, 3, 4, 5];
newDataArray.splice(1, 3); // удаляет с 1 индекса 3 элемента
console.log(newDataArray); // [ 1, 5 ]

// 2  вариант
const newDataArray1 = ["a", "b", "c", "d", "e"];
newDataArray1.splice(2, 1, "q", "w"); // удаляем элемент с индексом 2, а вместо него вставим 2 новых элемента
console.log(newDataArray1); // [ 'a', 'b', 'q', 'w', 'd', 'e' ]

// 3  вариант
const newDataArray2 = [1, 2, 3, 4, 5];
let newDataArray3 = newDataArray2.splice(1, 3); // удаляет с 1 индекса 3 элемента
console.log(newDataArray3); // [ 2, 3, 4 ] // выводим массив удаленных элементов
console.log(newDataArray2);

// 4  вариант
const newDataArray4 = [1, 2, 3, 4, 5];
newDataArray4.splice(3, 0, 6, 7, 8); // удаляет с 1 индекса 3 элемента
console.log(newDataArray4); //   [ 1, 2, 3, 4, 5, 6, 7, 8 ]

// 5 вариант
const newDataArray5 = [1, 2, 3, 4, 5];
newDataArray5.splice(-1, 1);
console.log(newDataArray5); // [ 1, 2, 3, 4 ]

// reverse()
// Переворачивает порядок элементов массива.
const newDataArray6 = [1, 2, 3, 4, 5, 6];
const newDataArray7 = newDataArray6.reverse();
console.log(newDataArray6); // [ 6, 5, 4, 3, 2, 1 ]
console.log(newDataArray6, newDataArray6 === newDataArray7); // [ 6, 5, 4, 3, 2, 1 ] true


// fill()
// Заполняет все элементы массива заданным значением.
new Array(5)
const newDataArray8 = [1, 2, 3, 4];
console.log(newDataArray8.fill(0)); // [ 0, 0, 0, 0 ]
const newDataArray9 = [1, 2, 3, 4];
console.log(newDataArray9.fill(0, 1));
 // [ 1, 2, 0, 0 ]


// sort()
//  Метод позволяет отсортировать массив путём преобразования его элементов в строки и сравнения этих строк в 
//  порядке следования кодовых символов Unicode (сортирует массив по алфавиту).
//  Параметры: коллбэк функция с a (текущий эл.) и b (следующий эл.)
const testArray = ['a', 'g', 'e', 'q', 'yh', 'j', 'x']; // [ 'a', 'e', 'g', 'j', 'q', 'x', 'yh']
console.log(testArray.sort()); // // [ 'a', 'e', 'g', 'j', 'q', 'x', 'yh']

const testArray1 = [1, -2, 323, 2, 90, 1000];
const testArray2 = testArray1.sort((a, b) => b - a.name);
console.log(testArray2); // [ -2, 1, 2, 90, 323, 1000 ]
console.log(testArray2, testArray2 === testArray1); // [ -2, 1, 2, 90, 323, 1000 ] true

// Иммутабельные методы массивов:

// slice()
// Метод вырезает и возвращает новый массив, в который копирует элементы, начиная с индекса start, и до end
// (не включая end).
// Оба индекса могут быть отрицательными (отсчёт с конца массива).

const testArray3 = ['t', 'e', 's', 't'];
console.log(testArray3.slice(1, 3)); // [ 'e', 's' ]
console.log(testArray3.slice(-2)); // [ 's', 't' ]

// Метод можно вызывать без аргументов arr.slice() - создаёт копию массива arr.

const testArray4 = [1, 2, 3];
let testArray5 = testArray4.slice();
console.log(testArray4); // [ 1, 2, 3 ]
console.log(testArray5, testArray4 === testArray5); // [ 1, 2, 3 ] false


// indexOf(), includes()
// Метод ищет в массиве элемент и возвращает индекс первого вхождения указанного элемента в массиве, или -1, если 
// элемент не найден.
// При указании отрицательного значения поиск начинается с заданной позиции (с конца массива).
const testArray6 = ['зелёный', 'жёлтый', 'красный'];
console.log(testArray6.indexOf('зелёный', 1)); // -1
console.log(testArray6.indexOf('зелёный')); // 0
console.log(testArray6.indexOf('красный', -1)); // 2

// includes() 
// Метод ищет в массиве элемент и возвращает true, если массив содержит указанный элемент, иначе возвращает false.
// Можно использовать отрицательные значения. 

const testArray7 = ['зелёный', 'жёлтый', 'красный'];
console.log(testArray7.includes('красный')); // true
console.log(testArray7.includes('чёрный')); // false
console.log(testArray7.includes('зелёный', 1)); // false


// split(), join()
//  Метод разбивает строку на массив по заданному разделителю.

const str = 'Ваня, Иван, Оля';
const testArray8 = str.split(',');
const testArray9 = str.split('');
console.log(testArray8); // [ 'Ваня', ' Иван', ' Оля' ]
console.log(testArray9); // ['В', 'а', 'н', 'я', ',', ' ', 'И', 'в', 'а', 'н', ',', ' ','О', 'л', 'я']


// join() 
// Метод объединяет все элементы массива в строку.
const testArr = [1, 2, 3, 4, 5];
console.log(testArr.join()); // '1,2,3,4,5'
console.log(testArr.join("")); // '12345'
console.log(testArr.join('-')); // '1-2-3-4-5'
console.log(testArr.join(" "));// '1 2 3 4 5'


// find()
// Метод возвращает первый элемент в массиве, удовлетворяющий условию,заданному в указанной функции, или undefined, 
// если такой элемент не найден.
const testArr1 = [{id: 1}, {id: 2}, {id: 3}];
const testArr2 = testArr1.find(el => el.id === 4);
console.log(testArr1); // [ { id: 1 }, { id: 2 }, { id: 3 } ]
console.log(testArr2, testArr2 === testArr1); // { id: 2 } false


// map()
// Метод используется для изменения элементов массива.
// Метод вызывает функцию для каждого элемента массива.
// Возвращает новый массив.
const testArr3 = ['Ваня', 'Иван', 'Оля'];
const testArr4 = testArr3.map((el) => el[0]);
console.log(testArr4); // [ 'В', 'И', 'О' ]


// filter()
//  Метод используется для поиска в массиве элементов, на которых функция-коллбэк вернет true.
//  Возвращает массив из найденных элементов, если ничего не найдено, то возвращает пустой массив.
const testArr5 = [{id: 1}, {id: 2}, {id: 3}];
const testArr6 = testArr5.filter(el => el.id < 3);
console.log(testArr6); // [ { id: 1 }, { id: 2 }]

// forEach()
// Метод выполняет указанную функцию один раз для каждого элемента массива.
//  Ничего не возвращает (undefined)
const testArr7 = ["Sasha", "Pasha", "Slava"];
testArr7.forEach(el => console.log(el)); // Sasha Pasha Slava
const testArr8 = [2, undefined, false, 100, "", 1, 0, true, 90, NaN];
const testArr9 = [];
testArr8.forEach(el => {
    if (el == true ) {
        testArr9.push(el)
    }
});
console.log(testArr9);


// reduce()
// Метод используется для вычисления какого-либо единого значения.
// Параметры: previousValue (результат предыдущего вызова этой функции, равен initial при первом вызове, если
// он передан); item (очередной элемент массива); index (его индекс); array (сам массив).
// Функция применяется по очереди ко всем элементам массива и "переносит" свой результат на следующий вызов.
const arrReduce = [1, 2, 3, 4];
const resReduce = arrReduce.reduce((acc, el) => acc + el, 0);
// (acc === 0) + 1
// acc 1 + 2
// acc 3 + 3
// acc 6 + 4 
// return acc == 10
// let y =0
// for (let i = 0; i< arrReduce.length; i++) {
// let y += arrReduce[i]
// }
// return y

console.log(resReduce); // 10
console.log(arrReduce.reduce((ac, el) => ac + el, "")); // "1234"

const numbersReduce = [10, 20, 30, 40];
// Находим максимальное число в массиве с помощью reduce и стрелочной функции
const maxNumbersReduce = numbersReduce.reduce((acc, curr) => acc > curr ? acc : curr, 0);
console.log(maxNumbersReduce); // Выводит 40

// ЗАДАНИЯ:

// const blogs = [
//     {
//         id: 1,
//         title: "Creating a Successful Blog and Monetizing It",
//         name: "BlogMaster",
//         description: "Everything you need to know about starting and promoting your own blog",
//         websiteUrl: "https://blogmaster.com/monetization",
//         theme: "Blogging Tips"
//     },
//     {
//         id: 2,
//         title: "Writing Engaging Articles on Any Topic",
//         name: "WritePro",
//         description: "Secrets to becoming a successful writer",
//         websiteUrl: "https://writepro.com/articles",
//         theme: "Writing Tips"
//     },
//     {
//         id: 3,
//         title: "Promoting Your Blog on Social Media",
//         name: "SocialBoost",
//         description: "Tips for promoting your blog on social media",
//         websiteUrl: "https://socialboost.com/promotion",
//         theme: "Social Media Marketing"
//     },
//     {
//         id: 4,
//         title: "Monetizing Your Blog with Advertising",
//         name: "AdMaster",
//         description: "Everything you need to know about advertising on your blog",
//         websiteUrl: "https://admaster.com/monetization",
//         theme: "Monetization Strategies"
//     },
//     {
//         id: 5,
//         title: "Improving Your Writing Skills and Becoming a Better Writer",
//         name: "WriteBetter",
//         description: "Tips for improving your writing skills",
//         websiteUrl: "https://writebetter.com/writing-skills",
//         theme: "Writing Tips"
//     },
//     {
//         id: 6,
//         title: "Creating Creative Blog Designs",
//         name: "DesignMaster",
//         description: "Secrets to creating creative blog designs",
//         websiteUrl: "https://designmaster.com/creative-designs",
//         theme: "Design Tips"
//     },
//     {
//         id: 7,
//         title: "Attracting More Readers to Your Blog",
//         name: "ReaderBoost",
//         description: "Tips for attracting more readers to your blog",
//         websiteUrl: "https://readerboost.com/readers",
//         theme: "Audience Growth"
//     }
// ];


// map()
// 1. Все блоги создавались в одно время. Добавьте каждому оъекту свойство  createdAt: "2022-01-01"
// let newBlogs =blogs.map(el => ({...el,createdAt: "2022-01-01"}))

// let newBlogs2 =blogs.map(el => {
//     return {...el,createdAt: "2022-01-01"}
// })
// 2. Тимлид сказал, что id должны иметь строковое значение. Поменяй 
// let newBlogs3 = blogs.map(el => ({...el, id: String(el.id)}))
// console.log(newBlogs3);
// 3. У объекта с id: 7 поменялась тематика по ведению блога . Измените theme: "Audience Growth" на 
// // "Blonewgging Tips"
// let newBlogs4 = blogs.map(el => el.id === 7 ? {...el, theme: "Blonewgging Tips"} : el)
// console.log(newBlogs4);

// // filter()  
// // 1. Убрать блоги, у которых id больше пяти.
// let newBlogs5 = blogs.filter(el => el.id > 5) //true

// 2. Убрать блоги, у которых theme - "Writing Tips".
// let newBlogs6 = blogs.filter(el => el.theme !== "Writing Tips")
// // console.log(newBlogs6);
// // 3. Оставить блоги, у которых длина title не превышает 35 символов.
// let newBlogs7 = blogs.filter(el => el.title.length <= 35)
// // 4. Оставить блоги, имя которых начинается на букву "W"
// let newBlogs8 = blogs.filter(el => el.name[0] === "W")

// sort()
// Задание:
// 1. Отсортировать title блогов по алфавиту.
// let newBlogs9 = blogs.sort((a, b) => a.title - b.title)

// 2. Отсортировать блоги в порядке возрастания длины description.
// let newBlogs10 = blogs.sort((a, b) => a.description.length - b.description.length)
// 3. Отсортировать блоги в порядке убывания количества слов в title.
// let newBlogs11 = blogs.sort((a, b) => b.title.split(" ").length - a.title.split(" ").length)
let newBlogs11 = [...blogs].sort((a, b) => b.title.split(" ").length - a.title.split(" ").length)

// const movies = [
//     {
//         title: "The Shawshank Redemption",
//         genre: "Drama",
//         runtime: 142,
//         mainCharacter: "Andy Dufresne"
//     },
//     {
//         title: "The Godfather",
//         genre: "Drama, Crime",
//         runtime: 175,
//         mainCharacter: "Vito Corleone"
//     },
//     {
//         title: "The Dark Knight",
//         genre: "Action, Crime, Drama",
//         runtime: 152,
//         mainCharacter: "Batman"
//     }
// ];

// Задание*: Оставить movie, у которых жанр не содержит слово "Action", и перевернуть порядок следования
// объектов в отфильтрованном массиве.
// const movies2 = movies.filter(el => !el.genre.includes("Action")).reverse()
// console.log(movies2);

const blogs = [
    {
        id: "1",
        title: "Creating a Successful Blog and Monetizing It",
        name: "BlogMaster",
        description: "Everything you need to know about starting and promoting your own blog",
        websiteUrl: "https://blogmaster.com/monetization",
        theme: "Blogging Tips"
    },
    {
        id: 2,
        title: "Writing Engaging Articles on Any Topic",
        name: "WritePro",
        description: "Secrets to becoming a successful writer",
        websiteUrl: "https://writepro.com/articles",
        theme: "Writing Tips"
    },и
    {
        id: 3,
        title: "Promoting Your Blog on Social Media",
        name: "SocialBoost",
        description: "Tips for promoting your blog on social media",
        websiteUrl: "https://socialboost.com/promotion",
        theme: "Social Media Marketing"
    },
    {
        id: 4,
        title: "Monetizing Your Blog with Advertising",
        name: "AdMaster",
        description: "Everything you need to know about advertising on your blog",
        websiteUrl: "https://admaster.com/monetization",
        theme: "Monetization Strategies"
    },
    {
        id: 5,
        title: "Improving Your Writing Skills and Becoming a Better Writer",
        name: "WriteBetter",
        description: "Tips for improving your writing skills",
        websiteUrl: "https://writebetter.com/writing-skills",
        theme: "Writing Tips"
    },
    {
        id: 6,
        title: "Creating Creative Blog Designs",
        name: "DesignMaster",
        description: "Secrets to creating creative blog designs",
        websiteUrl: "https://designmaster.com/creative-designs",
        theme: "Design Tips"
    },
    {
        id: 7,
        title: "Attracting More Readers to Your Blog",
        name: "ReaderBoost",
        description: "Tips for attracting more readers to your blog",
        websiteUrl: "https://readerboost.com/readers",
        theme: "Audience Growth"
    }
];

// some()
// 1. Нужно проверить есть ли объекты, которые имеют title: "Creating Creative Blog Designs"
// console.log(blogs.some(el => el.title === "Creating Creative Blog Designs"));

// every()
// 1. Нужно проверить являются ли наши id - числами.
console.log(blogs.every(el => typeof el.id === "number"));


const compareObjects = (obj1, obj2) => {
    if (Object.keys(obj1) !== Object.keys(obj2)) return false

    for (let key in obj1) {
        if (key === obj2[key]) return true
    }

    return false
}

console.log(compareObjects({a: 1, b: 2}, {a: 1, b: 2}));

