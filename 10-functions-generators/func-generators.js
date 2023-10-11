// Основные структуры данных

// Массив (Array)
// Именно на массивах основаны многие другие структуры данных: списки, стеки, очереди.
// Массивы бывают одномерные и многомерные
// Применяют: в качестве блоков для более сложных структур данных;
// для хранения несложных данных небольших объёмов;
// Для сортировки данных.


// Связный список (Linked list)
// это группа из узлов. В каждом узле содержатся:
// данные;
// указатель или ссылка на следующий узел;
// в некоторых списках — ещё и ссылка на предыдущий узел.
// Применяют: для построения более сложных структур данных;
// для реализации файловых систем;
// для формирования хэш-таблиц;
// для выделения памяти в динамических структурах данных.


// Стек (Stack)
// Эта структура данных позволяет добавлять и удалять элементы только из начала. 
// Она работает по принципу LIFO — Last In, First Out (англ. «последним пришёл — первым ушёл»).
// Последний добавленный в стек элемент должен будет покинуть его раньше остальных.
// Применяют: для реализации рекурсии;
// для временного хранения данных, например истории запросов или изменений.


// Очередь (Queue)
// В отличие от стека работает по принципу FIFO — First In, First Out (англ. «первым пришёл — первым 
// ушёл»). Данные добавляют в конец, а извлекают из начала.
// Применяют: для реализации очередей, например на доступ к определённому ресурсу;
// для управления потоками в многопоточных средах.


// Коллекции. Map и Set
// Map - это коллекция, которая хранит данные в виде пар ключ-значение. При этом ключ может быть любого типа
// (включая объекты и функции), а значение — любого типа данных (примитивы, объекты и функции). Map сохраняет порядок 
// добавления элементов, и предоставляет методы для добавления, удаления и получения элементов по ключу.

// new Map() // – создаёт коллекцию.
// map.set(key, value) – записывает по ключу key значение value
// map.get(key) – возвращает значение по ключу или undefined, если ключ key отсутствует.
// map.has(key) – возвращает true, если ключ key присутствует в коллекции, иначе false.
// map.delete(key) – удаляет элемент по ключу key.
// map.clear() – очищает коллекцию от всех элементов.
// map.size – возвращает текущее количество элементов.


// Пример использования Map:
const map = new Map();
// добавляем элементы в Map
map.set('key1', 'value1');
map.set('key2', 'value2');
map.set(3, [1, 2, 3]);
console.log(map.keys()); // возвращает Итератор
// получаем элементы из Map
console.log(map.get('key1')); // 'value1'
console.log(map.get(3)); // [1, 2, 3]
// удаляем элемент из Map
map.delete('key2');
// проверяем наличие элемента в Map
console.log(map.has('key2')); // false
// перебираем элементы Map
map.forEach((value, key) => {
    console.log(`${key}: ${value}`);
});
// выводим количество элементов Map
console.log(map.size); // 2

let recipeMap = new Map([
    ["огурец", 500],
    ["помидор", 350],
    ["лук",    50]
]);

// перебор по ключам (овощи)
for (let vegetable of recipeMap.keys()) {
    alert(vegetable); // огурец, помидор, лук
}

// перебор по значениям (числа)
for (let amount of recipeMap.values()) {
    alert(amount); // 500, 350, 50
}

// перебор по элементам в формате [ключ, значение]
for (let entry of recipeMap) { // то же самое, что и recipeMap.entries()
    alert(entry); // огурец,500 (и так далее)
}


// Set - это коллекция, которая хранит набор уникальных значений любого типа (примитивы, объекты и функции).
// Set также сохраняет порядок добавления элементов, и предоставляет методы для добавления, удаления и проверки наличия 
// элементов.

// new Set(iterable) – создаёт Set, и если в качестве аргумента был предоставлен итерируемый объект (обычно это массив), 
// то копирует его значения в новый Set.
// set.add(value) – добавляет значение (если оно уже есть, то ничего не делает), возвращает тот же объект set.
// set.delete(value) – удаляет значение, возвращает true если value было в множестве на момент вызова, иначе false.
// set.has(value) – возвращает true, если значение присутствует в множестве, иначе false.
// set.clear() – удаляет все имеющиеся значения.
// set.size – возвращает количество элементов в множестве.


