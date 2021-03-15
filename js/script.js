'use strict';

let money,
   time;

function start() {
   money = +prompt("Ваш бюджет на месяц?", '');


   while (isNaN(money) || money == "" || money == null) {
      money = +prompt("Ваш бюджет на месяц?", '');
   }
   time = prompt('Введите дату в формате YYYY-MM-DD', '');
}

start();



let appData = {
   budget: money,
   expenses: {},
   optionalExpenses: {},
   income: [],
   timeData: time,
   savings: false,
   showExpenses: function () {
      let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
         b = prompt("Во сколько обойдется?", '');

      while (isNaN(a) || a == "" || a == null) {
         a = prompt("Введите обязательную статью расходов в этом месяце", '');

      }
      while (isNaN(b) || b == "" || b == null) {
         b = prompt("Во сколько обойдется?", '');

      }
   },
   detectDayBudget: function () {
      appData.moneyPerDay = (appData.budget / 30).toFixed();

      alert("Ваш бюджет составляет " + appData.moneyPerDay);
   },
   detectLevel: function () {
      if (appData.moneyPerDay < 100) {
         console.log("Малый достаток");
      } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
         console.log("Средний достаток");
      } else if (appData.moneyPerDay > 2000) {
         console.log("Высокий уровень достатка");
      } else {
         console.log("Произошла ошибка");
      }
   },
   showIncomeMonth: function () {
      let a = prompt("Есть ли у Вас дипозит ", "");

      if (a == "да" && typeof (a) != Number && a != "" && a != null) {
         appData.savings = true;
      } else if (a == "нет" && a == "Нет" && typeof (a) != Number && a != "" && a != null) {
         let b = prompt("Не хотели бы вы его открыть?", "")
         if (b == "да" && typeof (a) != Number && a != "" && a != null) {
            alert("Мы с Вами свяжемся");
         } else if (b == "нет" && typeof (a) != Number && a != "" && a != null) {
            alert("Спасибо за внимание!!");
         }
      } else {
         alert("Хорошего Вам дня!");
      }

      if (appData.savings == true) {
         let c = +prompt("Сколько денег на Вашем депозите?"),
            d = +prompt("Под Какой процент?");

         appData.monthincome = (c / 100 / 12 * d).toFixed();
         alert("Ваш ежемесячный доход составляет: " + appData.monthincome);
      }
   },
   chooseOptExpenses: function () {
      for (let i = 1; i <= 3; i++) {
         let expopt = prompt("Статья необязательных расходов?");
         appData.optionalExpenses[i] = expopt;

      }

      console.log(appData);
   },
   chooseIncomeMethods: function () {
      let answer = prompt("Перечислите через запятю то, что может увеличить доход", "");
      appData.income = answer.split(",");
      appData.income.push(prompt("Может что-то ещё?", ""));
      appData.income.sort();
   }
};



for (let key of appData) {
   console.log(key);
}