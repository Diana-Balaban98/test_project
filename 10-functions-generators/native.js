//Примитив -> object
// 22.toString()  //true
// 22 .toString() //true
let a = 20
// 22..toString()  //false
// (22).toString()  //true
// "yoyo".g = "yo" //false error

let zxc = new Number(2)

let czx = new Boolean(false)

// {} === true

// сколько действий мы делаем в tresult?
// init tresult
// tresult = 5
let tresult = 20

//string
let obj = {}
obj[{}] = "a"
console.log(a)
alert({})

//Symbol.toPrimitive => string/toString => number/valueOf

//Object.prototype.toString()
//Array.prototype.toString()
//Promise.prototype.toString()

//number, унарный плюс
//{} + []
//value1 - value2
//user1 > user2



// бинарный плюс использует хинт "default", Обычно это number
let total = obj1 + obj2;

// obj == number использует хинт "default"
if (user == 1) { ... };

//Reflect.ownKeys() - получить все ключи объекта, включая символы

let obj = {
    _number:0,
    name:1,
    [Symbol.toPrimitive]() {}
}

let abc = {
    _value: 0,
    valueOf(){
        this._value++
        return this.value
    },
    toString() {
        return 'hey'
    }
}
//toString, valueOf
if (abc == 1 && abc == 2 && abc == 3 && abc == 4) alert(a)

let newObj = {}

newObj[abc] = "yoyo"
console.log(newObj)



//эти методы должны возвращать примитив, а не объект.
//Symbol.toPrimitive этот метод обязан возвращать примитив, иначе будет ошибка.

// Алгоритм преобразования таков:
//
//     Сначала вызывается метод obj[Symbol.toPrimitive](hint), если он существует,
//     В случае, если хинт равен "string"
// происходит попытка вызвать obj.toString() и obj.valueOf(), смотря что есть.
//     В случае, если хинт равен "number" или "default"
// происходит попытка вызвать obj.valueOf() и obj.toString(), смотря что есть.


//счетчик c замыканием
//Callback
//показать как counter в консоли
//реализация со свойством

let b = 6
let makeCounter = () => {
     function counter() {
        counter.count++
    }
    counter.count = 0
    return counter
 }

let getCounter = makeCounter()

getCounter.count = 10
getCounter()



let thunkAC = (x) => (dispatch) => {
    return x
}






let double = (value) => value ** 2

arr.map(function(value) {
    return value **2
})
arr.map(value => value ** 2)
arr.map(double)

let arr = [1,2]
arr.forEach(alert)

const curryAdd = (cb) => {
    return function (x) {
        return function (y) {
           return cb(x, y)
        }
    }
}

const sum = curryAdd((a,b) => a+b)
let res12 = sum(15)
res12(20)

//Полифилы
//ES5
//new Array
Array.prototype.myFilter = (cb) => {
    let arr = []
    for (let i = 0; i <= this.length; i++) {
        if (cb(this[i],i, this) === true) {
            arr.push(this[i])
        }
    }
    return arr
}
let arrzxc = []
arrzxc.myFilter(t => t.id === 15)

Array.prototype.myMap = (cb) => {
    let arr = []
    for (let i = 0; i <= this.length; i++) {
       arr.push(cb(this[i],i,this))
    }
    return arr
}

String.prototype.palindrome = () => {
    let newStr = str.split('').reverse().join('')
    return newStr === this.valueOf()
}

String.prototype.palindrome = () => {
    let newStr = ""
    for (let i = this.length-1; i >= 0; i-- ) {
        newStr += this[i]
    }
    return newStr === this.valueOf()
}



//bind(null,params)
//Частичное применение
//Параметры, аргументы
//Фукнция - объект, есть length, name, можно добавлять свои ключи, методы
function yo(name ="hey", age = 15, city =undefined ) {
    return name + age + city
}

let res = yo.bind(null, 'hey')
console.log(res(15))



//////////
function yes() {
    console.log("yes")

}

function sub(cb) {
    yes = cb
}

function no() {
    console.log("no")
}
yes()
sub(no)

yes() //log?



//params - остаточные параметры
function yoyo(...params) {
    let res = 0
    for (let value of params) {
        res += value
    }
    return res
}

console.log(yoyo(1,2,3,5,6,7))

function yoyo2(value1, value2, ...params) {

}

console.log(yoyo2(1,2,3,5,6,7))

//чему будет d ? будет работать?
function hello1(a, b ,c, d) {
    console.log(a, b, c, d)}
hello1(...[1,2,3])


//проблема с arguments, все что передаешь летит в arguments, хоть и не указано в аргументах
//это и не объект как обычно принято, есть Symbol.iterator, есть length, и не массив, т.к. нет его методов

function yo2(a= 0) {
    console.log(a)
    console.log(arguments)
    console.log([].join.call(arguments)) //заимствование метода
}
yo2(1,2,3)



//Декораторы

//1 Cache
function slow(x) {
    // здесь могут быть ресурсоёмкие вычисления
    alert(`Called with ${x}`);
    return x;
}

function cachingDecorator(func) {
    let cache = new Map();

    return function(x) {
        if (cache.has(x)) {    // если кеш содержит такой x,
            return cache.get(x); // читаем из него результат
        }

        let result = func(x); // иначе, вызываем функцию

        cache.set(x, result); // и кешируем (запоминаем) результат
        return result;
    };
}

slow = cachingDecorator(slow);

alert( slow(1) ); // slow(1) кешируем
alert( "Again: " + slow(1) ); // возвращаем из кеша

