'use strict';

let money = +prompt("Ваш бюджет на месяц?", ''),
   time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
   budget: money,
   expenses: {},
   optionalExpenses: {},
   income: [],
   timeData: time,
   savings: false
};

for (let i = 0; i < 2; i++) {
   let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
      b = prompt("Во сколько обойдется?", '');

   if (typeof (a) === "string" && typeof (a) != null && typeof (b) != null &&
      a != "" && b != "" && a.length < 50 && b.length < 50) {
      console.log("done");
      appData.expenses[a] + b;
   } else {

   }
};
// let i = 0;

// while (i < 2) {
//    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
//       b = prompt("Во сколько обойдется?", '');

//    if (typeof (a) === "string" && typeof (a) != null && typeof (b) != null &&
//       a != "" && b != "" && a.length < 50 && b.length < 50) {
//       console.log("done");
//       appData.expenses[a] + b;
//    } else {

//    }
//    i++
// }

// do {
//    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
//       b = prompt("Во сколько обойдется?", '');

//    if (typeof (a) === "string" && typeof (a) != null && typeof (b) != null &&
//       a != "" && b != "" && a.length < 50 && b.length < 50) {
//       console.log("done");
//       appData.expenses[a] + b;
//    } else {

//    }
//    i++
// }
// while (i < 2);

appData.moneyPerDay = appData.budget / 30;

alert("Ваш бюджет составляет " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
   console.log("Малый достаток");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
   console.log("Средний достаток");
} else if (appData.moneyPerDay > 2000) {
   console.log("Высокий уровень достатка");
} else {
   console.log("Произошла ошибка");
};