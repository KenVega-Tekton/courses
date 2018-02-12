function retirement(retirementAge) {
  let a = " years left until retirement";
  return function(yearOfBirth) {
    let age = 2018 - yearOfBirth;
    console.log(retirementAge - age + a);
  };
}

retirement(65)(1994);

// una funcion interna siempre tiene acceso a las variables de la funcion externa incluso si esta ya retorno
