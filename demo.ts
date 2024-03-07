class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
  }

}

function hello(person: Person, date: Date) {
  console.log(`Hello ${person.name}, the time is ${date.getTime()}!`);
}

var p = new Person("Bill", 35);
hello(p, new Date());