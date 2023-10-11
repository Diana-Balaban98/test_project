// // Вспомним:
// // Какой статус имеет промис при создании? Какой в случае успешного выполнения? А какой в случае, когда промис отклонен?
// // В какой блок попадает промис в случае успешного выполнения? И в какой попадет, если отклонен?
//
//
// // Стаческие методы класса Promise: all, race, any, allSettled
//
// // all
// // Promise.all([] - принимает массив в качестве аргумента) : возвращает новый promise, который ожидает завершения всех промисов в передаваемом массиве.
// // Если любой из промисов завершается с ошибкой, возвращаемый promise тоже завершается с ошибкой.
// // Полезно, когда нам нужно дождаться результата нескольких промисов.
//
// const promiseAll = new Promise(resolve => setTimeout(()=>resolve(1), 2000));
// const promiseAll2 = new Promise((resolve, reject) => setTimeout(()=>resolve(2), 1000));
// const promiseAll3 = new Promise(resolve => setTimeout(()=>resolve(3), 3000));
// const resultAll = Promise.all([promiseAll,promiseAll2,promiseAll3]);
// resultAll.then(data => console.log(data[0])).catch(err => console.log("error", err))
//
// // race
// // Promise.race([] - принимает массив в качестве аргумента) : возвращает новый promise, который ожидает завершения любого
// // промиса в передаваемом массиве.
// // Возвращаемый promise разрешается или отклоняется в соответствии с результатом первого завершенного промиса.
// // // Коротко! Кто быстрее получит статус fulfilled / rejected, результат того и вернется.
//
// const promiseRace = new Promise(resolve => setTimeout(()=>resolve(1), 2000));
// const promiseRace2 = new Promise(resolve => setTimeout(()=>resolve(2), 3000));
// const promiseRace3 = new Promise((resolve, reject) => setTimeout(()=>reject(3), 1000));
//
// const resultRace = Promise.race([promiseRace,promiseRace2,promiseRace3]);
// resultRace.then(data => console.log(data)).catch(err => console.log("Error", err)); // 2
//
// // allSettled
// // Promise.allSettled([] - принимает массив в качестве аргумента): принимает массив промисов и возвращает новый промис, который разрешается, когда все промисы в
// // массиве завершены, независимо от их состояния (разрешен или отклонен). Возвращает промис с результатом в виде массива
// // объектов. Каждый объект результата имеет два свойства: state , который может иметь значения "fulfilled" , если
// // соответствующий промис разрешен, или "rejected" , если он отклонен. value , который содержит результат разрешенного
// // промиса или причину отклоненного промиса.
//
// const promisesAllSettled = [
//     Promise.resolve('Promise 1 resolved'),
//     Promise.reject('Promise 2 rejected'),
//     Promise.resolve('Promise 3 resolved')
//     ];
//
//     Promise.allSettled(promisesAllSettled)
//     .then(results => {
//     console.log(results);
//     });
//
//
// // Promise.any([] - принимает массив в качестве аргумента) возвращает новый Promise, который ожидает завершения любого
// // промиса в передаваемом массиве.
// // Возвращаемый Promise разрешается с результатом первого успешного промиса со статусом "fullfiled". Если все промисы в массиве отклонены,
// // возвращаемый Promise отклоняется с ошибкой, содержащей массив отклоненных промисов. Короче говоря, Promise.any
// // разрешается с результатом самого быстрого промиса в массиве.
//
// const promise1 = new Promise(resolve => setTimeout(() => resolve(1), 5000))
// const promise2 = new Promise(resolve => setTimeout(() => resolve(2), 1000))
//
// Promise.any([promise1, promise2])
//   .then((result) => {
//     console.log(result)
//   })
//
//
// Promise.any([
//     fetch("https://yahoo12.com/?query=js"),
//     fetch("https://google12.com/?query=js"),
//     fetch("https://duckduckgo12.com/?query=js"),
//   ])
//     .then((data) => {
//       console.log(data.url);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
//
//
//
// // async / await
// // async/await - это способ написания асинхронного кода в JavaScript. Вместо использования коллбэков или промисов, пишем
// // код, который выглядит как обычный синхронный код, но при этом выполняется асинхронно.
//
// // Чтобы использовать async/await, мы объявляем функцию с ключевым словом async. Внутри этой функции можно
// // использовать ключевое слово await перед вызовом асинхронной функции или перед обещанием (промисом), чтобы
// // приостановить выполнение кода до того момента, пока функция или обещание не завершатся.
//
// // Если функция завершается успешно, она возвращает результат. Если функция выбрасывает исключение, оно будет выброшено
// // как обычное исключение.
//
// // Aсинхронные функции — функции, которые возвращают промисы
//
// // const promise = new Promise(resolve => setTimeout(() => resolve(1), 30000));
// // promise.then(d => console.log(d))
//
// async function getData() {
// const data = await new Promise(resolve => setTimeout(() => resolve(1), 2000));
// console.log(data);
// }
//
// getData();
//
//
//
// async function asyncFunction() {
//     return  1;
// }
//
// // asyncFunction().then(d => console.log(d))
// //т.к. async функция создает промис, мы можем на него подписаться then, catch, finally
//
//
//
//
// //.catch()
// // В асинхронной функции можно обработать ошибку от промиса new Promise с помощью ключевого слова try/catch .
// //.then() await
// const promise = new Promise((resolve, reject) => {reject("Error")});
// async function asyncFunction() {
//     try {
//         const data = await promise;
//         console.log(data); // если бы не было ошибки, выполнился бы console.log(data)
//     }
//     catch (error) {
//         console.log(error);// "Error"
//     }
// }
//
// async function f() {
//
//     try {
//       let response = await fetch('/no-user-here');
//       let user = await response.json();
//       //setUser(user)
//     } catch(err) {
//       // перехватит любую ошибку в блоке try: и в fetch, и в response.json
//       alert(err);
//     }
//   }
//
//   f();
//
//
//   async function f() {
//     let response = await fetch('http://no-such-url');
//   }
//
//   // f() вернёт промис в состоянии rejected
//   f().catch(alert); // TypeError: failed to fetch // (*)
//     //useState
//   //запрос на сервер
// async function serverRequest() {
//     const data1 = await fetch("https://yahoo.com/?query=js")
//     const data2 = await fetch("https://google.com/?query=js")
//     const data3 = await fetch("https://duckduckgo.com/?query=js")
//     console.log(data1, data2, data3);
//     return {data1: data1,data2, data3 }
//     return [count, setCount]
// }
// //let {data1: data1,data2, data3 } =serverRequest()
// //.then().catch()
// //await будет ждать массив с результатами выполнения всех промисов
// async function serverRequestWithAll() {
// const data = await Promise.all([
//     fetch("https://yahoo.com/?query=js"),
//     fetch("https://google.com/?query=js"),
//     fetch("https://duckduckgo.com/?query=js")
// ])
// console.log(data);
// }
//
//
// //вызов await вне функции
// let res1 = await fetch("https://yahoo.com/?query=js")
// //setUsers(res1)
// console.log(res1);
//
// //fetch('/api/posts/').then(data => console.log(data))
// // Код чище и короче. У нас больше нет цепочек из then(), вместо этого мы получаем плоскую структуру, которая по виду
// // похожа на синхронный код.
// // Условия и вложенные конструкции становятся чище и проще читаются.
// // Мы можем обрабатывать ошибки с try-catch. Как и с синхронным кодом, обработка ошибок сводится к оборачиванию опасных
// // операций в try-catch:
//
// async function loadPosts() {
//   try {
//     const response = await fetch('/api/posts/')
//     const data = await response.json()
//     return data
//   } catch (e) {
//     console.log(e)
//   }
// }
//
// // При этом в отличие от .catch() промисов, try-catch поймает не только ошибки, которые были внутри асинхронных функций,
// // но также и ошибки, которые возникли во время обычных синхронных операций.
//
// // Задания:
// // 1.
// // Вызовите async–функцию из "обычной"
// // Есть «обычная» функция. Как можно внутри неё получить результат выполнения async–функции?
// async function e(){
//   return 1
// }
// //
// async function wait() {
// await new Promise(resolve =>setTimeout(resolve, 5000))
//
//   return 30;
// }
// //
// function wait() {
//
//     return  new Promise(resolve =>setTimeout(() =>resolve(30), 5000))
//   }
// wait().then(resolve => console.log(resolve))
// //func, ojb, array
// //funciton num () {
// //  return 1
// //}
//
// function f() {
//   wait().then(value => {
//     console.log(value)
//     return undefined
//   })
// }
//
//
//   f();
//
// // 2.
// // Напишите 2 функции, которая принимает 2 промиса (оба успешно завершенных).
// // Первая возвращает промис с твое имя, твою фамилию через 5 секунд. Вторая
// //дожидается выполнения и выводит в консоль
// //.then.catch.finally All AllSettled Any Race Resole Rejecte
// let name = new Promise(resolve => resolve('Alena'))
// let surname = Promise.resolve('Belaya')
//
// async function Dz2(pr1, pr2) {
//   let value1 = await pr1
//   let value2 = await pr2
//   await new Promise(resolve => setTimeout(() => resolve, 1000))
//   return value1 + " " + value2
// }
// //.then(data => {
// //  return 5
// //})
// function Dz2T(value1, value2) {
//    Dz2(value1, value2).then(data => console.log(data))
//
// }
// Dz2T(name,surname )
// // 3.
// //Напиши функцию, которая принимает на вход число и возвращает промис,
// //который разрешается через указанное количество секунд, и которая
// //генерирует ошибку, если входное число меньше 0.
//
// // часть 2 переписать на асинк эвейт
// function Dz3(num1, int = 3000) {
//     const res = new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (num1 > 0) {
//           resolve(num1)
//         } else {
//           reject(`меньше 0`)
//         }
//       }, int)
//     })
//
//     return res
// }
// // () => 5
// // () => {
// //return 5}
// //Dz3(-1, 3000).then(data => console.log(data)).catch(err => console.log(err))
// async function Dz3T(pr1) {
//   try {
//     let res = await Dz3(pr1)
//     console.log("result succeec")
//     console.log(res)
//   } catch(error) {
//     console.log(error);
//   }
// }
//
// Dz3T(20, 3000)
//
// //while (true)
//
// // 4.
// // Напиши функцию sum(numbers) , которая возвращает промис, который
// // разрешается (resolve) суммой чисел в массиве, или отклоняется с
// // ошибкой, если массив пуст
//
// function Dz4(arr) {
//   let result = new Promise((res, rej) => {
//     if (!arr.length) {
//       rej('массив пуст')
//     } else {
//       res(arr.reduce((acc, value) => acc + value  ,0))
//     }
//   })
//   return result
// }
//
// Dz4([1,3,4,5])
// .then(value => console.log(value))
// .catch(value => console.log(value))
//
//
//
