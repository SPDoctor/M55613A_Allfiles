var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
    }
    return Person;
}());
function hello(person, date) {
    console.log("Hello ".concat(person.name, ", the time is ").concat(date.getTime(), "!"));
}
var p = new Person("Bill", 35);
hello(p, new Date());
