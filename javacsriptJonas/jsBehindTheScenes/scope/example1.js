var a = "Hello!";
first();

function first() {
  var b = "Hi!";
  second();

  function second() {
    var c = "Hey!";
    console.log(a + b + c);
  }
}

// este ejemplo funciona porque second tiene un scope con todas las variables que necesita para realizar la funcion console.log.

// puede gracias al scope chain
