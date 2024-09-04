//Условное ветвление
let age = 30;
if (age >= 18) {
  console.log("Вы совершеннолетний, "+"а это значит: "+ "уже можно забирать тебя скорей и увозить за сто морей");
} else {
  console.log("Вы несовершеннолетний "+ "упс, " + "в бар пока нельзя");
}

const number = 16;
if (number % 2 === 0) {
  console.log("Число четное");
} else {
  console.log("Число нечетное");
}

let score = 45;
if (score <= 25) {
  console.log("Неудовлетворительно");
} else if (score <= 50) {
  console.log("Удовлетворительно");
} else if (score <= 75) {
  console.log("Хорошо");
} else if (score <= 100) {
  console.log("Отлично");
}

//Конструкция switch
const day = 6;
switch (day) {
  case 1:
    console.log("Понедельник");
    break;
  case 2:
    console.log("Вторник");
    break;
  case 3:
    console.log("Среда");
    break;
  case 4:
    console.log("Четверг");
    break;
  case 5:
    console.log("Пятница");
    break;
  case 6:
    console.log("Суббота, " + "Шаббат Шалом!");
    break;
  case 7:
    console.log("Воскресенье");
}

const grade = 4
switch(grade){
    case 1: console.log("Плохо")
    break
    case 2: console.log("Удовлетворительно")
    break
    case 3: console.log("Хорошо")
    break
    case 4: console.log("Очень хорошо")
    break
    case 5: console.log("Отлично")
}

let hour = 9;
switch (true) {
  case hour > 7:
    console.log("Доброе утро");
    break;
  case hour > 12:
    console.log("Добрый день");
    break;
  case hour > 18:
    console.log("Добрый вечер");
    break;
  case hour > 21:
    console.log("Доброй ночи");
}

// Циклы for
for (let g = 1; g < 11; g++) {
  console.log(g);
}

let sum = 0;
for (let d= 1; d<= 100; d++) {
  sum += d; // присваиваю sum значение переменной 
}
console.log(sum);

for (let i = 2; i <= 20; i++) {
  if (i % 2 != 0) continue;
  console.log(i);
}

//циклы while
let a = 0;
while (a < 10) {
  a++;
  console.log(a);
}

let sum1 = 0;
let b = 0;
while (b < 50) {
  b++;
  sum1 += b;
}
console.log(sum1);

let count = 2;
while (count < 20) {
  count++;
  if (count % 2 === 0) console.log(count);
}
