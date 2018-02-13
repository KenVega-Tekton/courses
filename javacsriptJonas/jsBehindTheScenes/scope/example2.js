var a = "Hello!";
first();

function first() {
  var b = "Hi!";
  second();

  function second() {
    var c = "Hey!";
    third();
  }
}

function third() {
  var d = "John";
  console.log(a + b + c + d);
}

// no funciona porque third solo tiene acceso en su scope a sus variables (d) y el scope global (a). Por tanto no tiene acceso a b ni c