// Пример использования Set:
const set = new Set([1, 2, 3, 3]);

// добавляем элементы в Set
set.add(1);
console.log(set);
set.add('hello');
set.add({name: 'John', age: 30});
// проверяем наличие элемента в Set
console.log(set.has(1)); // true
// удаляем элемент из Set
set.delete('hello');
// перебираем элементы Set
set.forEach((value) => {
    console.log(value);
});
// выводим количество элементов Set
console.log(set.size); // 2

const numbers = [-1, 3, 9, -9, 100, -100, 100, 100];
const newSet = new Set(numbers); 
console.log(newSet); // => Set(6) { -1, 3, 9, -9, 100, -100 }


// Двоичное дерево поиска (Binary search tree)
// Дерево — это структура, данные в которой лежат в узлах. У каждого узла могут быть один или 
// несколько дочерних и только один родитель, то есть они расходятся, как ветви дерева.
// Применение:
// для быстрого поиска данных;
// для хранения данных в отсортированном виде с возможностью быстро их добавлять и удалять.


// Каррирование
// Каррирование - это процесс преобразования функции с несколькими аргументами в последовательность функций, каждая из 
// которых принимает только один аргумент.

// В JavaScript это может быть использовано, чтобы создать новые функции с более удобным и гибким функционалом, который
// может быть легко скомбинирован и переиспользован.
// Вот пример функции, которая складывает два числа: 
function add(x, y) {
    return x + y;
}

add(1, 2)
add(1)(2)

// Мы можем сконвертировать ее в каррированную версию следующим образом:

function add(x) {
    [[x]]
    return function (y) {
        return x + y;
    }
}
let aa = add(2)
aa(2)

// Но каррирование, это не  ”изменение самой функции”, поэтому правильней будет сделать так:
function add(x, y) {
    return x + y;
}

const curryAdd = (fn) => {

//[]
    return function (x) {
        []
        return function (y) {
            []
            return fn(x, y)
        }
    }
}
let acc = curryAdd(add)
let discount = acc(10)
let newD= acc(30)
discount(300)

console.log(curryAdd(add)(2)(3));

// Мы создаем новую функцию curryAdd , которая имеет один параметр - функцию которую нужно каррировать.
// Таким образом, каррирование позволяет создавать более гибкие функции, которые могут быть переиспользованы и 
// скомбинированы для создания новых функций с более удобным интерфейсом.

// Еще один пример каррирования 🫣 Попробуй разобраться в нем.
const multiply = (a, b, c) => a * b * c;
const curry = (fn, ...args) => {
    [[fn]]
    return (...newArgs) => {
        const allArgs = [...args, ...newArgs];
        if (allArgs.length >= fn.length) {
            return fn(...allArgs);
        } else {
            return curry(fn, ...allArgs);
        }
    };
};
const curriedMultiply = curry(multiply);
console.log(curriedMultiply(2, 3, 4)); // 24
console.log(curriedMultiply(2)(3, 4)); // 24
console.log(curriedMultiply(2)(3)(4)); // 24


//Генераторы, итераторы
//Итератор - интерфейс с методом next и признаком done

//Перебираемые (или итерируемые) объекты – это обобщение массивов.
// Концепция, которая позволяет использовать любой объект в цикле for..of.
//массивы, строки

let newObject = {
    start: 1,
    end: 10,
}

// for (let key of newObject) {
//     console.log(key)
// }
// console.log(newObject)


// 1. вызов for..of сначала вызывает эту функцию
newObject[Symbol.iterator] = function () {

    // ...она возвращает объект итератора:
    // 2. Далее, for..of работает только с этим итератором, запрашивая у него новые значения

    return {
        current: this.start,
        last: this.end,
        // 3. next() вызывается на каждой итерации цикла for..of
        next() {
            // 4. он должен вернуть значение в виде объекта {done:.., value :...}
            if (this.current <= this.last) {
                return {done: false, value: this.current++};
            } else {
                return {done: true};
            }
        }
    };
}
for (let num of newObject) {
    console.log(num)
}
//объект, так называемый «итератор», создаётся вызовом range[Symbol.iterator](), и именно его next() генерирует значения.
console.log(newObject)
//newObject.next
console.log(newObject[Symbol.iterator]().next())



