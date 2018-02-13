// hoisting:
// un concepto que importa para la creation phase de un execution context
// la idea es que antes de ejecutarse el código, se asignan las variables declaradas al VO
// como indefinidas (como propiedades)
// asimismo las funciones declaradas se vuelven propiedades del VO como punteros a las definiciones de las funciones

// lo que ayuda de hoisting es que puedes llamar a las funciones antes de definirlas, ya que en creation phase, el VO las tendra como punteros y podra acceder a ellas sin problemas

second();

function second() {
  console.log("hey");
}
