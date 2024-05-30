//1)Escribe una función que tome un número como argumento y devuelva true si es par y false si es impar.
function esPar(numero) {
  return numero % 2 === 0;
}
console.log(esPar(4)); 
console.log(esPar(7)); 

//otra version
function esPar(numero) {
  if (!Number.isInteger(numero)) {
    return "El número ingresado no es un entero";
  }

  return numero % 2 === 0;
}

console.log(esPar(4)); 
console.log(esPar(7)); 
console.log(esPar(2.5)); 

//otra versión
function esPar(numero) {
  const entero = parseInt(numero);

  if (isNaN(entero)) {
    return "El valor ingresado no es un número válido";
  }

  if (entero % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(esPar(4)); 
console.log(esPar(7)); 
console.log(esPar("2.5")); 



