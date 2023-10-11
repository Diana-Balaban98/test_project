// Promise
// Код в JavaScript выполняется последовательно (в одном потоке, синхронно).
// То есть таким образом, когда каждая следующая операция ждёт завершения предыдущей.

// Асинхронный код в JavaScript может быть написан разными способами: с помощью обратных вызовов (callback), promise
// (обещаний) и ключевых слов async/await.




// Callback hell
//  Есть ряд асинхронных задач, которые зависят друг от друга, т.е первая задача запускает по завершении
//  вторую, вторая - третью и т.д.
//  И мы получаем "башню" из обратных вызовов.
//  Решают эту проблему Promise (промисы).
// Callback hell (ад коллбэков):

setTimeout(() => {
    console.log(1);
    setTimeout(() => {
        console.log(2);
      setTimeout(() => {
        console.log(3);
        setTimeout(() => {
            console.log(4);
        }, 5000);
      }, 5000);
    }, 5000);
  }, 5000);


// Промисы. Для чего нужны?
// Промис - объект, обещание предоставить результат позже.
// Пример: отправив запрос на сервер, не знаем ответит или не ответит или ответит ошибкой, какие данные пришлет, не знаем,
// какой будет результат запроса, но с помощью промиса мы можем поставить на ожидание получение результата и когда мы его
// получаем, то можем его обрабатывать.
// Промисы позволяют обрабатывать асинхронные операции (отложенные во времени события).


// Как создать промис? Функция-конструктор
const myPromise = new Promise((resolve, reject) => { 
    // выполнение асинхронных действий 
    // внутри этой функции нужно в результате вызвать одну из функций resolve() или reject()
});

function makeServerRequest() {
  return new Promise((resolve, reject) => {
    // Симуляция асинхронного запроса к серверу
    setTimeout(() => {
      const response = {
        status: 200, 
        data: 'Response data from the server'
      };

      if (response.status === 200) {
        resolve(response.data);
      } else {
        reject('Server request failed');
      }
    }, 2000);
  });
}

makeServerRequest().then(res => console.log(res))
                   .catch(err => console.log(err))
                   .finally(()=> console.log("Okey"))


function delayedPromise() {
    return new Promise((resolve, reject) => {
      console.log(1);
      setTimeout(() => {
        const randomNumber = Math.random();
  
        if (randomNumber > 0.5) {
          resolve(`Random number ${randomNumber} is greater than 0.5`);
        } else {
          reject(`Random number ${randomNumber} is less than or equal to 0.5`);
        }
      }, 0);
      console.log(2);
    });
  }
  
  // Использование промиса
  delayedPromise()
    .then(result => {
      console.log("Resolve:", result);
    })
    .catch(error => {
      console.log("Reject:", error);
    });

  

    const myPromise2 = new Promise((resolve, reject) => { 
      // выполнение асинхронных действий 
      // внутри этой функции нужно в результате вызвать одну из функций resolve() или reject()
  });

  console.log(myPromise2);
   // console.log(typeof new Promise(() => {}));

   // у промиса есть 2 свойства  
   {
    result: // undefined  // result  // err 
    state: // pending - fulfilled, если зарезолвился, rejected, если зареджектился
   }

    

// Что возвращает промис?
// Промис может вернуть либо результат, либо ошибку.
// console.log(typeof Promise.resolve()); // object

// Какие есть свойства у promise объекта?
// state (состояние): когда промис создается у него будет состояние pending (ожидание) либо результата либо ошибки.
// Когда промис вернул какой-то результат он считается исполненным - fulfilled (выполнен успешно) при вызове resolve(), 
// либо отклоненным - rejected (выполнен с ошибкой) при вызове reject().
// Первое состояние промиса окончательно и он не изменяет на другое состояние. С fulfilled нельзя изменить на rejected и
// наоборот.

// result (результат): промис в состоянии ожидания имеет результат - undefined, когда промис успешно завершен его 
// результатом является value при вызове resolve(), а если промис выполнился с ошибкой, то его результат - error при 
// вызове reject().

// Какие параметры есть у промиса?
// Промис принимает коллбэк-функцию, которая имеет 2 параметра (resolve и reject- функции).
// И мы внутри этой коллбэк-функции должны вызвать одну из этих 2 функций, чтобы промис завершился либо успехом, либо 
// ошибкой.

