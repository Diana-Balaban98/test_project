// Самые верхние элементы дерева доступны как свойства объекта document
// const htmlElement = document.documentElement;
// const headElement = document.head
// const bodyElement = document.body
// console.log(htmlElement);
// console.log(headElement);
// console.log(bodyElement);


// Получаем объект body
// const bodyElement = document.body;
// // // Первый и последний дочерние элементы
// const firstChild = bodyElement.firstChild
// const lastChild = bodyElement.lastChild

// console.log(firstChild);
// console.log(lastChild);


// Получаем объект body
const bodyElement = document.body
// Коллекция childNodes содержит список всех детей, включая текстовые узлы
const childNodes = bodyElement.childNodes
console.log(childNodes);

// childNodes не массив, а коллекция - перебираемый объект (псевдомассив)
// Отличия: для перебора коллекции используем for...of, не работают методы массивов, т.к это коллекция

// Перебор коллекции
// for (let node of childNodes) {
//     console.log(node)
// }

// alert - Используется для получения данных от пользователя
// alert("Hello, world!")

// prompt - Используется для получения данных от пользователя
// const name = prompt('Введите ваше имя:');
// alert('Привет, ' + name + '!');

// confirm - Используется для подтверждения/отмены действия
// const response = confirm('Вы уверены?');

// if(response) {
//   alert('Вы подтвердили!');
// } else {
//   alert('Вы отменили');  
// }
