let Person = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
};

Person.prototype.calculateAge = function() {
  console.log(2018 - this.yearOfBirth);
};

Person.prototype.lastName = "Smith";

let john = new Person("John", 1994, "teacher");
let mike = new Person("Mike", 1984, "designer");
let mark = new Person("John", 1942, "retired");

console.log(john.name);
console.log(mike.name);
console.log(mark.name);

console.log(john.lastName);
console.log(mike.lastName);
console.log(mark.lastName);

john.calculateAge();
mike.calculateAge();
mark.calculateAge();

// john.__proto__ === Person.prototype ==> true
// Person.__proto__ === Object.prototype ==> true
