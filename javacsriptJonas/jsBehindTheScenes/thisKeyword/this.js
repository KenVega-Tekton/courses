console.log(this); // en browser, seria el window object

/*
calculateAge(1985);

function calculateAge(year) {
  // regular function call. no es un methodo. por eso apunta al global object
  console.log(2018 - year);
  console.log(this);
}*/

let john = {
  name: "John",
  yearOfBirth: 1990,
  calculateAge: function() {
    console.log(this);
    function innerFunction() {
      console.log(this);
    }
    innerFunction();
  }
};

john.calculateAge();
