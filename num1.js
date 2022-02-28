
// Программа авторизации 

let users = [
    {name: "Anna", login: "Anna123", password: 12345},
    {name: "Joy", login: "tpo569", password: 4569},
    {name: "Gosha", login: "G123", password: 45678}
];
let log = prompt('Введите логин');
let pass = prompt('Введите пароль');

function avtorizashion(log, pass) {
for (let i = 0; i < users.length; i++) {
      if (users[i].login == log && users[i].password == pass) {
          return('Привет, ' + users[i].name);
        }
     else {
          continue;
        }  
    }

  return ('ошибка авторизации');

}

alert(avtorizashion(log, pass));




// //Бот

// let num = Math.round(Math.random()*10);
// let otv = prompt('Введите число');

// function bot(num, otv) {

//     if (otv !== null) {
    
//         if (num > parseInt(otv)){
//             otv = prompt("нужно число побольше!")
//             bot(num, otv);
//         }
//         else if (num < parseInt(otv)){
//             otv =prompt("нужно число поменьше!");
//             bot(num, otv);
//         }
//         else if (num === parseInt(otv)){
//             alert("правильно");
//         }
//         else {
//             otv = prompt("Введите число");
//             bot(num, otv);
//            }
//     }
//     else {
//         alert("Всё, игра закончена");
//     }
// }
// bot(num, otv);
