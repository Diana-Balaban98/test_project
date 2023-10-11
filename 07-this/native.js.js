// this
// this — это ключевое слово в JavaScript которое содержит в себе объект (контекст) выполняемого кода.
// В объекте, this указывает на текущий объект, в котором вызывается метод.
// Тебе нужно запомнить фразу “this это объект перед точкой в момент вызова метода”


// this имеет различные значения в зависимости от того, где используется:

// 1) Сама по себе - this используется вне объектов, он будет ссылаться на глобальный объект в контексте выполнения скрипта, 
// то есть в браузере это объект window, а в среде выполнения на сервере Node.js это объект global.
// В браузере:
console.log(this); // выведет глобальный объект window

// В Node.js:
console.log(this); // выведет глобальный объект global

// 2) В методе - this относится к родительскому объекту.
// В стрелочной функции - this относится к контексту где функция была создана.
const man = {
    name: 'Alex',
    age: 25,
    sayHi() {
        console.log(this.name)
    },
    sayHello:() =>{
        console.log(this.name)
    }
};
man.sayHi(); // Alex
man.sayHello() //привязка к window

// this определяется в момент вызова функции

const greet = man.sayHi
greet() // Привет, меня зовут undefined
//window.greet()

// 3) В функции - this относится к глобальному объекту.
function logThis() {
    //this {}
    console.log(this);
}

logThis(); // выведет глобальный объект window
const b = new logThis()




// То же — если функция объявлена внутри функции:
function whatsThis() {
    function whatInside() {
        console.log(this === window)
    }

    whatInside()
}

window.whatsThis()
// true

// 4) В функции в 'strict mode' - this = undefined.
'use strict';

function logThis() {
    console.log(this);
}

logThis(); // выведет undefined


// 6) В событии - this ссылается на элемент запустивший событие.
/* <button id="myButton">Кнопка</button>

const myButton = document.getElementById('myButton');

myButton.addEventListener('click', function () {
  console.log(this); // выведет HTML-элемент кнопки
}); */
//button.click = this button
//user1.click = this



const person = {
    name: 'Alex',
    age: 25,
};

function sayHi() {
    //this
    console.log(this.age);
}
//this -wdinwo
const sayNo = () => {
    console.log(this.age)
}
let a1 = {}
let b1 = a1
b1.a = 5

// person.adress = " no adress"
// person.sayHi = sayHi;

//this no hadrcode 
person.sayNo = sayNo
//person{name,age, sayHi}
//this.sayHi this window ? person?
window.sayHi()//window = this age ? age no undefined this. window {} <--- age? NO undefinned 
//console.log(window.age)
 person.sayHi();//person = this age ? age  = 25 this === person  person {} <--- age? YES 25
//this => person => console.log(person.age)
//1declarration
//2
 person.sayNo(); //arrow function this===window  window.age ? age 

//sayHi -declaration this=person


// this и стрелочная функция
// У стрелочных функций собственного контекста выполнения нет. Они связываются с ближайшим по иерархии контекстом, в котором они 
// определены.
function greetWaitAndAgain() {
    console.log(`Hello, ${this.name}!`)
    //this -> user {}
    setTimeout(() => {
        console.log(`Hello again, ${this.name}!`)
    })
}
//this = wndow, this = ? user
const user = {name: 'Alex'}

user.greetWaitAndAgain = greetWaitAndAgain;

console.log(user);
user.greetWaitAndAgain()
//this. => user.
// При использовании обычной функции внутри контекст бы потерялся, и чтобы добиться того же результата, нам бы пришлось 
// использовать call(), apply() или bind().

const obj = {
    myProperty: 42,
    myMethod: () => {
        console.log(this.myProperty);
    },
    myMethod2() {
        console.log(this.myProperty);
    }
}
obj.myMethod();




const obj = {
    myProperty: 42,
    myMethod: () => this.myProperty,
    myMethod2: function () {

                    //this{obj}
        const fn = () => this.myProperty;
        //this = obj
        return fn()
    }
}
console.log(obj.myMethod());
console.log(obj.myMethod2());


// call, bind и apply
// call , bind и apply являются методами, доступными для всех функций в JavaScript. Они используются для управления значением this
// внутри функций.
// На стрелочную функцию call, bind и apply не влияют!

// Метод call вызывает функцию и устанавливает значение this для этой функции в первый аргумент, переданный методу call .
// Последующие аргументы передаются как аргументы вызываемой функции:
function greet(greeting, age) {
    console.log(`${greeting}, my name is ${this.name}`);
}

const person = {
    name: 'Pavel'
};
// greet('Hello');
greet.call(person, 'Hello', 25);


// Метод apply аналогичен методу call , за исключением того, что аргументы
// вызываемой функции передаются в виде массива:
function greet(greeting) {
    console.log(`${greeting}, my name is ${this.name}`);
}

const person = {
    name: 'Pavel'
};

greet.apply(person, ['Hello']); // Hello, my name is Pavel


