let john = {
  name: "John",
  yearOfBirth: 1990,
  calculateAge: function() {
    console.log(this);
  }
};

let mike = {
  name: "Mike",
  yearOfBirth: 1994
};

mike.calculateAge = john.calculateAge; // method borrowing

john.calculateAge();
mike.calculateAge();