let range = {
    from: 1,
    to: 5,

    [Symbol.iterator]() {
        this.current = this.from;
        return this;
    },

    next() {
        if (this.current <= this.to) {
            return { done: false, value: this.current++ };
        } else {
            return { done: true };
        }
    }
};

for (let num of range) {
    console.log(num);
}



//Нельзя использовать в двух параллельных for of, т.к. одно значение current
console.log(range)
console.log(range.next())

//Бесконечные итерации при использовании для Infinity, остановить через break
//Последовательность случайных чисел


//for of работает для строк, но процесс не контролируемый
let str = "Hello"

let iterator = str[Symbol.iterator]()
console.log(iterator.next())


while (true) {
    let result = iterator.next();
    if (result.done) break;
    console.log(result.value); // выводит символы один за другим
}

//можем добавлять логики нашей итерации


let arrX = [1,2,3,4,5]
let iteratorX = arrX[Symbol.iterator]()
iteratorX.next()
console.log(iteratorX.next())
console.log(iteratorX.next())




function* generateSequence() {
    yield 1;
    yield 2;
    yield 3;
}
//генераторы являются перебираемыми объектами
//return => object/generator

let a = generateSequence()
console.log(a)


//next => yield

console.log(a.next())
console.log(a.next())
console.log(a.next())
console.log(a.next())



function* generateSequence67() {
    yield 1;
    yield 2;
    yield 3;
}

let a67 = generateSequence67()
console.log(a.next())
console.log(a.return())


function* generateSequence2() {
    yield 1;
    yield 2;
    return 3;
}

let b1 = generateSequence()
let b2 = generateSequence2()

for (let key of b1) {
    console.log(key)
}
for (let key of b2) {
    console.log(key)
}

let arr = ["Yes", ...generateSequence()]
console.log(arr)




let range1 = {
    from: 1,
    to: 5,

    *[Symbol.iterator]() { // краткая запись для [Symbol.iterator]: function*()
        for(let value = this.from; value <= this.to; value++) {
            yield value;
        }
    }
};
console.log(range1)


function* generateSequenceX(start, end) {
    for (let i = start; i <= end; i++) yield i;
}

let aaa = generateSequenceX(1, 100)

console.log(aaa)

console.log(aaa.next())



function* generateSequence1(start, end) {
    for (let i = start; i <= end; i++) yield i;
}

function* generatePasswordCodes() {

    // 0..9
    yield* generateSequence1(48, 57);

    // A..Z
    yield* generateSequence1(65, 90);

    // a..z
    yield* generateSequence1(97, 122);

}

let newStr = '';

for(let code of generatePasswordCodes()) {
    newStr += String.fromCharCode(code);
}
console.log(newStr); // 0..9A..Za..z



function* generateAlphaNum() {

    // yield* generateSequence(48, 57);
    for (let i = 48; i <= 57; i++) yield i;

    // yield* generateSequence(65, 90);
    for (let i = 65; i <= 90; i++) yield i;

    // yield* generateSequence(97, 122);
    for (let i = 97; i <= 122; i++) yield i;

}

let newString = '';

for(let code of generateAlphaNum()) {
    newString += String.fromCharCode(code);
}

console.log(newString);





function* gen() {
    // Передаём вопрос во внешний код и ожидаем ответа
    let result = yield "2 + 2 = ?"; // (*)

    console.log(result)
}

let generatorX = gen();

let question = generatorX.next().value; // <-- yield возвращает значение
console.log(question)

console.log(generatorX.next(100));


function* genX1() {
    let value = yield 5;

    yield 20 + value
}

let generatorZ1 = genX1();

console.log(generatorZ1.next() ); // 5

console.log( generatorZ1.next(4) ); // 24

console.log(generatorZ1.next()); // undefined



function* genX() {
    let ask1 = yield "2 + 2 = ?";

    console.log(ask1); // 4

    let ask2 = yield "3 * 3 = ?"

    console.log(ask2); // 9
}

let generatorZ = genX();

console.log(generatorZ.next() ); // "2 + 2 = ?"

console.log( generatorZ.next(4) ); // "3 * 3 = ?"

console.log(generatorZ.next(9)); // true