// Метод bind также устанавливает значение this для функции, но возвращает
// новую функцию с установленным значением this , которую можно вызывать
// позже:
function greet() {
    console.log(`Hello, my name is ${this.name}`);
}

const person = {
    name: 'Pavel'
};

let greetPerson = greet.bind(person);
greetPerson();

// В общем, методы call , bind и apply позволяют управлять значением this в функциях и сделать их более гибкими и 
// переиспользуемыми.


// Задачи


let mann = {
    name: "Elena",
    sayHi() {
                //this -> this{mann}
        const sayName = () => {
            //this -> mann
            console.log(this.name)
        }

        return sayName

    }
}
//declaration - вызов
//arrow - создание
//newman = func sayName
let newman = mann.sayHi() //this
newman()


//Events

let man = {
    name: "John",
    lalal() {
        //man 
        document.querySelector("button.ok")
            .addEventListener("click", this.sayHi)
    },
    sayHi() {
        console.log(this.name)
    }
}
//button.sayHi button
//контекст какой функции this.sayHi
//чему будет равен this.name




let man1 = {
    name: "John",
    click() {
        document.querySelector("button.ok")
            .addEventListener("click", function () {
                console.log(this.name)
            })
    }
}
//контекст какой функции this.name
//чему будет равен this.name
//button.click  this  = butoon



let man2 = {
    name: "John",
    click() {
        //this => man2
        document.querySelector("button.ok")
            .addEventListener("click", () => {
                console.log(this.name)
            })
    }
}
//man2.click
//button.arrowf 
//button



let set = {
    name: "John",
    click() {
        setTimeout(() => console.log(this.name), 1000)
    }
}
set.click()




let set1 = {
    name: "John",
    click() {
        setTimeout(() => console.log(this.name), 1000)
    }
}
let sett = set1.click
sett()


document.querySelector("button.ok").addEventListener("click", set1.click)


let set2 = {
    name: "John",
    click() {
        window.setTimeout(function () {
            console.log(this)
        }, 1000)
    }
}
document.querySelector("button.ok").addEventListener("click", set2.click)


let set3 = {
    name: "John",
    click() {
        window.setTimeout(() => {
            console.log(this)
        }, 1000)
    }
}
document.querySelector("button.ok").addEventListener("click", set3.click)


let set4 = {
    name: "John",
    click() {
        console.log(this)
        window.setTimeout(() => {
            console.log(this)
        }, 1000)
    }
}

function User(props) {
    props.click()
}

User({click: set4.click})


let set5 = {
    name: "John",
    click() {
        let that = this
        console.log(this)
        window.setTimeout(() => {
            console.log(this)
            console.log(that)
        }, 1000)
    }
}


function User1(props) {
    props.click()
}

User1({click: set4.click})


function Users() {
    //this
}

let a = Users()
let b = new Users()


// Задачи
// 1
function globalFunc() {
    console.log(this);
}

const globalArrowFunc = () => {
    console.log(this);
}

console.log(this); // ?
globalFunc(); // ?
globalArrowFunc(); // ?


// 2
const user = {
    name: 'Bob',
    userThis: this,
    func() {
        console.log(this);
    },
    arrowFunc: () => {
        console.log(this);
    }
};

console.log(user.userThis); // ?
user.func(); // ?
user.arrowFunc(); // ?


// 3 
const user = {
    name: 'Bob',
    funcFunc() {
        return function () {
            console.log(this);
        }
    },
    funcArrow() {
        return () => {
            console.log(this);
        }
    },
    arrowFunc: () => {
        return function () {
            console.log(this);
        }
    },
    arrowArrow: () => {
        return () => {
            console.log(this);
        }
    },
};

user.funcFunc()(); // ?
user.funcArrow()(); // ?
user.arrowFunc()(); // ?
user.arrowArrow()(); // ?


// 4
// Объект user остался без изменений
const user = {
    name: 'Bob',
    funcFunc() {
        return function () {
            console.log(this);
        }
    },
    funcArrow() {
        return () => {
            console.log(this);
        }
    },
    arrowFunc: () => {
        return function () {
            console.log(this);
        }
    },
    arrowArrow: () => {
        return () => {
            console.log(this);
        }
    },
};

const user2 = {
    name: 'Jim',
    funcFunc: user.funcFunc(),
    funcArrow: user.funcArrow(),
    arrowFunc: user.arrowFunc(),
    arrowArrow: user.arrowArrow()
}

user2.funcFunc(); // ?
user2.funcArrow(); // ?
user2.arrowFunc(); // ?
user2.arrowArrow(); // ?


// 5
function makeUser() {
    return {
        name: "John",
        ref: this
    };
}

let user = makeUser();

alert(user.ref.name); // Каким будет результат?

// 6
let f = function () {
    this.x = 5;
    (function () {
        this.x = 3;
    })();
    console.log(this.x);
};

let obj = {
    x: 4,
    m: function () {
        console.log(this.x);
    }
};


f();
new f();
obj.m();
new obj.m();
f.call(f);
obj.m.call(f);

// Каким будет результат?