// Then, catch, finally
// У объекта созданного через конструктор Promise доступны методы (then, catch, finally).
const promise11 = new Promise((resolve, reject) => {
})
//resolve("data")
//reject("error")
promise11.then(value => {
    // действия в случае успешного исполнения промиса 
    // значением value является значение, переданное в вызове функции resolve внутри промиса
}).catch(error => {
    // действия в случае отклонения промиса 
    // значением error является значение, переданное в вызове функции reject внутри промиса
}).finally(); // ничего не принимает, выполнится в любом случае и ничего не возвращает

// Цепочка промисов. Что это и для чего?
//  Иногда количество асинхронных операций заранее неизвестно, но они должны выполняться строго по очереди.
//  Цепочка промисов это всегда then().then().then()
//  Единственный нюанс - начальный промис, с которого начинается строится цепочка. Если такого промиса нет, то его можно
// создать используя функцию Promise.resolve(). Он возвращает промис, который ничего не делает, но с него можно начинать
// свёртку.
//.filter.map
const prpr1 = Promise.resolve("Resolve")
prpr1.then(data => console.log("yes"))
.then(data => console.log("server answer"))
//{ return underfiend
//
//}

fetch('/article/promise-chaining/user.json')
    .then(response =>  response.json())
   .catch()

//Запрашиваем user.json
fetch('/article/promise-chaining/user.json')//1 'YOYO"
  // Загружаем данные в формате json
  .then(response => response.json())//2
  // Делаем запрос к GitHub
  .then(user => fetch('https://api.github.com/users/${user.name}'))//3
  // Загружаем ответ в формате json
  .then(response => response.json())
  // Показываем аватар (githubUser.avatar_url) в течение 3 секунд (возможно, с анимацией)
  .then(githubUser => {
    let img = document.createElement('img');
    img.src = githubUser.avatar_url;
    img.className = "promise-avatar-example";
    document.body.append(img);
    setTimeout(() => img.remove(), 3000); // (*)
  });

// Если обработчик в .then (или в catch/finally, без разницы) возвращает промис, последующие элементы цепочки ждут, пока
// этот промис выполнится. Когда это происходит, результат его выполнения (или ошибка) передаётся дальше.

// Или, может быть, с сервером всё в порядке, но в ответе мы получим некорректный JSON. Самый лёгкий путь перехватить все
// ошибки – это добавить .catch в конец цепочки:

fetch('/article/promise-chaining/user.json')
  .then(response => response.json()) //'Ошибка'
  .then(user => fetch('https://api.github.com/users/${user.name}'))
  .then(response => response.json())
  .then(githubUser => new Promise((resolve, reject) => {
    let img = document.createElement('img');
    img.src = githubUser.avatar_url;
    img.className = "promise-avatar-example";
    document.body.append(img);

    setTimeout(() => {
      img.remove();
      resolve(githubUser);
    }, 3000);
  }))
  .catch(error => alert(error.message));

// _onResponse(res) { // обрабатываем ответ от сервера
//           return res.ok ? res.json() : Promise.reject({...res, message: 'Ошибка сервера'})
// }

// getAllCats() { // у сервера запрашиваем всех котов
//           return fetch(${this._url}/show, {
//               method: 'GET'
//           }).then(this._onResponse)
// }



// Классическая ошибка новичков: технически возможно добавить много обработчиков .then к единственному промису. Но это не цепочка.
// Например:

let promise = new Promise(function(resolve, reject) {
  setTimeout(() => resolve(1), 1000);
});

promise.then(function(result) {
  alert(result); // 1
  return result * 2;
})
.then(function(result) {
  alert(result); // 1
  return result * 2;
})
.then(function(result) {
  alert(result); // 1
  return result * 2;
});



/////--------Задачи

const promise6 = Promise.resolve(5)
  .then((value) => `${value} and bar`)//5 and bar
  .then((value) => `${value} and bar again`)
  .then((value) => `${value} and again`)
  .then((value) => `${value} and again`)
  .then((value) => {
    console.log(value);
    return undefined
  })
  .catch((err) => {
    console.error(err);
    return undefined
    //resolve
  });

// Что выведет код ниже?

let promise2 = new Promise(function(resolve, reject) {
    resolve(1);
    reject(3);
    setTimeout(() => resolve(2), 1000);
});
  
