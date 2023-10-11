// Объекты
// Объект - ссылочный тип данных, c помощью которого представляют список данных: ключ-значение. Используется для 
// хранения коллекций различных значений.

// Создание 
// c помощью литерала объекта - {}
const newObj = {}
// с помощью конструктора new Object()
const newObj2 = new Object({name: "Diana"})


// const obj = {
//     name: "Dima", // name - ключ (строка); "Dima" - значение
//     sayHello() { // sayHello - метод объекта obj
//         console.log(this.name);
//     }
    
// };

// obj.sayHello()

// Как получить доступ к свойству объекта?
// С помощью точечной записи, либо с использованием квадратных скобок.

let value = "city";

const person = {
    name: "Alex",
    "city": "Minsk",
    "my telephone": "123-45-67"
};
// console.log(person.name); // 'Alex'
// // Квадратные скобки позволяют взять ключ из переменной:
// console.log(person["city"]); // "Minsk"
console.log(person["my telephone"]);// 123-45- 67


// Как изменить значение свойства объекта?
const myCity = {
    country: "Belarus",
    city: "Minsk",
}
// используя точечную запись:
myCity.city = "Las Vegas";
console.log(myCity); // { country: 'Belarus', city: 'Las Vegas' }

// используя квадратные скобки:
myCity["country"] = "USA";
console.log(myCity); // { country: 'USA', city: 'Las Vegas' }


// В чём особенность хранения объектов?
// При присваивании объекта переменной - переменная не хранит сам объект, а только ссылку на него.

// Объекты cравниваются по ссылке.
// При этом при сравнении будут учитываться факты того, что 2 переменные ссылаются на один и тот же объект.
// Даже если 2 объекта содержат идентичные значения (либо пустые объекты с разными ссылкaми), то они неравны.
const data = {};
const anotherData = data; // переменная anotherData ссылается на объект с именем data
console.log(data === anotherData); // true

const cat = { name: "cat" }; // одна ссылка у объекта
const dog = { name: "cat" };  // другая ссылка у объекта
console.log(cat === dog); // false

// В чём особенность константы и объекта?
// Объект, объявленный через const может быть изменен.
// const защищает только переменную от изменения, но изменять содержимое объекта можно.
const abc = {
    a: 1,
    b: 2,
    c: "3"
}

abc.c = 3;
console.log(abc); // { a: 1, b: 2, c: 3 }

abc = {};
console.log(abc); // TypeError: Assignment to constant variable


// Цикл для объектов
// for...in
const objectForLoop = {
    a: 12,
    b: "oops",
    c: true
};

for (let key in objectForLoop) {
    if (key === "c") {
        console.log(key); // c
    }
}

for (let key in objectForLoop) {
    console.log(`${key}: ${objectForLoop[key]}`); // 12 
                                    // oops 
                                   // true
}

// for (let key of Object.keys(objectForLoop)) {
//     console.log(key);
// }


// Деструктуризация объекта 
const mobile3 = {
    model: "xs",
    color: "balck",
    price: 230,
    size: {
        a: 760
    }
};

// const model2 = mobile3.model
let {model, color, lol = 10, ...restProps} = mobile3;
// console.log(newModel);
// console.log(mobile3);
// console.log(restProps);
console.log(model);
console.log(restProps);

let one = 5;
let two = 6;

[one, two] = [two, one]
console.log(one, two); // 6, 5

// let c = one // 5
// one = two // 6
// two = c // 5
// console.log(one, two);


// Деструктуризация массива
const [type,,,symbol,, ...rest] = "Evgeniy".split("")
console.log(type); // "E"
console.log(symbol); // "e"
console.log(rest); // [ 'n', 'i', 'y' ]

const [type2,,type3, ...restA] = [1, 2, 4, 5, 6, 7]
console.log(type3);

const [count, setCount] = useState(5)

// const res = useState(5);
// const count = res[0];
// const setCount = res[1]
//useState
//return [count, setCount]
// Способы копирования объектов
// Чтобы безопасно менять объекты их предварительно необходимо скопировать.
// Таким образом, будет создана другая ссылка, любые изменения не затронут старый объект.

// 1 способ - Object.assign()
// НО ЕСЛИ У ОБЪЕКТА ЕСТЬ ВЛОЖЕННЫЙ ОБЪЕКТ, ТО ССЫЛКИ НА НИХ СОХРАНЯЮТСЯ!!! 
// ПОВЕРХНОСТНАЯ КОПИЯ (shallow copy)
const objPerson = { 
    age: 25
};
const person2 = Object.assign({isActive: true}, objPerson);
person2.age = 26;
console.log(objPerson); // { age: 25 }
console.log(person2); // { isActive: true, age: 26 }
console.log(objPerson === person2); // false


// 2 способ - с помощью spread-оператора (...)
// НО ЕСЛИ У ОБЪЕКТА ЕСТЬ ВЛОЖЕННЫЙ ОБЪЕКТ, ТО ССЫЛКИ НА НИХ СОХРАНЯЮТСЯ!!!
// ПОВЕРХНОСТНАЯ КОПИЯ (shallow copy)
const car = {
    color: "black"
};
const car2 = {...car}; // {...obj} - spread-оператор разделения объекта на свойства
car2.color = "red";
console.log(car); // { color: 'black' }
console.log(car2); // { color: 'red' }
console.log(car === car2); // false

// 3 способ - JSON.parse(JSON.stringify(object))
// ССЫЛКИ НА ВЛОЖЕННЫЕ ОБЪЕКТЫ НЕ СОХРАНЯЮТСЯ :)
// ПОЛНАЯ КОПИЯ (deep copy) 
const mobile = {
    model: "xs",
    size: {
        a: 760
    }
};
const str = JSON.stringify(mobile) 
// "{"model":"xs","size":{"a":760}}"
const newObject = JSON.parse(str)
console.log(newObject);
console.log(newObject === mobile);// false