function* gen123() {
    try {
        let result = yield "2 + 2 = ?"; // (1)

        console.log("Выполнение программы не дойдёт до этой строки, потому что выше возникнет исключение");
    } catch(e) {
        console.log(e); // покажет ошибку
    }
}

let generator123 = gen123();

let question123 = generator123.next().value;

generator123.throw(new Error("Ответ не найден в моей базе данных")); // (2)




function* countGenerator(number) {
    let count = number
    while (true) {
        yield count = count  * 16807 % 2147483647
    }
}

const generator999 = countGenerator(1);

console.log(generator999.next().value);
console.log(generator999.next().value);
console.log(generator999.next().value);
console.log(generator999.next().value);
console.log(generator999.next().value);



//Symbol.asyncIterator
//next() => promise
//for await (let item of iterable)



let range23 = {
    from: 1,
    to: 5,

    // for await..of вызывает этот метод один раз в самом начале
    [Symbol.asyncIterator]() { // (1)
        // ...возвращает объект-итератор:
        // далее for await..of работает только с этим объектом,
        // запрашивая у него следующие значения вызовом next()
        return {
            current: this.from,
            last: this.to,

            // next() вызывается на каждой итерации цикла for await..of
            // метод next может быть и не async но должен возвращать промис
            async next() { // (2)
                // должен возвращать значение как объект {done:.., value :...}
                // (автоматически оборачивается в промис с помощью async)

                // можно использовать await внутри для асинхронности:
                await new Promise(resolve => setTimeout(resolve, 1000)); // (3)

                if (this.current <= this.last) {
                    return { done: false, value: this.current++ };
                } else {
                    return { done: true };
                }
            }
        };
    }
};

//происходит вызов [Symbol.asyncIterator]() и последующие методы next()

(async () => {

    for await (let value of range23) { // (4)
        console.log(value); // 1,2,3,4,5
    }

})()


async function* generateSequence12(start, end) {

    for (let i = start; i <= end; i++) {

        // ура, можно использовать await!
        await new Promise(resolve => setTimeout(resolve, 1000));

        yield i;
    }

}

(async () => {

    let generator = generateSequence12(1, 5);
    //метод next() теперь асинхронен
    for await (let value of generator) {
        console.log(value); // 1, потом 2, потом 3, потом 4, потом 5
    }

})();

let asyncGen = generateSequence12(1,3)
console.log(await asyncGen.next())
console.log(await asyncGen.next())
console.log(await asyncGen.next())


let rangeT = {
    from: 1,
    to: 5,

    *[Symbol.iterator]() { // сокращение для [Symbol.iterator]: function*()
        for(let value = this.from; value <= this.to; value++) {
            yield value;
        }
    }
};

for(let value of rangeT) {
    console.log(value); // 1, потом 2, потом 3, потом 4, потом 5
}



let rangeAsync = {
    from: 1,
    to: 5,

    async *[Symbol.asyncIterator]() { // то же, что и [Symbol.asyncIterator]: async function*()
        for(let value = this.from; value <= this.to; value++) {

            // пауза между значениями, ожидание
            await new Promise(resolve => setTimeout(resolve, 1000));

            yield value;
        }
    }
};

(async () => {

    for await (let value of rangeAsync) {
        console.log(value); // 1, потом 2, потом 3, потом 4, потом 5
    }

})();


//Нужно сделать функцию чтобы она делала запрос
// , получала ответ в виде кол-ва пользователей и делала новый запрос по адресу, что возвращается

let repo = 'javascript-tutorial/en.javascript.info'; // репозиторий на GitHub, откуда брать коммиты

for await (let commit of fetchCommits(repo)) {
    // обработка коммитов
}


async function* fetchCommits(repo) {
    let url = `https://api.github.com/repos/${repo}/commits`;

    while (url) {
        const response = await fetch(url, { // (1)
            headers: {'User-Agent': 'Our script'}, // GitHub требует заголовок user-agent
        });

        const body = await response.json(); // (2) ответ в формате JSON (массив коммитов)

        // (3) Ссылка на следующую страницу находится в заголовках, извлекаем её
        let nextPage = response.headers.get('Link').match(/<(.*?)>; rel="next"/);
        nextPage = nextPage && nextPage[1];

        url = nextPage;

        for(let commit of body) { // (4) вернуть коммиты один за другим, до окончания страницы
            yield commit;
        }
    }
}

