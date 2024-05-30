//3)Escribe una función que tome un número como argumento y devuelva 
//"positivo" si es mayor que cero, "negativo" si es menor que cero y "cero" si es igual a cero.
function determinarSigno(numero) 
{
    if (numero > 0) {
      return "positivo";
    } else if (numero < 0) {
      return "negativo";
    } else {
      return "cero";
    }
}
  
  console.log(determinarSigno(5)); 
  console.log(determinarSigno(-2));
  console.log(determinarSigno(0)); 