// const mobile2 = JSON.parse(JSON.stringify(mobile));
// mobile2.size.a = 780;
// console.log(mobile); // { model: 'xs', size: { a: 760 } }
// console.log(mobile2); // { model: 'xs', size: { a: 780 } }
// console.log(mobile.size === mobile2.size); // false

// 4 способ - structuredClone(object)
const store = {
    employees: [
      {
        name: "John",
        age: 25,
        position: "Sales Associate"
      },
      ]
  };

const copyStore = structuredClone(store);
copyStore.employees[0].name = "Pavel"
console.log(store);
console.log(copyStore);
console.log(store.employees[0] === copyStore.employees[0]); // false


// Для чего delete у объектов?
//  Оператор delete удаляет свойства объекта.
const objForDelete = {
    name: "Alex"
};

delete obj.name;
console.log(objForDelete.name); // undefined 

const arrRoma = [1, 2, 3];
delete arrRoma[0];
console.log(arrRoma);

// при обращении к свойству объекта, которого не существует - возвращается undefined 

// Проверка существования свойства, оператор «in»
const checkObj = {
    isActive: false
}

console.log("isActive" in checkObj); // true


// Object.keys
//  Для получения ключей объекта.
//  Метод возвращает массив собственных счётных ключей объекта.
const objectForKeys = {
    a: 12,
    b: "oops",
    c: true
};

console.log(Object.keys(objectForKeys)); // [ 'a', 'b', 'c' ]

// Object.value
//  Для получения значений свойств объекта.
//  Метод возвращает массив собственных счётных значений свойств объекта.
const objectForValues = {
    a: 12,
    b: "oops",
    c: true
};

console.log(Object.values(objectForValues)); // [ 12, 'oops', true ]

// 21 Object.entries. Для чего? Что возвращает?
//  Для получения пар [ключ-значение] объекта.
//  Метод возвращает многомерный массив пар [ключ-значение].
const objectForEntries = {
    a: 12,
    b: "oops",
    c: true
};

console.log(Object.entries(objectForEntries)); // [ [ 'a', 12 ], [ 'b', 'oops' ], [ 'c', true ] ]

// ЗАДАНИЯ:
// Создать функцию, которая возвращает объект со свойствами name и age
const newUser = (name, age) => ({ name,age})


console.log(newUser('Vitalya', 29))
const vitalya = newUser('Vitalya', 29)


// Сколько здесь объектов?
// Cделать глубокую копию объекта user {} {} {} {} {}  // {} {}
const user = {
    name: 'John',
    age: 30,
    address: {
        city: 'London',
        country: 'UK',
        coordinates: {
            latitude: 51.5074,
            longitude: -0.1278
        }
    },
    preferences: {
        theme: 'light',
        fontSize: 14,
        notifications: {
            email: true,
            sms: false
        }
    }
}; 

let a = 5
a = 10

const copyCityUser = {...user,address: {...user.address, city: "Las-Vegas"  }} //city: London
user.preferences.notifications
const copyCopyUser = {...user, 
    address: {...user.address, 
        coordinates: {...user.address.coordinates}
    }, 
    preferences:{...user.preferences, 
        notifications: {...user.preferences.notifications}}  }
//setUser(copyCityUser)
// 1. Получить список персонажей из "Гарри Поттера" и их дома -> результат вывести в формате имя-дом:


const harryPotterCharacters = {
    harryPotter: {
        name: 'Harry Potter',
        age: 17,
        house: 'Gryffindor',
        pet: {
            name: 'Hedwig',
            type: 'Owl',
            color: 'White'
        }
    },
    hermioneGranger: {
        name: 'Hermione Granger',
        age: 17,
        house: 'Gryffindor',
        pet: {
            name: 'Crookshanks',
            type: 'Cat',
            color: 'Ginger'
        }
    },
    ronWeasley: {
        name: 'Ron Weasley',
        age: 17,
        house: 'Gryffindor',
        pet: {
            name: 'Scabbers',
            type: 'Rat',
            color: 'Gray'
        }
    },
    dracoMalfoy: {
        name: 'Draco Malfoy',
        age: 17,
        house: 'Slytherin',
        pet: {
            name: 'Astronomy',
            type: 'Snake',
            color: 'Green'
        }
    }
};

// for (let key in harryPotterCharacters) {
//     console.log(`${harryPotterCharacters[key].name}-${harryPotterCharacters[key].house}`);
// }

// 2. Получить список имен питомцев персонажей из "Гарри Поттера": 
for (let key in harryPotterCharacters) {
    console.log(`${harryPotterCharacters[key].pet.name}`);
}


// НАПОМНИТЬ:
const arr = [1, 2, 3];

const newArr = arr.map((item) => {
  if (item % 2 === 0) {
    return item * 2; // либо явно не указал return
  }
  return item
});

console.log(newArr); // [undefined, 4, undefined]


// Задачи на reduce
// Задача: выбрать чётные, вычислить их квадраты и отобрать из них числа больше 10.
const numbers = [1, 3, 4, 5, 6, 7]



// Задача: с помощью reduce создать объект

const users = [
    {id: "123", name: "Vasiliy", age: 18},
    {id: "345", name: "Anna", age: 22},
    {id: "567", name: "Igor", age: 20},
    {id: "789", name: "Irina", age: 24},
]



// Напиши функцию, которая принимает массив чисел и разделяет массив на две группы: 
// четные и нечетные  {even:[], odd:[]} (через reduce)

