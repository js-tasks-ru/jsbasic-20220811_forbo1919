let calculator = {
  // ваш код

  read(a, b) {
    //this.firstValue = prompt("Введите первое значение", 0)
    //this.secondValue = prompt("Введите второе значение", 0)
    this.firstValue = a;
    this.secondValue = b;
  },   
  
  sum() { return +this.firstValue + +this.secondValue 
  },

  mul() { return +this.firstValue * +this.secondValue 
  },

};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