promise2.then(data => setNewData(data));

//------------

const promise4 = new Promise(function(resolve, reject) {
  setTimeout(() => resolve(1), 1000);
}).then(function(result) { 
  console.log(result); 
  return result * 2;
}).then(function(result) { 
  console.log(result); 
  return result * 2;
}).then(function(result) {
  console.log(result); 
  return result * 2; //8
}).then(function(result) { //undefined
    result * 2
    console.log(result);
    return "YOYO"
    //resolve undefined
}).then(function(result) {
  console.log(result);
  //resolve underfined
})
//axios.get().then().catchj()

//-------------

let resrse =Promise.reject("a") //ошибка
resrse.catch(p => p + 'b') //resolve
        .catch(p => p + 'c')//skip
        .then(p => p + 'd') //abd
        .finally(p => p + 'e') //.finally(param1) {}
        .then(p => console.log(p));

//--------------

const promise7 = Promise.reject("error")
.then(res => {
  console.log(res);
  return res 
})
.catch(err => {
  console.log(err)
  return err
})
.then(res => {
  return res + "" + " request...server"
}).then(res => {
  console.log(res);
})

//------------------

const promise8 = Promise.reject("server error")
.then(res => {
  console.log(res);
  return res 
})
.catch(err => {
  console.log(err)
  return err + 1
})
.catch(err => {
  console.log(err)
  return err + 2
})
.then(res => {
  console.log(res);
  return res + 3
})
.catch(err => {
  console.log(err)
  throw new Error("new Error!")
})
.catch(err => {
  console.log(err);
  return err + 4
})

//----------------

const promise9 = Promise.reject("server error")
.then(res => {
  console.log(res);
  return res 
})
.catch(err => {
  console.log(err)
  throw new Error("error!!!")
  //reject error!!!
})
.catch(err => {
  console.log(err)
  return err + 2
  //resolve
})
.then(res => {
  console.log(res);
  return res + 3
})
.catch(err => {
  console.log(err)
  throw new Error("new Error!")
})
.catch(err => {
  console.log(err);
  return err + 4
}).finally((res) => {
  return res + " error-error"
}).then((res) => {
  console.log(res);
})

//--------------------

new Promise(function(resolve, reject) {

  setTimeout(() => resolve(1), 1000);

}).then(function(result) {

  alert(result); // 1

  return new Promise((resolve, reject) => { // (*)
    setTimeout(() => resolve(result * 2), 1000);
  });

}).then(function(result) { // (**)

  alert(result); // 2

  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(result * 2), 1000);
  });

}).then(function(result) {

  alert(result); // 4

});
//fetch().then()
//-----------REDUCE

// Задачи на reduce
// Задача: выбрать чётные, вычислить их квадраты и отобрать из них числа больше 10.
const numbers77 = [1, 3, 4, 5, 6, 7]
const unumberssu = numbers.reduce((acc, value) => {
return acc+=value
},0)
console.log("result sum", unumberssu)
const result99 =numbers.reduce((acc, value) => {
  if (value % 2 === 0) {
    let num = value ** 2
    if (num > 10) {
      acc.push(num)
    }
  }
  return acc
},[])
console.log("resuul ->",result99)
//acc=0
//acc =1
// Задача: с помощью reduce создать объект ключ{[id]: {name:"imya", age:"age"}}

const users = [
  {id: "123", name: "Vasiliy", age: 18},
  {id: "345", name: "Anna", age: 22},
  {id: "567", name: "Igor", age: 20},
  {id: "789", name: "Irina", age: 24},
]
const usersreducer = users.reduce((acc, value) => {
  acc[value.id] = {
name: value.name,
age: value.age
  }
  return acc
},{})
console.log("result users", usersreducer)
// Напиши функцию, которая принимает массив чисел и разделяет массив на две группы:
// четные и нечетные  {even:[], odd:[]} (через reduce)
const numbers99 = [1, 3, 4, 5, 6, 7]
const numbers999 = numbers99.reduce((acc, value) =>{
  if (value % 2 === 0) {
     acc.even.push(value)
   
  } else {
    return acc.odd.push(value)
  }
  return acc
}, {even:[], odd:[]})
console.log("numbers999", numbers999)

