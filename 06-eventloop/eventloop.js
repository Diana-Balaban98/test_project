                                // Event Loop 
// Event Loop - это механизм в JavaScript, который позволяет обрабатывать асинхронный код и 
// управлять порядком выполнения задач в синхронном коде.

// В отличие от синхронного кода, который выполняется по порядку, асинхронный код выполняется в
// фоновом режиме, не блокируя поток выполнения.

// EventLoop позволяет выполнять асинхронные задачи, такие как загрузка данных из сервера, анимация
// не прерывая главный поток выполнения. Благодаря этому страницы загружаются быстрее и пользователи
// получают более отзывчивый интерфейс.


                        // Из чего состоит Event Loop?
// Event Loop в JavaScript состоит из нескольких основных блоков:

// 1. Call Stack (стек вызовов) - это механизм, который используется для хранения
// вызовов функций в порядке их вызова. Когда функция вызывается, она
// помещается в вершину стека, а когда она завершается, она удаляется из
// стека. Таким образом, стек вызовов используется для выполнения синхронного
// кода в порядке вызова функций.

// 2. Web APIs (веб-интерфейсы) - это набор API-интерфейсов, предоставляемых
// браузером для выполнения асинхронного кода. Например, это могут быть
// интерфейсы для загрузки данных из сервера, обработки пользовательских
// событий, создания таймеров и т.д.

// 3. Callback Queue (очередь обратных вызовов) - это очередь, которая содержит
// обратные вызовы, которые должны быть выполнены после завершения
// асинхронной операции. Когда операция завершается, обратный вызов
// добавляется в конец очереди.

// 4. Event Loop (цикл событий) - это механизм, который постоянно проверяет стек
// вызовов и очередь обратных вызовов. Когда стек вызовов пуст, Event Loop
// извлекает первый обратный вызов из очереди и помещает его в стек вызовов
// для выполнения. Таким образом, Event Loop обеспечивает выполнение
// асинхронного кода в правильном порядке и в том же самом потоке
// выполнения.


// Задания

// 1. 
setTimeout(() => {console.log('setTimeout 1')}, 0);
setTimeout(() => {console.log('setTimeout 2')}, 0);

new Promise((resolve, reject) => {resolve('Promise 1 resolved')})
.then(res => console.log(res));

new Promise((resolve, reject) => {resolve('Promise 2 resolved')})
.then(res => console.log(res));


// 2. В какой последовательности выполнятся console.log?
console.log(1);

setTimeout(() => console.log(2), 1000);

console.log(3);

new Promise((res) => res(4)).then((data) => console.log(data));

setTimeout(() => console.log(5), 2000);

Promise.resolve(6).then((data) => console.log(data));

new Promise((res) => setTimeout(() => res(7), 3000)).then((data) =>
console.log(data)
);


// 3. В какой последовательности выполнятся console.log?
setTimeout(() => console.log(5), 0);

new Promise((res) => res(1)).then((data) => console.log(data));

setTimeout(() => console.log(2), 1000);

Promise.resolve(3).then((data) => console.log(data));

console.log(4);

new Promise((res) => setTimeout(() => res(7), 2000)).then((data) =>
console.log(data)
);

for (let i = 0; i < 2; i++) {
console.log(i);
}


// 4. В какой последовательности выполнится код?
const myPromise = (delay) => new Promise((res, rej) => {
    setTimeout(res, delay)
})

setTimeout(() => console.log('in setTimeout1'), 1000); 

myPromise(1000).then(res => console.log('in Promise 1')); 

setTimeout(() => console.log('in setTimeout2'), 100); 

myPromise(2000).then(res => console.log('in Promise 2')); 

setTimeout(() => console.log('in setTimeout3'), 2000); 

myPromise(1000).then(res => console.log('in Promise 3')); 

setTimeout(() => console.log('in setTimeout4'), 1000); 

myPromise(5000).then(res => console.log('in Promise '));


// 5. Что код выведет в консоли?
setTimeout(function timeout() {
    console.log('Таймаут');
}, 0);

let p = new Promise(function(resolve, reject) {
    console.log('Создание промиса');
    resolve();
});

p.then(function(){
    console.log('Обработка промиса');
});

console.log('Конец скрипта');


// 6.
function resolveAfter2Seconds(x) {
console.log(`Какой Х пришёл -> ${x}`)
    return new Promise(resolve => {
    setTimeout(() => {
    resolve(x); 
}, 5000);
});
}

async function add1(x) {
console.log('add1 Hello')
const a = await resolveAfter2Seconds(20);
const b = await resolveAfter2Seconds(30);
console.log('add1 Bye')
    return x + a + b;
}

add1(10).then(console.log);

// 7. 
console.log('script start'); 
setTimeout(function() {
  console.log('setTimeout'); 
}, 0);

Promise
  .resolve()
  .then(function() {
  console.log('promise1'); 
})
  .then(function() {
  console.log('promise2'); 
});

console.log('script end'); 

// 8.
let a = 5;
setTimeout(function timeout() {
    console.log(a);
    a = 10;
}, 0);

const promise = new Promise(function(resolve, reject) {
    console.log(a);
    a = 25;
    resolve();
});

p.then(function(){
    // some code
});

console.log(a);

// 9.
console.log(1);

setTimeout(() => console.log(2));

Promise.resolve().then(() => console.log(3));

Promise.resolve().then(() => setTimeout(() => console.log(4)));

Promise.resolve().then(() => console.log(5));

setTimeout(() => console.log(6));

console.log(7);