(async () => {

    let count = 0;

    for await (const commit of fetchCommits('javascript-tutorial/en.javascript.info')) {

        console.log(commit.author.login);

        if (++count === 100) { // остановимся на 100 коммитах
            break;
        }
    }

})();

// Функции-генераторы


/*------- Задача №1 ------- */
//Дан объект. С помощью функции-генератора создайте его итератор, переберите элементы этого объекта с помощью цикла for-of.
//Решение
let obj = {
    a: 1,
    b: 2,
    c: 3
};

function* generator(obj) {
    for (let key in obj) {
        yield obj[key];
    }
}

let iterator = generator(obj);

for (let elem of iterator) {
    console.log(elem);
}


/*------- Задача №2 -------*/
//Дан массив с числами. С помощью функции-генератора создайте итератор, каждый вызов которого будет возвращать следующее число Фибоначчи.
//Решение
let arr = [1, 2];
let temp = 0;

function* generator(arr) {
    for (let i = 0; i < arr.length; i++) {
        temp = arr[i] + arr[i + 1];
        arr.push(temp);
        yield temp;
    }
}


let next = generator(arr);

console.log(next.next().value);
console.log(next.next().value);
console.log(next.next().value);


function twiceAsOld(dadYearsOld, sonYearsOld) {
    // your code here
}
console.log(twiceAsOld(36,7)); // 22

Promise.resolve("Diana").then((res) => {
    console.log(res);
    return new Error("")
}).catch(err => {
    console.log(err);
}).then(res => {
    console.log("Illya");
})

const newArr = [Promise.resolve("1"), Promise.resolve("2"), Promise.reject("error")];

setTimeout(() => {
  Promise.race(newArr)
    .then(res => console.log(res))
    .catch(err => console.log(err));
}, 6000);

// const customFilter = (callBack) => {
//     const newArr = []

//     for(let i = 0; i < this.length; i++) {
//         if (callBack(this[i])) {
//             newArr.push(this[i])
//         }
//     }
//     return newArr
// }

Array.prototype.customFilter = function(callBack) {
    const newArr = []

    for(let i = 0; i < this.length; i++) {
        if (callBack(this[i])) {
            newArr.push(this[i])
        }
    }
    return newArr
}


console.log([1, 2, 3].customFilter(el => el > 1));



const arr2 = [1, 1, 1, 1, 2, 2, 2, 3, 3, 4, 4, 5, 6, 6, 6, 6, 7, 8, 8, 8]; // написать функцию, где ключом является значение  {1: 4}

function getObject(arr) {
    const obj = {};

    for (let key of arr) {
        !obj[arr[key]] ? obj[arr[key]] = [] : obj[arr.key].push(key)
    }

    return obj;
}

console.log(getObject(arr2));



// const foo = (arr) => {
//     return arr.map((el, i) => ({name: el, age: 18 + i})).sort((a, b) => b.age - a.age)
// }

// console.log(foo(arrayNames));

const arrayNames = ['Anna', "Sergio", "George", "Yana", "Nick"];

const foo2 = (arr) => {
    const arr2 = [];

    for (let i = 0; i < arr.length; i++) {
       arr2.push({name: arr[i], age: 18 + i})
    }


    return arr2;
}

console.log(foo2(arrayNames));


const tree = {
    value: 3,
    children: [
        {
            value: 1,
            children: null
        },
        {
            value: 2,
            children: null
        },
        {
            value: 1,
            children: [
                {
                    value: 1,
                    children: null
                },
            ]
        },
    ]
}

const recursion = (obj) => {
    
}

const studentList = [
    {name: 'Ivan', age: 18, groupId: 1},
    {name: 'Ignat', age: 18, groupId: 1},
    {name: 'John', age: 18, groupId: 2},
    {name: 'Marina', age: 18, groupId: 2},
    {name: 'Bob', age: 18, groupId: 1},
]

const getObj = (arr) => {
    return arr.reduce((ac, el) => {
        if (el.age > 17) {
            ac[el.groupId] = ac[el.groupId] ? [...ac[el.groupId], el] : [el]
        }
      
        return ac
    }, {})
}

console.log(getObj(studentList));

const obj = {
    name: "Sasha"
}

function GetName() {
    console.log(this.name);
}
 
GetName().call(obj)

