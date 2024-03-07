class Thing {
  static #age;
  constructor(name, age) {
    this.name = name;
    this.#age = age;
  }
  #logMessage(msg) {
    console.log(msg);
  }
  logAge() {
    this.#logMessage(`My age is ${this.#age}`);
  }
}

class Table extends Thing {
  constructor(age) {
    super('table', age);
  }
}

class Chair extends Thing {
  constructor(age, recline) {
    super('chair', age);
    this.recline = recline;
  }
}

let chair = new Chair(5, true);
let table = new Table(150);



