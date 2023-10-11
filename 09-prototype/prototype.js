// __proto__ и prototype
// __proto__ и prototype - это всё свойства объекта. 
// Любой объект в javaScript имеет свойство __proto__ Но свойство prototype имеют только функции 
// конструкторы или классы.

// Каждое свойство __proto__ ссылается на prototype класса с помощью которого был создан объект.

let str = 'я строка'; 
console.log(str.__proto__ === String.prototype); // true

// __proto__ хранит в себе свойства и методы prototype именно поэтому мы можем использовать методы и
// свойства на объекте даже если он их не имеет.

let str2 = 'я строка'.toLocaleUpperCase(); 
console.log(str2); // Я СТРОКА


// __proto__ 
// Есть у всех, поэтому классы и функции имеющие prototype тоже имеют __proto__

console.dir(String.prototype.__proto__); // Object
// Прототип любой строки ссылается на объект, так как все в js объекты. Это будет касаться любого типа данных.
console.log(Function.prototype.__proto__); // Object
console.log(Array.prototype.__proto__); // Object
// у всех них прото ссылается на  Object.prototype
console.log(Array.prototype.__proto__ === Object.prototype); // true

// в свою очередь __proto__ объекта ссылается на null - это конечная станция.
console.dir(Object.prototype.__proto__); // null



// Так же если мы создадим свой класс и с помощью него сделаем экземпляр, то __proto__ этого 
// экземпляра будет ссылаться на prototype нашего класса.

class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    userSay() {
        return `Я ${this.name} и мой возраст ${this.age}`
    }
}


let ivan = new User('Иван', 45); // сделаем нашего ивана

console.log(ivan.userSay()); // Я Иван и мой возраст 45. Все работает.
// теперь проверим чему равен __proto__ ивана
console.log(ivan.__proto__ === User.prototype); // true
// в тоже время наш класс по сути функция поэтому
console.log(User.__proto__ === Function.prototype); // true


// Немного про наследовательность и цепочку прототипов
let str3 = 'hi'; // у нас есть строка.

Object.prototype.fun = function name(params) { // в Object.prototype мы добавили свою функцию.
    return params.toLocaleUpperCase(); // просто делаем капс.
};

console.log(str3.fun('hi')); // используем ее на строке и она работает выдовая нам HI

// __proto__ нашей str ссылается на String.prototype которого __proto__ в свою очередь ссылается на 
// Object.prototype. Когда js не находит свойство или метод в __proto__ он указывает на следующий 
// __proto__ по цепочке. Это называется цепочка прототипов.

// Помним что разные __proto__ разных по типу объектов  - совершенно независимые разные объекты.
// У одинаковых по типу объектов всегда один и тот же объект __proto__ ( они равны)

const man1 = {};
const man2 = {};


console.log(man1.__proto__ === man2.__proto__ ); //true у них __proto__ один и тот же, какой то 3 объект


const arr1 = [];
const arr2 = [];

console.log(arr1.__proto__ === arr2.__proto__); // true у них __proto__  так же равны 

let age = 19;
let num = 100;

console.log(age.__proto__ === num.__proto__); // true

// проверим теперь массив и число
console.log(arr1.__proto__ === num.__proto__); // false  у них разные типы объекта


// и так далее
let str4 = '111';
console.log(str4.__proto__ === age.__proto__); // false


// Подробнее о свойстве prototype
// У любого объекта есть __proto__ но prototype есть только у функции конструктор и класса. __proto__ 
// позволяет перемещаться по цепочке прототипов. А prototype это свойство функции которое позволяет
// добавлять что-то в конструктор. Например выше я уже добавлял в Object.prototype свою функцию.
// prototype будет так же и у простых функций, внутри функций всегда есть конструктор, даже если мы не
// используем его. prototype ссылается на конструктор!

// Это все встроенный классы, они все имеют прототип
Object.prototype;
Promise.prototype;
Function.prototype;
Boolean.prototype;
Number.prototype;
String.prototype;
Array.prototype;

// Каждый prototype - это независимый объект, с определенным набором свойств и методов так как 
// prototype это всегда независимый объект, они сами по себе, поэтому они не равны между собой

console.log(Array.prototype === Object.prototype); // false и тд



// __proto__ ссылается на prototype класса с помощью которого был создан объект. Когда мы создали 
// массив то его __proto__ будет равно Array.prototype потому что __proto__ ссылается на этот 
// прототип. __proto__ есть у любого объекта, а prototype у class либо function. Так же и __proto__
// есть у функций и классов это свойство есть У ВСЕХ!

// Немного примеров.
console.dir(Function.__proto__ === Function.prototype); // true
// функция создается с помощью функции, поэтому вот так, но 
// прото протоипа все равно приходит к объекту.
console.dir(Function.prototype.__proto__ === Object.prototype); // true

// наша конечная станция null.
console.log(Object.prototype.__proto__ === null); // true