alert( slow(2) ); // slow(2) кешируем
alert( "Again: " + slow(2) ); // возвращаем из кеша

//2 Spy
function spy(func) {

    function wrapper(...args) {
        // мы используем ...args вместо arguments для хранения "реального" массива в wrapper.calls
        wrapper.calls.push(args);
        return func.apply(this, args);
    }

    wrapper.calls = [];

    return wrapper;
}

function work(a, b) {
    alert( a + b ); // произвольная функция или метод
}

work = spy(work);

work(1, 2); // 3
work(4, 5); // 9

for (let args of work.calls) {
    alert( 'call:' + args.join() ); // "call:1,2", "call:4,5"
}

//3  Delay
function delay(f, ms) {

    return function() {
        setTimeout(() => f.apply(this, arguments), ms);
    };

}

let f1000 = delay(alert, 1000);

f1000("test"); // показывает "test" после 1000 мс



//4 Debounce
function debounce(func, delay) {
    let timeoutId;
    return function () {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(this, arguments);
        }, delay);
    };
}

const debouncedFunction = debounce(() => {
    console.log("Debounced function executed");
}, 1000);


//5 Throttling
function throttle(func, delay) {
    let canRun = true;
    return function () {
        if (canRun) {
            func.apply(this, arguments);
            canRun = false;
            setTimeout(() => {
                canRun = true;
            }, delay);
        }
    };
}


const throttledFunction = throttle(() => {
    console.log("Throttled function executed");
}, 1000);


//Функция предикат

//Функции откуда пошли

//Что такое чистая функция? Зачем чистые функции?


//Чем отличается императивный код от декларативного?


//Что такое композиция?


//Что значит - идемпотентность?

//Для чего мы пишем функции?

//Функция фабрика ?

//Функция первого порядка?

//Функция высшего порядка?

//Арность функции?

//Лямбда функция

//Функция/процедура/метод?

function pop(x) {
    return x * x
}

function log(x) {
    console.log(x)
}

//Ссылочная прозрачность?

//Рекурсия
//Хвостовая

//Аргумент . параметры
function factorial(n) {
    if (n === 1){
        return 1
    }
    return factorial(n-1) * n
}
factorial(9)
function factorial2(n, total) {
    if (n <= 1 ) {
        return total
    }
    return factorial2(n-1, n* total)
}

 function findSolution(target) {
   function find(current, history) {
     if (current === target) {
     return history;
     } else if (current > target) {
      return null;
     } else {
       return find(current + 5, `(${history} + 5)`) || find(current + 3, `(${history} + 3)`) || find(current * 7, `(${history} * 7)`) || find(current + 7, `(${history} + 7)`);
     }
   }
   return find(1, "1");
 }
findSolution(15)
 //fibonacci

function fibo(n) {
  if (n <= 1) {
      return n
  }

  return fibo(n - 1)  + fibo(n -2)
}
//fibo(10)

//func.call(null,args)
//Internal method - [[Call]]

//Objects
// writable – если true, свойство можно изменить, иначе оно только для чтения.
// enumerable – если true, свойство перечисляется в циклах, в противном случае циклы его игнорируют.
// configurable – если true, свойство можно удалить, а эти атрибуты можно изменять, иначе этого делать нельзя.
//если configurable false, то мы не только не можем удалить, но и изменить другие дескрипторы

//Object.getOwnPropertyDescriptor(obj, propertyName); - получить дескриптор

//Object.defineProperty(obj, propertyName, descriptor) - изменить дескриптор

const user = {
    name: "Ivan",
    get userName() {
        return this.name
    },
    set userName(newName) {
        this.name = newName
    }
}

//user.userName
//user.userName = 'John"

//если мы хотим получить эти флаги, то необходимо указать их в ручную и прописать true
Object.defineProperty(user, "age", {
    value: "20"
});

Object.getOwnPropertyDescriptor(user, "age")

//Object.defineProperties(user, {
//   name: { value: "John", writable: false },
//   surname: { value: "Smith", writable: false },
//   // ...
// });

// Object.preventExtensions(obj)
// Запрещает добавлять новые свойства в объект.
// Object.seal(obj)
// Запрещает добавлять/удалять свойства. Устанавливает configurable: false для всех существующих свойств.
// Object.freeze(obj)
// Запрещает добавлять/удалять/изменять свойства. Устанавливает configurable: false, writable: false для всех существующих свойств.
//     А также есть методы для их проверки:
//
//     Object.isExtensible(obj)
// Возвращает false, если добавление свойств запрещено, иначе true.
// Object.isSealed(obj)
// Возвращает true, если добавление/удаление свойств запрещено и для всех существующих свойств установлено configurable: false.
// Object.isFrozen(obj)
// Возвращает true, если добавление/удаление/изменение свойств запрещено, и для всех текущих свойств установлено configurable: false, writable: false.

//веселье
// [2] * ['2']
// true + false
// '' + 1
// true + []
// {}-[]
// ({}-[])
// {}+[]
// ({}+[])
// []+{}
// []-{}
// !![1]
//undefined + 2
//undefined + "2"

// [...10] === [0,1,2,3,4,5,6,7,8,9,10]


const randomColor = () => {
    const randomNum = () => Math.floor(Math.random() * 255)

    return `rgb(${randomNum()} ${randomNum()} ${randomNum()})`
}

console.log(randomColor());

function get(obj, path) {
    
}

const obj = {
    a: {
        b: {
            c: 'd'
        },
        e: 'f'
    }
}

console.log(get(obj, 'a.b'));